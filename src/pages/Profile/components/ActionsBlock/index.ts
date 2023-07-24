import Link from "../../../../components/Link";
import AuthControllers from "../../../../controllers/AuthControllers";
import Block from "../../../../utils/Block";
import { Router } from "../../../../utils/Router";

import './ActionsBlock.scss';

export default class ActionsBlock extends Block {
    constructor(props = {}) {
        super(props);
    }

    protected initChildren(): void {
        this.children.logout = new Link({
            text: 'Выйти',
            href: '../',
            className: 'link-red',
            events: {
                click: (e) => {
                    e.preventDefault();
                    AuthControllers.logout();
                    Router.go('/login');
                }
            }

        });
        this.children.changePassword = new Link({
            text: 'Изменить пароль',
            href: '../change-password',
            className: 'link-blue',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('/change-password');
                }
            }
        });
        this.children.changeUserData = new Link({
            text: 'Изменить данные',
            href: '../settings',
            className: 'link-blue',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('/settings');
                }
            }
        })
    }

    render() {
        return this.compile(
            `   
                <ul class='actions-block'>
                    <li class='actions-block__item'>{{{changeUserData}}}</li>
                    <li class='actions-block__item'>{{{changePassword}}}</li>
                    <li class='actions-block__item'>{{{logout}}}</li>
                </ul>
            `, 
            { ...this.props }
        )
    }
}
