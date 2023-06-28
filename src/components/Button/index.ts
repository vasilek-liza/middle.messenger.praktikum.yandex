import Handlebars from "handlebars";

import { template } from './Button.tmpl';
import './Button.scss';

interface IButtonProps {
    text: string,
    type: string,
}

export class Button = ({ text, type }: IButtonProps) => 
    Handlebars.compile(template)({
        text,
        type
    });
