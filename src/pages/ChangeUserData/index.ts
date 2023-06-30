import Button from "../../components/Button";
import Input from "../../components/Input";
import Block from "../../utils/Block";

import { template } from './changeUserData.tmpl';

export default class ChangeUserData extends Block {
    constructor(props: { title: string}) {
        super(props)
    }

    protected initChildren() {
        this.children.first_name = new Input({ label: 'Имя', name: 'first_name' });
        this.children.second_name = new Input({ label: 'Фамилия', name: 'second_name'});
        this.children.login = new Input({ label: 'Логин', name: 'login'});
        this.children.email = new Input({ label: 'Почта', name: 'email'});
        this.children.display_name = new Input({ label: 'Имя в чате', name: 'display_name'});
        this.children.phone = new Input({ label: 'Телефон', name: 'phone'});
        this.children.save = new Button({ text: 'Сохранить', type: 'submit' });
    }

    render() {
        return this.compile(template, {...this.props})
    }
}