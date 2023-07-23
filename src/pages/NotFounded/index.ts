import Link from "../../components/Link";
import Block from "../../utils/Block";
import { Router } from "../../utils/Router";

import { template } from './not-found.tmpl';

export default class NotFound extends Block {
    constructor(props: any) {
        super(props);
    }

    protected initChildren(): void {
        this.children.link = new Link({
            text: 'Назад к чатам',
            href: '../messenger',
            className: 'link-blue',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('../messenger');
                }
            }
        })
    }

    render() {
        return this.compile(template, { ...this.props })
    }
}
