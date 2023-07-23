import Block from "./Block";
import { renderDOM } from "./renderDom";

export interface BlockConstructable<P = any> {
    new(props: P): Block;
  }

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

export class Route {
    private block: Block | null = null;
  
    constructor(
        private pathname: string,
        private readonly blockClass: any,
        private readonly query: string) {
    }
  
    leave() {
      this.block = null;
    }
  
    match(pathname: string) {
      return isEqual(pathname, this.pathname);
    }
  
    render() {
      if (!this.block) {
        this.block = new this.blockClass({});
        renderDOM(this.block as any, this.query);
        return;
      }
    }
  }

export class CustomRouter {
    private static __instance: CustomRouter;
    private history = window.history;
    private routes: Route[] = [];
    private currentRoute: Route | null = null;
  
    constructor(private readonly rootQuery: string) {
      if (CustomRouter.__instance) {
        return CustomRouter.__instance;
      }
  
      this.routes = [];
  
      CustomRouter.__instance = this;
    }
  
    public use(pathname: string, block: any) {
      const route = new Route(pathname, block, this.rootQuery);
      this.routes.push(route);
  
      return this;
    }
  
    public go(pathname: string) {
      this.history.pushState({}, '', pathname);
  
      this._onRoute(pathname);
    }
  
    public back() {
      this.history.back();
    }
  
    public forward() {
      this.history.forward();
    }
  
    public start() {
      window.onpopstate = (event: PopStateEvent) => {
        const target = event.currentTarget as Window;
  
        this._onRoute(target.location.pathname);
      }
  
      this._onRoute(window.location.pathname);
    }
  
    private _onRoute(pathname: string) {
      const route = this.getRoute(pathname);
  
      if (!route) {
        return;
      }
  
      if (this.currentRoute && this.currentRoute !== route) {
        this.currentRoute.leave();
      }
  
      this.currentRoute = route;
  
      route.render();
    }
  
    private getRoute(pathname: string) {
      return this.routes.find(route => route.match(pathname));
    }
  }
  
export const Router = new CustomRouter('#app');
