import Handlebars from "handlebars";
import { Link } from "../../components/Link";

import { template } from './not-found.tmpl';

export const NotFound = () =>
    Handlebars.compile(template)({
        title: '404',
        link: Link ({ text: 'Назад к чатам', href: '../chats', className: 'link-blue' })
    });
