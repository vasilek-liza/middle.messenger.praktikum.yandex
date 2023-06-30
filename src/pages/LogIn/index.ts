import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Block from "../../utils/Block";

import { template } from './logIn.tmpl';

export default class LogIn extends Block {
    constructor(props: { title: string }) {
        super(props)
    }

    protected initChildren() {
        this.children.login = new Input({
            label: 'Логин',
            name: 'login',
        });
        this.children.password = new Input({
            label: 'Пароль',
            name: 'password',
        }),
        this.children.button = new Button({ 
            text: 'Авторизоваться', 
            type: 'submit' 
        }),
        this.children.signup_link = new Link({
            text: 'Зарегистрироваться',
            href: '../signup',
            className: 'link-blue',
        })
        this.children.login = new Input({
            label: 'Логин',
            name: 'login',
        });
    }

    render() {
        return this.compile(template, {...this.props})
    };
}