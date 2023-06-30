import Handlebars from "handlebars";

import { Link } from "../../components/Link";
import { CurrentChat } from "./component/CurrentChat";
import { ChatList } from "./component/ChatList";

import { Block } from "../../utils/Block";

import { template } from './chats.tmpl';
import './Chats.scss';
export class Chats extends Block {
    constructor(props = {}) {
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
        return this._compile(template, {
            title: 'Чаты',
            link: new Link ({
                text: 'Назад к чатам',
                href: '../chats',
                className: 'link-blue',
            }).render(),
            chatList: ChatList(),
            currentChat: CurrentChat()
        })
    }
}
