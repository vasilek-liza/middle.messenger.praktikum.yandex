import Handlebars from "handlebars";

import { Link } from "../../components/Link";
import './Main.scss';

import { template } from './main.tmpl';

export const Main = () =>
    Handlebars.compile(template)({
        title: 'Messenger',
        linkProfile: Link({ text: 'Профиль', href: '/profile' }),
        linkLogIn: Link({ text: 'Войти', href: '/login' }),
        linkSignup: Link({ text: 'Зарегистрироваться', href: '/signup' }),
        linkNotFound: Link({ text: 'Ошибка 404', href: '/not-found' }),
        linkError: Link({ text: 'Ошибка 500', href: '/error' }),
        linkChats: Link({ text: 'Чаты', href: '/chats' }),
        linkChangePassword: Link({ text: 'Изменить пароль', href: '/change-password' }),
        linkChangeUserData: Link({ text: 'Изменить данные', href: '/change-user-data' }),
    });
