import Block from "../../../../utils/Block";
import { IInfoRow } from "../../utils";

import './InfoBlock.scss';

interface IInfoBlockProps {
    infoRows: IInfoRow[],
}

export default class InfoBlock extends Block {
    constructor(props: IInfoBlockProps) {
        super(props);
    }

    render() {
        return this.compile(
            `   
                <ul class='info_block'>
                    {{#each infoRows}}
                        <li class='info_block__item'>
                            <span class='info_block__label'>{{this.label}}</span>
                            <span class='info_block__value'>{{this.value}}</span>
                        </li>
                    {{/each}}
                </ul>
            `, 
            { ...this.props }
        )
    }
}
