import InfoBlock from "./components/InfoBlock";
import AvatarProfile from "./components/AvatarProfile";
import Block from "../../utils/Block";
import ActionsBlock from "./components/ActionsBlock";
import { infoRows } from "./utils";
import './Profile.scss';

import { template } from './profile.tmpl';
export default class Profile extends Block {
    constructor(props = {}) {
        super(props)
    }

    protected initChildren() {
        this.children.info = new InfoBlock({ infoRows });
        this.children.avatar = new AvatarProfile({ userName: 'Иван' });
        this.children.actions = new ActionsBlock();
    }

    render() {
        return this.compile(template, {...this.props})
    }
}
