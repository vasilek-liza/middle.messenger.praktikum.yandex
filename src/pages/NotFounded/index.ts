import { Link } from "../../components/Link";
import { Block } from "../../utils/Block";

import { template } from './not-found.tmpl';

export class NotFound extends Block {
    constructor(props: { title: string }) {
        super('div', props)
    }

    init() {
        this.children.link = new Link({
            text: 'Назад к чатам',
            href: '../chats',
            className: 'link-blue', 
        })
    }

    render() {
        return this._compile(template, this.props)
    };
}
    