import Handlebars from "handlebars";

import './Input.scss';

export const Input = ({ label, name }) => Handlebars.compile(
    `
        <label for={{name}}>{{label}}</label>
        <input type="text" id={{name}}>
    `
) ({ label, name });