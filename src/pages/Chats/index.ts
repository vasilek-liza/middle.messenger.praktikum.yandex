import Link from "../../components/Link";
import CurrentChat from "./component/CurrentChat";
import ChatList from "./component/ChatList";
import Block from "../../utils/Block";
import { chatsList } from "./component/ChatList/utils";
import imgSend from "../../assets/img/send.svg";
import './Chats.scss';

import { template } from './chats.tmpl';
export default class Chats extends Block {
    constructor(props: { title: string }) {
        super(props);
    }

    protected initChildren(): void {
        this.children.currentChat = new CurrentChat({ 
            userProfile: chatsList[0].name,
            incomingMessages: chatsList[0].incomingMessages,
            outgoingMessages: chatsList[0].outgoingMessages,
            imgSend: imgSend
        });
        this.children.chatList = new ChatList({ chatsList }),
        this.children.link = new Link ({
            text: 'Назад к чатам',
            href: '../chats',
            className: 'link-blue',
        });

    }

    render() {
        return this.compile(template, { ...this.props })
    }
}

