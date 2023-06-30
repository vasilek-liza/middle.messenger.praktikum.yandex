import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { Block } from "../../utils/Block";

import { template } from './ChangePassword.tmpl';
export class ChangePassword extends Block {
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
        })
    };
}