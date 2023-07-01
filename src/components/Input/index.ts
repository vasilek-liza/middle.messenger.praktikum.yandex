import Block from "../../utils/Block";
import './Input.scss';

import { template } from './Input.tmpl';
interface IInputProps {
    name: string,
    placeholder?: string,
    className?: string,
    type?: string,
    events?: {
        blur?: (e: Event) => undefined | void,
        focus?: (e: Event) => undefined | void,
    };
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