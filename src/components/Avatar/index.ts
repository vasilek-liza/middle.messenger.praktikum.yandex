import Handlebars from "handlebars";

import './Avatar.scss';

interface IAvatarProps {
    image: string,
    alt?: string,
}

export const Avatar = ({ image, alt }: IAvatarProps) => Handlebars.compile(
    `
        <img class="avatar" src={{image}} alt={{alt}} />
    `
) ({ image, alt });
