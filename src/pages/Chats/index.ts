import Link from "../../components/Link";
import { CurrentChat } from "./component/CurrentChat";
import { ChatList } from "./component/ChatList";
import Block from "../../utils/Block";
import './Chats.scss';

import { template } from './chats.tmpl';
import { State } from "../../types";
import { withStore } from "../../store";
class BaseChats extends Block {
    constructor(props: any) {
        super(props);
    }

    protected initChildren(): void {
        this.children.currentChat = new CurrentChat({});
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

