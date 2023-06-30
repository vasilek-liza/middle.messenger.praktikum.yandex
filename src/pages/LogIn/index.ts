import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Block from "../../utils/Block";
import { getErrorText } from "../../utils/getErrorText";
import { getFormData } from "../../utils/getFotmData";
import validateScheme from "../../utils/validateScheme";

import { template } from './logIn.tmpl';

export default class LogIn extends Block {
    constructor(props: { title: string }) {
        super(props)
    }

    protected initChildren() {
        this.children.login = new Input({
            label: 'Логин',
            name: 'login',
            events: {
                blur: (e) => {
                    console.log(e)
                    const formData = getFormData('form-auth');
                    console.log(formData)
                    let re = validateScheme({ inputName:'login', inputValue :formData.login });
                    console.log(re)
                },
            },
        });
        this.children.password = new Input({
            label: 'Пароль',
            name: 'password',
            type: 'password',
        }),
        this.children.button = new Button({ 
            text: 'Авторизоваться', 
            type: 'submit',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    const formData = getFormData('form-auth');
                    let re = validateScheme({ 
                        inputName:'login', 
                        inputValue: formData.login 
                    });
                    if(!re) {
                        re = validateScheme({ 
                            inputName:'password', 
                            inputValue: formData.password 
                        });
                    }
                    getErrorText(re);
                    console.log(formData);
                }
            }
        }),
        this.children.signup_link = new Link({
            text: 'Зарегистрироваться',
            href: '../signup',
            className: 'link-blue',
        })
    }

    render() {
        return this.compile(template, {...this.props})
    };
}