import Link from "../../components/Link";
import Block from "../../utils/Block";
import { Router } from "../../utils/Router";

import { template } from './error.tmpl';

export default class ErrorComponent extends Block {
    constructor(props: any) {
        super(props);
    }

    protected initChildren() {
        this.children.link = new Link({
            text: 'Назад к чатам',
            href: '../messenger',
            className: 'link-blue',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('/messenger');
                }
            }
        })
    }

    render() {
        return this.compile(template, { ...this.props })
    }
}
