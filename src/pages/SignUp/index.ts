import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { Block } from "../../utils/Block";
import validateScheme from "../../utils/validateScheme";

import { template } from './signUp.tmpl';

interface IFormData {
    values: Record<string, string>, 
    errors: Record<string, string>
}
export class SignUp extends Block {
    constructor(props = {}) {
        super('div', props)
        
    }
    
    state: IFormData = {
        values: {
            login: '',
            password: '',
            password_confirm: '',
            first_name: '',
            second_name: '',
            email: '',
            phone: '',
        },
        errors: {
            login: '',
            password: '',
            password_confirm: '',
            first_name: '',
            second_name: '',
            email: '',
            phone: '',
        },
    }

    setState(params: IFormData) {
        this.state = params;
    }

    onFocus = (e: FocusEvent) => {
        const inputElement = e.target as HTMLInputElement;
        this.hideErrorMessage(inputElement);
    }

    onLogin = (e: SubmitEvent) => {
        e.preventDefault();
        console.log(e)
        //const texFields = Object.values(this.refs) as HTMLElement[];
        // texFields.forEach((field) => {
        //     const input = field.firstElementChild as HTMLInputElement;
        //     const { name, value } = input;
        //     this.state.values[name] = value;
        //     validateScheme({
        //         errorsState: this.state.errors,
        //         inputName: name,
        //         inputValue: value,
        //     });
        // });
    
        // const nextState = {
        //     errors: { ...this.state.errors },
        //     values: { ...this.state.values },
        // };
    
        // this.setState(nextState);
    
        // if (!Object.values(this.state.errors).some(Boolean)) {
        //     console.log(this.state.values);
        // }
    }

    render() {
        return this._compile(template, {
            title: 'Регистрация',
            first_name: Input({
                label: 'Имя',
                name: 'first_name',
            }),
            second_name: Input({
                label: 'Фамилия',
                name: 'second_name',
            }),
            login: Input({
                label: 'Логин',
                name: 'login',
            }),
            email: Input({
                label: 'Почта',
                name: 'email',
            }),
            password: Input({
                label: 'Пароль',
                name: 'password',
            }),
            password_copy: Input({
                label: 'Пароль (ещё раз)',
                name: 'password_copy',
            }),
            phone: Input({
                label: 'Телефон',
                name: 'phone',
            }),
            button: Button({ 
                text: 'Зарегистрироваться', 
                type: 'submit',
                onClick: (e) => this.onLogin(e)

            }),
            enter_link: new Link({
                text: 'Войти',
                href: '../profile',
                className: 'link-blue',
            }).render(),
        })
    };
}