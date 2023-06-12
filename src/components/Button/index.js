import Handlebars from "handlebars";

import './Button.scss';

export const Button = ({ text, type }) => Handlebars.compile(
    `
        <button class='custom-button' type={{type}}>
            {{text}}
        </button>
    `
) ({ text, type });
