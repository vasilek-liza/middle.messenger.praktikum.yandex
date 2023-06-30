import Block from "../../utils/Block";
// import SimpleInput from "./SimpleInput/index";
import './Input.scss';

import { template } from './Input.tmpl';
interface IInputProps {
    name: string,
    placeholder?: string,
    label?: string,
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
    protected initChildren() {
        // this.children.simpleInput = new SimpleInput({...this.props});
    }
    
    render() {
        console.log({...this.props})
        return this.compile(template, {...this.props});
    }
}