import Handlebars from "handlebars";

import './Button.scss';

export const Button = ({ 
    text, 
    type,
    onClick
}: any) => Handlebars.compile(
    `
        <button class='custom-button' {{onClick}}>
            {{text}}
        </button>
    `
) ({ text, type, onClick });
