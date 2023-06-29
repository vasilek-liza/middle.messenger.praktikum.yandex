import Handlebars from "handlebars";

import { InfoBlock } from "./components/InfoBlock";
import { ActionsBlock } from "./components/ActionsBlock";
import { AvatarProfile } from "./components/AvatarProfile";
import { infoRows } from "./utils";
import { Link } from "../../components/Link";
import { Button } from "../../components/Button";
import emptyAvatar from '../../assets/img/empty_avatar.svg';
import './Profile.scss';

import { template } from './profile.tmpl';
import { Avatar } from "../../components/Avatar";

export const Profile = () =>
    Handlebars.compile(template)({
        title: 'Профиль',
        info: InfoBlock({ infoRows }),
        avatar: AvatarProfile({
            userName: 'Иван',
            save: Button({ text: 'Поменять' }),
            avatar: Avatar({ image: `${emptyAvatar}`, alt: 'avatar' })
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
