import Button from "../../components/Button";
import Input from "../../components/Input";
import Block from "../../utils/Block";

import { template } from './ChangePassword.tmpl';
export default class ChangePassword extends Block {
    constructor(props: { title: string }) {
        super(props)
    }

    protected initChildren() {
        this.children.oldPassword = new Input({ 
            label: 'Старый пароль', 
            name: 'oldPassword',
        });
        this.children.newPassword = new Input({ 
            label: 'Новый пароль', 
            name: 'newPassword',
        });
        this.children.newPasswordCopy = new Input({ 
            label: 'Повторите новый пароль', 
            name: 'newPasswordCopy',
        });
        this.children.save = new Button({ text: 'Сохранить', type: 'submit' });
    }

    render() {
        return this.compile(template, {...this.props})
    };
}