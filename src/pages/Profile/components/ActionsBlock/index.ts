import Link from "../../../../components/Link";
import Block from "../../../../utils/Block";

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
        });
        this.children.changePassword = new Link({
            text: 'Изменить пароль',
            href: '../change-password',
            className: 'link-blue',
        });
        this.children.changeUserData = new Link({
            text: 'Изменить данные',
            href: '../change-user-data',
            className: 'link-blue',
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
    };
}