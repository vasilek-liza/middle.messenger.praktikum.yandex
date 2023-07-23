import { InfoBlock } from "./components/InfoBlock";
import { AvatarProfile } from "./components/AvatarProfile";
import Block from "../../utils/Block";
import ActionsBlock from "./components/ActionsBlock";
import AuthControllers from "../../controllers/AuthControllers";
import './Profile.scss';

import { template } from './profile.tmpl';
import { Router  }from "../../utils/Router";
import Link from "../../components/Link";
export default class Profile extends Block {
    constructor(props = {}) {
        super(props)
    }

    protected initChildren() {
        this.children.info = new InfoBlock({});
        this.children.avatar = new AvatarProfile({});
        this.children.actions = new ActionsBlock();
        this.children.link = new Link({
            text: 'Назад к чатам',
            href: '../messenger',
            className: 'link-blue',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('../messenger');
                }
            }
        })
    }

    componentDidMount(): void {
        AuthControllers.fetchUser().catch(() => Router.go('/signin'));
    }

    render() {
        return this.compile(template, {...this.props})
    }

}
