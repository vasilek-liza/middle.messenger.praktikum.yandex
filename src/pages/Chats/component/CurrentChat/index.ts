import Handlebars from "handlebars";

import { chatsList } from "../ChatList/utils";
import { Input } from "../../../../components/Input";
import imgSend from "../../../../assets/img/send.svg";

import { template } from './CurrentChat.tmpl';
import './CurrentChat.scss';

export const CurrentChat = () =>
    Handlebars.compile(template)({
        userPlofile: chatsList[0].name,
        incomingMessages: chatsList[0].incomingMessages,
        outgoingMessages: chatsList[0].outgoingMessages,
        messageInput: Input({
            name: 'message',
            placeholder: 'Сообщение',
            className: 'grey-input'
        }),
        imgSend: imgSend
    });
