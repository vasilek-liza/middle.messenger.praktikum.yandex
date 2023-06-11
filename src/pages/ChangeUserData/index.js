import Handlebars from "handlebars";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { template } from './changeUserData.tmpl';

export const ChangeUserData = () => 
    Handlebars.compile(template)({
        title: 'Изменить данные',
        first_name: Input({ label: 'Имя', name: 'first_name' }),
        second_name: Input({ label: 'Фамилия', name: 'second_name'}),
        login: Input({ label: 'Логин', name: 'login'}),
        email: Input({ label: 'Почта', name: 'email'}),
        display_name: Input({ label: 'Имя в чате', name: 'display_name'}),
        phone: Input({ label: 'Телефон', name: 'phone'}),
        save: Button({ text: 'Сохранить' }),
    });
    