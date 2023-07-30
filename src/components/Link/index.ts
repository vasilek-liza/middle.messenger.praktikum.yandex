import Block from "../../utils/Block";
import './Link.scss';

import { template } from './Link.tmpl';

interface ILinkProps {
    text: string,
    href: string,
    className?: string,
    events?: {
        click?: (e: Event) => undefined | void,
    };
}
export default class Link extends Block {
    constructor(props: ILinkProps) {
        super(props);
    }
    
    render() {
        return this.compile(template, {...this.props });
    }
}
