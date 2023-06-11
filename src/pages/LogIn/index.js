import Handlebars from "handlebars";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";

import { template } from './logIn.tmpl';

export const LogIn = () => 
    Handlebars.compile(template)({
        title: 'Вход',
        login: Input({ 
            label: 'Логин', 
            name: 'login', 
        }),
        password: Input({ 
            label: 'Пароль', 
            name: 'password',
        }),
        button: Button({ text: 'Авторизоваться' }),
        signup_link: Link({ 
            text: 'Зарегистрироваться',
            href: '../signup',
            className: 'link-blue',
        }),
    });
    