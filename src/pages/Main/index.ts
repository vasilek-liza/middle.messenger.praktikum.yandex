import Link from "../../components/Link";
import Block from "../../utils/Block";
import './Main.scss';

import { template } from './main.tmpl';

export default class Main extends Block {
    constructor(props = {}) {
        super(props)
    }

    protected initChildren(): void {
        this.children.linkProfile = new Link({ text: 'Профиль', href: '/profile' });
        this.children.linkLogIn = new Link({ text: 'Войти', href: '/login' });
        this.children.linkSignup = new Link({ text: 'Зарегистрироваться', href: '/signup' });
        this.children.linkNotFound = new Link({ text: 'Ошибка 404', href: '/not-found' });
        this.children.linkError = new Link({ text: 'Ошибка 500', href: '/error' });
        this.children.linkChats = new Link({ text: 'Чаты', href: '/chats' });
        this.children.linkChangePassword = new Link({ text: 'Изменить пароль', href: '/change-password' });
        this.children.linkChangeUserData = new Link({ text: 'Изменить данные', href: '/change-user-data' });
    }

    render() {
        return this.compile(template, {...this.props})
    };
}

