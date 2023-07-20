import { ISignInData } from "../../api/AuthAPI";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import AuthControllers from "../../controllers/AuthControllers";
import Block from "../../utils/Block";
import { getErrorText } from "../../utils/getErrorText";
import { getFormData } from "../../utils/getFotmData";
import { Router } from "../../utils/Router";
import validateScheme from "../../utils/validateScheme";

import { template } from './logIn.tmpl';

export default class LogIn extends Block {
    constructor(props: any) {
        super(props)
    }

    protected initChildren() {
        this.children.login = new Input({
            placeholder: 'Логин',
            name: 'login',
            events: {
                blur: () => {
                    const formData = getFormData('form-auth');
                    const reg = validateScheme({ inputName:'login', inputValue :formData.login });
                    getErrorText(reg);
                },
            },
        });
        this.children.password = new Input({
            placeholder: 'Пароль',
            name: 'password',
            type: 'password',
            events: {
                blur: () => {
                    const formData = getFormData('form-auth');
                    const reg = validateScheme({ inputName:'password', inputValue :formData.login });
                    getErrorText(reg);
                },
            },
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
                    console.log(re)
                    console.log(formData);

                    if (!re) {
                        AuthControllers.signin(formData as ISignInData);
                    }
                }
            }
        }),
        this.children.signup_link = new Link({
            text: 'Зарегистрироваться',
            href: '../signup',
            className: 'link-blue',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('../signup');
                }
            }
        })
    }

    render() {
        return this.compile(template, {...this.props})
    }
}
