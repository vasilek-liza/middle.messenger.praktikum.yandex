import Link from "../../components/Link";
import Block from "../../utils/Block";

import { template } from './not-found.tmpl';

interface INotFoundProps {
    title: string;
}
export default class NotFound extends Block {
    constructor(props: INotFoundProps) {
        super(props);
    }

    protected initChildren(): void {
        this.children.link = new Link({
            text: 'Назад к чатам',
            href: '../chats',
            className: 'link-blue', 
        })
    }

    render() {
        return this.compile(template, { ...this.props })
    }
}
