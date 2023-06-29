import Handlebars from "handlebars";

import { template } from './Input.tmpl';
import './Input.scss';

interface IInputProps {
    name: string,
    placeholder?: string,
    label?: string,
    className?: string
}

export const Input = ({ name, placeholder, label, className }: IInputProps) => 
    Handlebars.compile(template)({
        label,
        name,
        placeholder,
        className
    });
