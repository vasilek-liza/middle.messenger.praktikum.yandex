import Handlebars from "handlebars";

import { Link } from "../../components/Link";

import { template } from './error.tmpl';

export const Error = () =>
    Handlebars.compile(template)({
        title: '500',
        link: Link ({
            text: 'Назад к чатам',
            href: '../chats',
            className: 'link-blue', 
        })
    });
