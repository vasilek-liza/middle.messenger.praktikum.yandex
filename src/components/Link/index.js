import Handlebars from "handlebars";
import './Link.scss';

export const Link = ({ text, href, className }) => Handlebars.compile(
    `
        <a href={{href}} class={{className}}>
            {{text}}
        </a>
    `
) ({ text, href, className });