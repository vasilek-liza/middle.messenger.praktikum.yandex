import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { Block } from "../../utils/Block";

import { template } from './logIn.tmpl';

export class LogIn extends Block {
    constructor(props = {}) {
        super('div', props)
    }

    init() {
        this.children.link = new Link({
            text: 'Назад к чатам',
            href: '../chats',
            className: 'link-blue', 
        })
    }

    render() {
        return this._compile(template, {
            title: 'Вход',
            login: Input({
                label: 'Логин',
                name: 'login',
            }),
            password: Input({
                label: 'Пароль',
                name: 'password',
            }),
            button: Button({ text: 'Авторизоваться', type: 'submit' }),
            signup_link: new Link({
                text: 'Зарегистрироваться',
                href: '../signup',
                className: 'link-blue',
            }).render()
        })
    };
}