import Handlebars from "handlebars";

import './AvatarProfile.scss';

interface IAvatarProps {
    userName: string,
    save: string,
    avatar: string,
}

export const AvatarProfile = ({ userName, save, avatar }: IAvatarProps) => Handlebars.compile(
    `   
        <div class="user-avatar">
            <form class="user-avatar__change-avatar">
                <label class="user-avatar__label" for="avatar">Изменить аватар:</label>
                <input class="user-avatar__input" type="file" name="avatar">
                <div class="user-avatar__avatar-save">
                    {{{save}}}
                </div>
            </form>
            {{{avatar}}}
            <p class="user-avatar__name">{{userName}}</p>
        </div>
    `
) ({ userName, save, avatar });
