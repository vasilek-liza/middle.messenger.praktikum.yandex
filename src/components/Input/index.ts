import Handlebars from "handlebars";

import { template } from './Input.tmpl';
import './Input.scss';

interface IInputProps {
    label: string,
    name: string,
}

export const Input = ({ label, name }: IInputProps) => 
    Handlebars.compile(template)({
        label,
        name
    });
