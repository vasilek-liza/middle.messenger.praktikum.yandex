import Handlebars from "handlebars";

import { Link } from "../../components/Link";

import { template } from './chats.tmpl';

export const Chats = () =>
    Handlebars.compile(template)({
        title: 'Чаты',
        link: Link ({
            text: 'Назад к чатам',
            href: '../chats',
            className: 'link-blue',
        }),
    });
