import Handlebars from "handlebars";

import './InfoBlock.scss';

export const InfoBlock = ({ infoRows }) => Handlebars.compile(
    `   
        <ul class='info_block'>
            {{#each infoRows}}
                <li class='info_block__item'>
                    <span class='info_block__label'>{{this.label}}</span>
                    <span class='info_block__value'>{{this.value}}</span>
                </li>
            {{/each}}
        </ul>
    `
) ({ infoRows });
