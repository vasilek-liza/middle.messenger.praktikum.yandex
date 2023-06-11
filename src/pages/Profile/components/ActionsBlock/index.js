import Handlebars from "handlebars";

import { infoRows } from "../../utils";
import './ActionsBlock.scss';

export const ActionsBlock = () => Handlebars.compile(
    `   
        <ul>
            {{#each infoRows}}
                <li class='info_row'>
                    <span class='label'>{{this}}</span>
                    <span class='value'>{{this}}</span>
                </li>
            {{/each}}
        </ul>
    `
) (infoRows);