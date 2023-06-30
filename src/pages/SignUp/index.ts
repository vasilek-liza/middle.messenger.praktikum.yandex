import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Block from "../../utils/Block";
import validateScheme from "../../utils/validateScheme";

import { template } from './signUp.tmpl';

interface IFormData {
    values: Record<string, string>, 
    errors: Record<string, string>
}
export default class SignUp extends Block {
    constructor(props: { title: string }) {
        super(props)
    }
    
    protected initChildren() {
        this.children.first_name = new Input({
            label: 'Имя',
            name: 'first_name',
        }),
        this.children.second_name = new Input({
            label: 'Фамилия',
            name: 'second_name',
        }),
        this.children.login = new Input({
            label: 'Логин',
            name: 'login',
        }),
        this.children.email = new Input({
            label: 'Почта',
            name: 'email',
        }),
        this.children.password = new Input({
            label: 'Пароль',
            name: 'password',
        }),
        this.children.password_copy = new Input({
            label: 'Пароль (ещё раз)',
            name: 'password_copy',
        }),
        this.children.phone = new Input({
            label: 'Телефон',
            name: 'phone',
        }),
        this.children.button = new Button({ 
            text: 'Зарегистрироваться', 
            type: 'submit',
        }),
        this.children.enter_link = new Link({
            text: 'Войти',
            href: '../profile',
            className: 'link-blue',
        })
    }

    render() {
        return this.compile(template, {...this.props})
    };
}