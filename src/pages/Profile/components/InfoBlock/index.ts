import Handlebars from "handlebars";
import { IInfoRow } from "../../utils";

import './InfoBlock.scss';

interface IInfoBlockProps {
    infoRows: IInfoRow[],
}

export const InfoBlock = ({ infoRows }: IInfoBlockProps) => Handlebars.compile(
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
