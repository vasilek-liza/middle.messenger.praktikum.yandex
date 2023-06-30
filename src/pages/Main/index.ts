import Handlebars from "handlebars";

import { Link } from "../../components/Link";
import { Block } from "../../utils/Block";
import './Main.scss';

import { template } from './main.tmpl';

export class Main extends Block {
    constructor(props = {}) {
        super('div', props)
    }
    render() {
        return this._compile(template, this.props)
    };
}
