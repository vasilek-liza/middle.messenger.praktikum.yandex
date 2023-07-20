import { withStore } from "../../../../store";
import { State } from "../../../../types";
import Block from "../../../../utils/Block";

import './InfoBlock.scss';

class BaseInfoBlock extends Block {
    constructor(props = {}) {
        super(props);
    }

    render() {
        return this.compile(
            `   
                <ul class='info_block'>
                    <li class='info_block__item'>
                        <span class='info_block__label'>Почта</span>
                        <span class='info_block__value'>{{email}}</span>
                    </li>
                    <li class='info_block__item'>
                        <span class='info_block__label'>Логин</span>
                        <span class='info_block__value'>{{login}}</span>
                    </li>
                    <li class='info_block__item'>
                        <span class='info_block__label'>Имя</span>
                        <span class='info_block__value'>{{first_name}}</span>
                    </li>
                    <li class='info_block__item'>
                        <span class='info_block__label'>Фамилия</span>
                        <span class='info_block__value'>{{second_name}}</span>
                    </li>
                    <li class='info_block__item'>
                        <span class='info_block__label'>Имя в чате</span>
                        <span class='info_block__value'>{{display_name}}</span>
                    </li>
                    <li class='info_block__item'>
                        <span class='info_block__label'>Телефон</span>
                        <span class='info_block__value'>{{phone}}</span>
                    </li>
                </ul>
            `, 
            { ...this.props }
        )
    }
}

function mapStateProps(state: State) {
    return {...state.user}
}

export const InfoBlock = withStore(mapStateProps)(BaseInfoBlock);
