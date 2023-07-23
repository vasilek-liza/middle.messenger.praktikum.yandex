import { MessageData } from "../ChatList/utils";
import Input from "../../../../components/Input";

import { template } from './CurrentChat.tmpl';
import './CurrentChat.scss';
import Block from "../../../../utils/Block";
import Button from "../../../../components/Button";
import { getFormData } from "../../../../utils/getFotmData";
import { getErrorText } from "../../../../utils/getErrorText";
import validateScheme from "../../../../utils/validateScheme";
import ChatsControllers from "../../../../controllers/ChatsControllers";
import { ISignUpData, IUser } from "../../../../api/AuthAPI";
import { store } from "../../../../store";

export default class CurrentChat extends Block {
    constructor(props: { 
        userProfile: string;
        incomingMessages?: MessageData[];
        outgoingMessages?: MessageData[];
        imgSend: unknown
    }) {
        super(props)
    }

    async addUserToChat() {
        const userLogin = prompt('Введите логин пользователя');
        if (userLogin) {
            const user = await ChatsControllers.getUserIdByLogin({login: userLogin}) as { id: number}[];
            await ChatsControllers.addUser({users:[user[0].id],chatId: 272})
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
        const chatId = 290;
        const isRemove = confirm("хотите удалить этот чат?");
        if (isRemove) {
            await ChatsControllers.removeChart({ chatId })
        }
    }

    async removeUserToChat() {
        const chatId = 272;
        const userLogin = prompt('Введите логин пользователя');
        if (userLogin) {
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
                        const formData = getFormData('form-message');
                        const re = validateScheme({ 
                            inputName:'message', 
                            inputValue: formData.message 
                        });
                        getErrorText(re);
                        console.log(formData);
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
                    this.removeChat()
                }
            }
        })
    }

    render() {
        return this.compile(template, {...this.props})
    }
}
