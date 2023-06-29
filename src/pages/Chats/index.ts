import Handlebars from "handlebars";

import { Link } from "../../components/Link";
import { CurrentChat } from "./component/CurrentChat";
import { ChatList } from "./component/ChatList";

import { template } from './chats.tmpl';
import './Chats.scss';

export const Chats = () =>
    Handlebars.compile(template)({
        title: 'Чаты',
        link: Link ({
            text: 'Назад к чатам',
            href: '../chats',
            className: 'link-blue',
        }),
        chatList: ChatList(),
        currentChat: CurrentChat()
    });
