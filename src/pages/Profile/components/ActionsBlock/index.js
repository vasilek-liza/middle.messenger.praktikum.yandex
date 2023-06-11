import Handlebars from "handlebars";

import './ActionsBlock.scss';

export const ActionsBlock = ({ changeUserData, changePassword, logout }) => Handlebars.compile(
    `   
        <ul class='actions-block'>
            <li class='actions-block__item'>{{{changeUserData}}}</li>
            <li class='actions-block__item'>{{{changePassword}}}</li>
            <li class='actions-block__item'>{{{logout}}}</li>
        </ul>
    `
) ({ changeUserData, changePassword, logout });
