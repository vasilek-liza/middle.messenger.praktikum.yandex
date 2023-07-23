import Link from "../../components/Link";
import CurrentChat from "./component/CurrentChat";
import { ChatList } from "./component/ChatList";
import Block from "../../utils/Block";
import { chatsList } from "./component/ChatList/utils";
import imgSend from "../../assets/img/send.svg";
import './Chats.scss';

import { template } from './chats.tmpl';
import { Router } from "../../utils/Router";
import ChatsControllers from "../../controllers/ChatsControllers";
import { State } from "../../types";
import { withStore } from "../../store";
class BaseChats extends Block {
    constructor(props: any) {
        super(props);
    }

    protected initChildren(): void {
        this.children.currentChat = new CurrentChat({ 
            userProfile: chatsList[0].name,
            incomingMessages: chatsList[0].incomingMessages,
            outgoingMessages: chatsList[0].outgoingMessages,
            imgSend: imgSend
        });
        this.children.chatList = new ChatList({})
    }

    render() {
        return this.compile(template, { ...this.props })
    }
}

function mapStateProps(state: State) {
    return {...state.chats}
}

export const Chats = withStore(mapStateProps)(BaseChats);

