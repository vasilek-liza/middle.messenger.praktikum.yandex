import emptyAvatar from '../../assets/img/empty_avatar.svg';

import { InfoBlock } from "./components/InfoBlock";
import { ActionsBlock } from "./components/ActionsBlock";
import { AvatarProfile } from "./components/AvatarProfile";
import { infoRows } from "./utils";
import { Link } from "../../components/Link";
import { Button } from "../../components/Button";
import './Profile.scss';

import { template } from './profile.tmpl';
import { Avatar } from "../../components/Avatar";
import { Block } from "../../utils/Block";

export class Profile extends Block {
    constructor(props = {}) {
        super('div', props)
    }

    init() {
        this.children.link = new Link({
            text: 'Назад к чатам',
            href: '../chats',
            className: 'link-blue', 
        })
    }

    render() {
        return this._compile(template, {
            title: 'Профиль',
            info: InfoBlock({ infoRows }),
            avatar: AvatarProfile({
                userName: 'Иван',
                save: Button({ text: 'Поменять', type: 'submit' }),
                avatar: Avatar({ image: `${emptyAvatar}`, alt: 'avatar' })
            }),
            actions: ActionsBlock({
                logout: new Link({
                    text: 'Выйти',
                    href: '../',
                    className: 'link-red',
                }).render(),
                changePassword: new Link({
                    text: 'Изменить пароль',
                    href: '../change-password',
                    className: 'link-blue',
                }).render(),
                changeUserData: new Link({
                    text: 'Изменить данные',
                    href: '../change-user-data',
                    className: 'link-blue',
                }).render(),
            }),
        })
    };
}
