import Handlebars from "handlebars";

import './Button.scss';

interface IButtonProps {
    text: string,
    type?: string,
}

export const Button = ({ text, type }: IButtonProps) => Handlebars.compile(
    `
        <button class='custom-button' type={{type}}>
            {{text}}
        </button>
    `
) ({ text, type });
