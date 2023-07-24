import Input from "../../../../components/Input";
import Block from "../../../../utils/Block";
import Button from "../../../../components/Button";
import ChatsControllers from "../../../../controllers/ChatsControllers";
import { IUser } from "../../../../api/AuthAPI";
import { store, withStore } from "../../../../store";
import { State } from "../../../../types";
import { sendMessage } from "../../../../utils/Websockets";
import './CurrentChat.scss';

import { template } from './CurrentChat.tmpl';

class BaseCurrentChat extends Block {
    constructor(props = {}) {
        super(props)
    }

    async addUserToChat() {
        const state = store.getState();
        const chatId = state.currentChat?.id;
        const userLogin = prompt('Введите логин пользователя');
        if (userLogin && chatId) {
            const user = await ChatsControllers.getUserIdByLogin({login: userLogin}) as { id: number }[];
            await ChatsControllers.addUser({users:[user[0].id], chatId})
                .then(() => {
                    alert('Пользователь добавлен')
                })
                .catch(() => {
                    alert('Невозможно добавить пользователя')
                })
        } else {
            alert('Логин не может быть пустой');
        }
    }

    async removeChat() {
        const state = store.getState();
        const chatId = state.currentChat?.id;
        const isRemove = confirm("хотите удалить этот чат?");
        if (isRemove && chatId) {
            await ChatsControllers.removeChart({ chatId })
        }
    }

    async removeUserToChat() {
        const state = store.getState();
        const chatId = state.currentChat?.id;
        const userLogin = prompt('Введите логин пользователя');
        if (userLogin && chatId) {
            const user = await ChatsControllers.getUserIdByLogin({login: userLogin}) as { id: number}[];
            const chatUsers  = await ChatsControllers.getChatUsers(chatId) as IUser[];
            const existUser = chatUsers.find(elem=>elem.id === user[0].id);
            if (existUser) {
                await ChatsControllers.removeUserFromChart({users:[user[0].id],chatId})
                .then(() => {
                    alert('Пользователь удален')
                })
                .catch(() => {
                    alert('Невозможно добавить пользователя')
                })
            } else {
                alert('В этом чате пользователя не найдено');
            }
        } else {
            alert('Логин не может быть пустой');
        }
    }

    protected initChildren(): void {
        this.children.messageInput = new Input({
            name: 'message',
            placeholder: 'Сообщение',
            className: 'grey-input',
        });
        this.children.buttonSend = new Button(
            {
                text: `->`,
                type: 'submit',
                events: { 
                    click: (e) => {
                        e.preventDefault();
                        const input = this.children.messageInput as any;
                        if (input?.element?.value.length > 0) {
                            const chatId = store.getState().currentChat!.id!;
                            sendMessage(chatId, input.element.value);
                            ChatsControllers.getChats().finally(() => {
                                input.element.value = "";
                            });
                        }
                    }
                }
            }
        );
        this.children.addUser = new Button ({
            text: 'Добавить пользователя',
            events: { 
                click: () => {
                    this.addUserToChat()
                }
            }
        });
        this.children.removeUser = new Button ({
            text: 'Удалить пользователя',
            events: { 
                click: () => {
                    this.removeUserToChat()
                }
            }
        });
        this.children.removeChat = new Button ({
            text: 'Удалить чат',
            events: { 
                click: () => {
                    this.removeChat();
                    store.set('currentChat', undefined);
                }
            }
        });
    }

    render() {
        return this.compile(template, {...this.props})
    }
}
function mapStateProps(state: State) {
    const id = state.currentChat?.id;
    if (id) {
        return { messageList: [...state.messageList[id]], id}
    }
    return { id }
}

export const CurrentChat = withStore(mapStateProps)(BaseCurrentChat);
