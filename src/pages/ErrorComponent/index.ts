import { Link } from "../../components/Link";
import { Block } from "../../utils/Block";

import { template } from './error.tmpl';

export class ErrorComponent extends Block {
    constructor(props = {}) {
        super('div', props);
    }


    init() {
        this.children.link = new Link({
            text: 'Назад к чатам',
            href: '../chats',
            className: 'link-blue', 
        })
    }

    render() {
        console.log(this.children.link)
        return this._compile(`
        <div class='page-error wrapper'>
            <h1 class='page-error__title title'>500</h1>
            <p class='page-error__description description'>Мы уже фиксим</p>
            {{{link}}}
        </div>
    `, this.props);
    }
}
