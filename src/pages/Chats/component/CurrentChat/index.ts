import { MessageData } from "../ChatList/utils";
import Input from "../../../../components/Input";

import { template } from './CurrentChat.tmpl';
import './CurrentChat.scss';
import Block from "../../../../utils/Block";

export default class CurrentChat extends Block {
    constructor(props: { 
        userProfile: string;
        incomingMessages?: MessageData[];
        outgoingMessages?: MessageData[];
        imgSend: string
    }) {
        super(props)
    }

    protected initChildren(): void {
        this.children.messageInput = new Input({
            name: 'message',
            placeholder: 'Сообщение',
            className: 'grey-input'
        });
    }

    render() {
        return this.compile(template, {...this.props})
    };
}
