import Handlebars from "handlebars";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { template } from './ChangePassword.tmpl';

export const ChangePassword = () =>
    Handlebars.compile(template)({
        title: 'Изменить пароль',
        oldPassword: Input({ 
            label: 'Старый пароль', 
            name: 'oldPassword',
        }),
        newPassword: Input({ 
            label: 'Новый пароль', 
            name: 'newPassword',
        }),
        newPasswordCopy: Input({ 
            label: 'Повторите новый пароль', 
            name: 'newPasswordCopy',
        }),
        save: Button({ text: 'Сохранить', type: 'submit' }),
    });
