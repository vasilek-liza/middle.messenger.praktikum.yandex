import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Block from "../../utils/Block";
import { getErrorText } from "../../utils/getErrorText";
import { getFormData } from "../../utils/getFotmData";
import validateScheme from "../../utils/validateScheme";

import { template } from './signUp.tmpl';

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
            type: 'password',
        }),
        this.children.password_copy = new Input({
            label: 'Пароль (ещё раз)',
            name: 'password_copy',
            type: 'password',
        }),
        this.children.phone = new Input({
            label: 'Телефон',
            name: 'phone',
        }),
        this.children.button = new Button({ 
            text: 'Зарегистрироваться', 
            type: 'submit',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    const formData = getFormData('form-sign');
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
                            inputName:'password', 
                            inputValue: formData.password 
                        });
                    }
                    if(!re) {
                        re = validateScheme({ 
                            inputName:'password_copy', 
                            inputValue: formData.password_copy 
                        });
                    }
                    if(!re) {
                        re = validateScheme({ 
                            inputName:'phone', 
                            inputValue: formData.phone 
                        });
                    }
                    getErrorText(re);
                    console.log(formData);
                }
            }
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