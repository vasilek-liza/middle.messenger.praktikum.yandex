import Handlebars from "handlebars";

import { Link } from "../../components/Link";

import { template } from './main.tmpl';
import './Main.scss';

export const Main = () => 
    Handlebars.compile(template)({
        name: 'Messenger',
        linkProfile: Link({ text: 'Profile', href: '/profile' }),
        linkLogIn: Link({ text: 'Войти', href: '/login' }),
        linkSignup: Link({ text: 'Зарегистрироваться', href: '/signup' }),
        linkNotFound: Link({ text: 'NotFound', href: '/not-found' })
    });
    