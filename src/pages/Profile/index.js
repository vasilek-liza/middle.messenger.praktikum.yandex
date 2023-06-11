import Handlebars from "handlebars";

import { InfoBlock } from "./components/InfoBlock";
import { ActionsBlock } from "./components/ActionsBlock";
import { Avatar } from "./components/Avatar";
import { infoRows } from "./utils";
import { Link } from "../../components/Link";
import { Button } from "../../components/Button";
import emptyAvatar from '../../assets/img/empty_avatar.svg';
import './Profile.scss';

import { template } from './profile.tmpl';

export const Profile = () =>
    Handlebars.compile(template)({
        title: 'Профиль',
        info: InfoBlock({ infoRows }),
        avatar: Avatar({
            userName: 'Иван',
            image: `${emptyAvatar}`,
            alt: 'avatar',
            save: Button({ text: 'Поменять' }),
        }),
        actions: ActionsBlock({
            logout: Link({
                text: 'Выйти',
                href: '../',
                className: 'link-red',
            }),
            changePassword: Link({
                text: 'Изменить пароль',
                href: '../change-password',
                className: 'link-blue',
            }),
            changeUserData: Link({
                text: 'Изменить данные',
                href: '../change-user-data',
                className: 'link-blue',
            }),
        }),
    });
