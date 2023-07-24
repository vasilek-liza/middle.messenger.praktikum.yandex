import Link from "../../components/Link";
import Block from "../../utils/Block";
import { Router } from "../../utils/Router";
import './Main.scss';

import { template } from './main.tmpl';

export default class Main extends Block {
    constructor(props = {}) {
        super(props)
    }

    protected initChildren(): void {
        this.children.linkProfile = new Link({ 
            text: 'Профиль', 
            href: '/profile',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('/profile');
                }
            }
        });
        this.children.linkLogIn = new Link({ 
            text: 'Войти', 
            href: '/login',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('/login');
                }
            }
        });
        this.children.linkSignup = new Link({ 
            text: 'Зарегистрироваться', 
            href: '/sign-up',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('/sign-up');
                }
            }
        });
        this.children.linkNotFound = new Link({ 
            text: 'Ошибка 404', 
            href: '/not-found',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('/not-found');
                }
            }
        });
        this.children.linkError = new Link({ 
            text: 'Ошибка 500', 
            href: '/error',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('/error');
                }
            }
        });
        this.children.linkChats = new Link({ 
            text: 'Чаты', 
            href: '/messenger',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('/messenger');
                }
            }
        });
        this.children.linkChangePassword = new Link({ 
            text: 'Изменить пароль', 
            href: '/change-password',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('/change-password');
                }
            }
        });
        this.children.linkChangeUserData = new Link({ 
            text: 'Изменить данные', 
            href: '/settings',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('/settings');
                }
            }
        });
    }

    render() {
        return this.compile(template, {...this.props})
    }
}

