import Handlebars from "handlebars";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";

import { template } from './signUp.tmpl';

export const SignUp = () =>
    Handlebars.compile(template)({
        title: 'Регистрация',
        first_name: Input({
            label: 'Имя',
            name: 'first_name',
        }),
        second_name: Input({
            label: 'Фамилия',
            name: 'second_name',
        }),
        login: Input({
            label: 'Логин',
            name: 'login',
        }),
        email: Input({
            label: 'Почта',
            name: 'email',
        }),
        password: Input({
            label: 'Пароль',
            name: 'password',
        }),
        password_copy: Input({
            label: 'Пароль (ещё раз)',
            name: 'password_copy',
        }),
        phone: Input({
            label: 'Телефон',
            name: 'phone',
        }),
        button: Button({ text: 'Зарегистрироваться', type: 'submit' }),
        enter_link: Link({
            text: 'Войти',
            href: '../profile',
            className: 'link-blue',
        }),
    });
