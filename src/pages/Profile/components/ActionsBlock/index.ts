import Handlebars from "handlebars";

import './ActionsBlock.scss';

interface IActionsBlockProps {
    changeUserData: string,
    changePassword: string,
    logout: string
}

export const ActionsBlock = ({ changeUserData, changePassword, logout }: IActionsBlockProps) => Handlebars.compile(
    `   
        <ul class='actions-block'>
            <li class='actions-block__item'>{{{changeUserData}}}</li>
            <li class='actions-block__item'>{{{changePassword}}}</li>
            <li class='actions-block__item'>{{{logout}}}</li>
        </ul>
    `
) ({ changeUserData, changePassword, logout });
