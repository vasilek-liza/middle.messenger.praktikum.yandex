import Block from "../../utils/Block";
import './Input.scss';

import { template } from './Input.tmpl';

interface IEvents  {
    blur?: (e: Event) => undefined | void,
    focus?: (e: Event) => undefined | void,
    change?: (e: Event) => undefined | void,
    keyup?: (e: Event) => undefined | void,
}

interface IInputProps {
    name: string,
    placeholder?: string,
    className?: string,
    type?: string,
    value?: string | number,
    events?: IEvents;
}

export default class Input extends Block {
    constructor(props: IInputProps) {
        super(props);
        
    }
    
    render() {
        return this.compile(
            template, 
            {...this.props}
        );
    }
}
