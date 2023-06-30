import { Block } from "../../utils/Block";

import { template } from './Link.tmpl';
import './Link.scss';

interface ILinkProps {
    text: string,
    href: string,
    className?: string,
}
export class Link extends Block {
    constructor(props: ILinkProps) {
        super('div', props);
    }
    
    render() {
        return this._compile(template, this.props);
    }
}
    