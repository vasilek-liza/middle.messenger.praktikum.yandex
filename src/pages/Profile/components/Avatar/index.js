import Handlebars from "handlebars";

import './Avatar.scss';

export const Avatar = ({ image, userName, alt, save }) => Handlebars.compile(
    `   
        <div class="user-avatar">
            <form class="user-avatar__change-avatar">
                <label class="user-avatar__label" for="avatar">Изменить аватар:</label>
                <input class="user-avatar__input" type="file" name="avatar">
                <div class="user-avatar__avatar-save">
                    {{{save}}}
                </div>
            </form>
            <img class="user-avatar__avatar" src={{image}} alt={{alt}} />
            <p class="user-avatar__name">{{userName}}</p>
        </div>
    `
) ({ image, userName, alt, save });
