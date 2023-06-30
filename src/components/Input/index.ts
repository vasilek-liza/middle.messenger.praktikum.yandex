import Block from "../../utils/Block";
import './Input.scss';

import { template } from './Input.tmpl';
interface IInputProps {
    name: string,
    placeholder?: string,
    label?: string,
    className?: string
}

export default class Input extends Block {
    constructor(props: IInputProps) {
        super(props);
    }
    
    render() {
        return this.compile(template, {...this.props });
    }
}