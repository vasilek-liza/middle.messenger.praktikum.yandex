import Link from "../../../../components/Link";
import Input from "../../../../components/Input";
import emptyAvatar from '../../../../assets/img/empty_avatar.svg';
import { chatsList, IchatsList } from "./utils";
import Block from "../../../../utils/Block";
import './ChatList.scss';

import { template } from './ChatList.tmpl';
import { Router } from "../../../../utils/Router";
import Button from "../../../../components/Button";
import { State } from "../../../../types";
import { store, withStore } from "../../../../store";
import ChatsControllers from "../../../../controllers/ChatsControllers";
import Avatar from "../../../../components/Avatar";

class BaseChatList extends Block {
    constructor(props: { chatsList: IchatsList[]}) {
        super(props)
    }

    init(): void {
        ChatsControllers.getChats();
    }

    createChat() {
        const chatTitle = prompt('Введите название чата');
        if (chatTitle) {
            ChatsControllers.createChats({title: chatTitle})
                .then(() => {
                    ChatsControllers.getChats();
                    alert('Чат добавлен :)');
                })
                .catch(() => alert('Не удалось добавить чат'));
        } else {
            alert('Введите название чата');
        }
    }

    protected initChildren(): void {
        this.children.link = new Link ({
            text: 'Мой профиль',
            href: '../profile',
            className: 'link-follow',
            events: { 
                click: (e) => {
                    e.preventDefault();
                    Router.go('../profile');
                }
            }
        });
        this.children.addChat = new Button ({
            text: 'Добавить чат',
            events: { 
                click: () => {
                    this.createChat()
                }
            }
        });
        this.children.avatarImg = new Avatar({ image: `${emptyAvatar}`, alt: 'avatar' });
        this.children.search = new Input({
            placeholder: 'Поиск',
            name: 'search',
            className: 'grey-input'
        })
    }

    render() {
        return this.compile(template, {...this.props})
    }
}

function mapStateProps(state: State) {
    return {...state.chats}
}

export const ChatList = withStore(mapStateProps)(BaseChatList);
