import Handlebars from "handlebars";

import { Link } from "../../../../components/Link";
import { Input } from "../../../../components/Input";
import { chatsList } from "./utils";

import { template } from './ChatList.tmpl';
import './ChatList.scss';

export const ChatList = () =>
    Handlebars.compile(template)({
        link: new Link ({
            text: 'Мой профиль',
            href: '../profile',
            className: 'link-follow',
        }).render(),
        search: Input({
            placeholder: 'Поиск',
            name: 'search',
            className: 'grey-input'
        }),
        chatsList: chatsList
    });
