import Block from "../../utils/Block";
import './Avatar.scss';

import { template } from './Avatar.tmpl';

interface IAvatarProps {
    image: string,
    alt?: string,
}

export default class Avatar extends Block {
    constructor(props: IAvatarProps) {
        super(props);
    }
    
    render() {
        return this.compile(template, {...this.props });
    }
}
