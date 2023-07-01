import Handlebars from 'handlebars';
import EventBus from "./EventBus";
import { nanoid } from "nanoid";

type Props = Record<string, any>
export default class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  public id = nanoid(6);

  private _element: HTMLElement | null = null;
  // private _meta: { props: Props }; 

  protected props: Props;
  protected children: Record<string, Block>;

  private eventBus: () => EventBus;

  constructor(propsAndChildren: Props = {}) {
    const eventBus = new EventBus();

    const { props, children } = this.getChildren(propsAndChildren);

    this.children = children;

    this.initChildren();

    // this._meta = { props };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  getChildren(propsAndChildren: Props) {
    const children: Props = {};
    const props: Props = {};

    Object.entries(propsAndChildren).map(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (
        Array.isArray(value) &&
        value.every((v) => v instanceof Block)
      ) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: unknown, newProps: unknown) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: unknown, newProps: unknown) {
    // вывела в консоль чтобы линтер не ругался, что я их пока не использую
    console.log(oldProps, newProps)
    return true;
  }

  setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const fragment = this.render();

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }

    this._element = newElement;

    this._addEvents();
  }
  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent(): HTMLElement | null {
    return this.element;
  }

  _makePropsProxy(props: Props) {
    const self = this;

    return new Proxy(props as unknown as object, {
      get(target: Record<string, unknown>, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target: Record<string, unknown>, prop: string, value: unknown) {
        const oldProps = { ...target };
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },

      deleteProperty() {
        throw new Error("Отказано в доступе");
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  _addEvents() {
    const events: Record<string, () => void> = (this.props as Props).events;

    if (!events) {
      return;
    }

    Object.keys(events).forEach((eventName) => {
      this._element!.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const events: Record<string, () => void> = (this.props as Props).events;

    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener);
    });
  }

  compile(template: string, context: Props) {
    const fragment = this._createDocumentElement("template") as HTMLTemplateElement;

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        context[key] = child.map((ch) => `<div data-id="id-${ch.id}"></div>`);

        return;
      }

      context[key] = `<div data-id="id-${child.id}"></div>`;
    });

    const htmlString = Handlebars.compile(template)(context);

    fragment.innerHTML = htmlString;

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        context[key] = child.map((ch) => `<div data-id="id-${ch.id}"></div>`);
        return;
      }

      const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`);

      if (!stub) {
        return;
      }

      stub.replaceWith(child.getContent()!);
    });

    return fragment.content;
  }
  
  show() {
    this.getContent()!.style.display = "block";
  }

  hide() {
    this.getContent()!.style.display = "none";
  }

  protected initChildren() {}
}
