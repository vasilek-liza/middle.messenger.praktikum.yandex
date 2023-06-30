import Block from "../../../utils/Block";

import { template } from './SimpleInput.tmpl';

interface ISimpleInputProps {
    name: string,
    type?: string,
    className: string,
    events?: {
        blur?: (e: Event) => undefined | void,
    };
}

export default class SimpleInput extends Block {
    constructor(props: ISimpleInputProps) {
        super(props);
    }
    
    render() {
        console.log(this.props)
        return this.compile(template, {
            ...this.props
        });
    }
}