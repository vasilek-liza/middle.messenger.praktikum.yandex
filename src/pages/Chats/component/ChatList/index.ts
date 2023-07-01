import Link from "../../../../components/Link";
import Input from "../../../../components/Input";
import { IchatsList } from "./utils";
import Block from "../../../../utils/Block";
import './ChatList.scss';

import { template } from './ChatList.tmpl';

export default class ChatList extends Block {
    constructor(props: { chatsList: IchatsList[]}) {
        super(props)
    }

    protected initChildren(): void {
        this.children.link = new Link ({
            text: 'Мой профиль',
            href: '../profile',
            className: 'link-follow',
        });
        this.children.search = new Input({
            placeholder: 'Поиск',
            name: 'search',
            className: 'grey-input'
        })
    }

    render() {
        return this.compile(template, {...this.props})
    };
}
