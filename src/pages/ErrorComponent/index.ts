import Link from "../../components/Link";
import Block from "../../utils/Block";

import { template } from './error.tmpl';

export default class ErrorComponent extends Block {
    constructor(props: { title: string }) {
        super(props);
    }

    protected initChildren() {
        this.children.link = new Link({
            text: 'Назад к чатам',
            href: '../chats',
            className: 'link-blue', 
        })
    }

    render() {
        return this.compile(template, { ...this.props })
    }
}
