import Block from "../../utils/Block";
import './Button.scss';

import { template } from './Button.tmpl';

interface IButtonProps {
    text: string,
    type?: string,
    onClick?: (e: any) => void
}

export default class Button extends Block {
    constructor(props: IButtonProps) {
        super(props);
    }
    
    render() {
        return this.compile(template, {...this.props });
    }
}