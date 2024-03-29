import { IUser } from "../../api/AuthAPI";
import { UserProfile } from "../../api/UsersAPI";
import Button from "../../components/Button";
import Input from "../../components/Input";
import UserControllers from "../../controllers/UserControllers";
import { store } from "../../store";
import Block from "../../utils/Block";
import { getErrorText } from "../../utils/getErrorText";
import { getFormData } from "../../utils/getFotmData";
import validateScheme from "../../utils/validateScheme";

import { template } from './changeUserData.tmpl';

export default class ChangeUserData extends Block {
    constructor(props = {}) {
        super(props)
    }

    getCurrentValue(value: keyof IUser) {
        const state = store.getState();
        return state.user?.[value]
    }

    protected initChildren() {
        this.children.first_name = new Input({ 
            placeholder: 'Имя', 
            name: 'first_name',
            value: this.getCurrentValue('first_name'),
            events: {
                blur: () => {
                    const formData = getFormData('form-change-data');
                    const reg = validateScheme({ inputName:'first_name', inputValue: formData.first_name });
                    getErrorText(reg);
                },
            },
        });
        this.children.second_name = new Input({ 
            placeholder: 'Фамилия', 
            name: 'second_name',
            value: this.getCurrentValue('second_name'),
            events: {
                blur: () => {
                    const formData = getFormData('form-change-data');
                    const reg = validateScheme({ inputName:'email', inputValue: formData.email });
                    getErrorText(reg);
                },
            },
        });
        this.children.login = new Input({ 
            placeholder: 'Логин', 
            name: 'login',
            value: this.getCurrentValue('login'),
            events: {
                blur: () => {
                    const formData = getFormData('form-change-data');
                    const reg = validateScheme({ inputName:'email', inputValue: formData.email });
                    getErrorText(reg);
                },
            },
        });
        this.children.email = new Input({ 
            placeholder: 'Почта', 
            name: 'email',
            value: this.getCurrentValue('email'),
            events: {
                blur: () => {
                    const formData = getFormData('form-change-data');
                    const reg = validateScheme({ inputName:'email', inputValue: formData.email });
                    getErrorText(reg);
                },
            },
        });
        this.children.display_name = new Input({ 
            placeholder: 'Имя в чате', 
            name: 'display_name',
            value: this.getCurrentValue('display_name'),
        });
        this.children.phone = new Input({ 
            placeholder: 'Телефон', 
            name: 'phone',
            value: this.getCurrentValue('phone'),
            events: {
                blur: () => {
                    const formData = getFormData('form-change-data');
                    const reg = validateScheme({ inputName:'phone', inputValue: formData.phone });
                    getErrorText(reg);
                },
            },
        });
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
                            inputName:'phone', 
                            inputValue: formData.email 
                        });
                    }
                    getErrorText(re);
                    console.log(formData);
                    UserControllers.changeUserProfile(formData as UserProfile);
                }
            }
        });
    }

    render() {
        return this.compile(template, {...this.props})
    }
}
