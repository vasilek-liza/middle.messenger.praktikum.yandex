import Handlebars from "handlebars";

import { infoRows } from "../../utils";
import './InfoBlock.scss';

export const InfoBlock = () => Handlebars.compile(
    `   
        <ul>
            {{#each infoRows}}
                <li class='info_row'>
                    <span class='label'>{{this.label}}</span>
                    <span class='value'>{{this.label}}</span>
                </li>
            {{/each}}
        </ul>
    `
) (infoRows);