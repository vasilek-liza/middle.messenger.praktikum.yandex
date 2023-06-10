import Handlebars from "handlebars";
import './Button.scss';

export const Button = ({ text }) => Handlebars.compile(
    `
        <button>
            {{text}}
        </button>
    `
) ({ text });