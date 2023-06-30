import Button from "../../components/Button";
import Input from "../../components/Input";
import Block from "../../utils/Block";
import { getErrorText } from "../../utils/getErrorText";
import { getFormData } from "../../utils/getFotmData";
import validateScheme from "../../utils/validateScheme";

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
        this.children.save = new Button({ 
            text: 'Сохранить', 
            type: 'submit',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    const formData = getFormData('form-change-data');
                    let re = validateScheme({ 
                        inputName:'first_name', 
                        inputValue: formData.first_name 
                    });
                    if(!re) {
                        re = validateScheme({ 
                            inputName:'second_name', 
                            inputValue: formData.second_name 
                        });
                    }
                    if(!re) {
                        re = validateScheme({ 
                            inputName:'login', 
                            inputValue: formData.login 
                        });
                    }
                    if(!re) {
                        re = validateScheme({ 
                            inputName:'email', 
                            inputValue: formData.email 
                        });
                    }
                    if(!re) {
                        re = validateScheme({ 
                            inputName:'display_name', 
                            inputValue: formData.display_name 
                        });
                    }
                    if(!re) {
                        re = validateScheme({ 
                            inputName:'phone', 
                            inputValue: formData.email 
                        });
                    }
                    getErrorText(re);
                    console.log(formData);
                }
            }
        });
    }

    render() {
        return this.compile(template, {...this.props})
    }
}