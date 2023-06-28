import Handlebars from "handlebars";

import { template } from './Link.tmpl';
import './Link.scss';

interface ILinkProps {
    text: string,
    href: string,
    className?: string,
}

export const Link = ({ text, href, className }: ILinkProps) => 
    Handlebars.compile(template)({
        text,
        href,
        className
    });