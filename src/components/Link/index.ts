import Block from "../../utils/Block";

import { template } from './Link.tmpl';
import './Link.scss';

interface ILinkProps {
    text: string,
    href: string,
    className?: string,
}
export default class Link extends Block {
    constructor(props: ILinkProps) {
        super(props);
    }
    
    render() {
        return this.compile(template, {...this.props });
    }
}
    