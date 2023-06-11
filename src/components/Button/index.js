import Handlebars from "handlebars";

import './Button.scss';

export const Button = ({ text }) => Handlebars.compile(
    `
        <button class='custom-button'>
            {{text}}
        </button>
    `
) ({ text });
