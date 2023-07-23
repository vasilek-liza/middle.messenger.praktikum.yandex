import Link from "../../../../components/Link";
import { IchatsList } from "./utils";
import Block from "../../../../utils/Block";
import './ChatList.scss';

import { template } from './ChatList.tmpl';
import { Router } from "../../../../utils/Router";
import Button from "../../../../components/Button";
import { State } from "../../../../types";
import { store, withStore } from "../../../../store";
import ChatsControllers from "../../../../controllers/ChatsControllers";

class BaseChatList extends Block {
    constructor(props: { chatsList: IchatsList[]}) {
        super({
            ...props,
            events: {
                click: (e: any) => {
                    if (e.target?.id) store.set('currentChat', { id: e.target?.id});
                }
            },
        })
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
    }

    render() {
        return this.compile(template, {...this.props})
    }
}

function mapStateProps(state: State) {
    return {...state.chats}
}

export const ChatList = withStore(mapStateProps)(BaseChatList);
