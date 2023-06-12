import Handlebars from "handlebars";

import './Input.scss';

export const Input = ({ label, name }) => Handlebars.compile(
    `
        <label for={{name}} class='custom-label'>{{label}}</label>
        <input type="text" class='custom-input' name={{name}}>
    `
) ({ label, name });
