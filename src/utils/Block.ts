import Handlebars from 'handlebars';

import EventBus from './EventBus';
import { nanoid } from 'nanoid';

export class Block<P extends Record<string, any> = any> {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    } as const;
    
    public id = nanoid(6);
    private eventBus = () => EventBus;
    private _element: HTMLElement | null = null;
    private _meta: { tagName: string; props: P};
    protected props: P;
    public children: Record<string, Block> = {}
    
    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */

    constructor(tagName = "div", propsWithChildren: P) {
        const eventBus = new EventBus();
        const {
            props,
            children
        } = this._getChildrenandProps(propsWithChildren);

        this._meta = {
            tagName,
            props
        };

        this.children = children;
        this.props = this._makePropsProxy(props);
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _getChildrenandProps(childrenAndProps: P): {
            props: P,
            children: Record<string, Block>
        } {
        const props: Record<string, unknown> = {};
        const children: Record<string, Block> = {};

        Object.entries(childrenAndProps)
            .forEach(([ key, value ]) => {
                if (value instanceof Block) {
                    children[key as string] = value;
                } else {
                    props[key] = value;
                }
            })

        return { props: props as P, children }

    }

    _addEvents(input: HTMLElement | null) {
        const { events = {} } = (this.props as any).events;

        if (!events) {
            return;
        }

        if (input) {
            Object.keys(events).forEach(([event, listener]) => {
                input.addEventListener(event, listener);
            });
        } else {
            Object.entries(events).forEach(([event, listener]) => {
                this._element?.addEventListener(event, listener);
            });
        }
    }
    
    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    
    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }
    
    private _init() {
        this._createResources();
        this._init();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    protected init() {};
    
    _componentDidMount() {
        this.componentDidMount();
    } 
    
    componentDidMount() {};
    
    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);

        Object.values(this.children).forEach(child => child.dispatchComponentDidMount());
    }
    
    private _componentDidUpdate(oldProps: P, newProps: P) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    
    componentDidUpdate(oldProps: P, newProps: P) {
        return true;
    }
    
    setProps = (nextProps: unknown) => {
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
        this._element!.innerHTML = '';
        this._element!.append(fragment);
        this._addEvents();
    }
    
    render() {}
    
    getContent() {
        return this.element;
    }
    
    _makePropsProxy(props: P) {
        const self = this;
        
        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },

            set(target, prop: string, value) {
                const oldTarget = { ...target };
                target[prop as keyof P] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);

                return true;
            },

            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }
    
    _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    }
    
    show() {
        this.getContent()!.style.display = "block";
    }
    
    hide() {
        this.getContent()!.style.display = "none";
    }
}