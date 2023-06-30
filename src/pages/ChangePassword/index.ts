import Button from "../../components/Button";
import Input from "../../components/Input";
import Block from "../../utils/Block";
import { getErrorText } from "../../utils/getErrorText";
import { getFormData } from "../../utils/getFotmData";
import validateScheme from "../../utils/validateScheme";

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
        this.children.save = new Button({ 
            text: 'Сохранить', 
            type: 'submit',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    const formData = getFormData('form-change-password');
                    let re = validateScheme({ 
                        inputName:'password', 
                        inputValue: formData.oldPassword 
                    });
                    if(!re) {
                        re = validateScheme({ 
                            inputName:'password', 
                            inputValue: formData.newPassword 
                        });
                    }
                    if(!re) {
                        re = validateScheme({ 
                            inputName:'password', 
                            inputValue: formData.newPasswordCopy 
                        });
                    }
                    getErrorText(re);
                    console.log(re);
                    console.log(formData);
                }
            }
        });
    }

    render() {
        return this.compile(template, {...this.props})
    };
}