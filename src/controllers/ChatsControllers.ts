import { IUser } from "../api/AuthAPI";
import { ChatsAPI } from "../api/ChatsAPI";
import { UsersAPI } from "../api/UsersAPI";
import { store } from "../store";
import { newConnect } from "../utils/Websockets";

export interface LastMessage {
    user: IUser,
    time: string;
    content: string;
}

export interface ChatList {
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    last_message: LastMessage;
}

interface UsersToChat {
    users: number[];
    chatId: number;
}

interface ChatUsers {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
    role: string;
}

class ChatsController {
    private api = new ChatsAPI();
    private apiUser = new UsersAPI();

    async getChats() {
        try {
            const chatList = await this.api.getChats() as ChatList[];
            chatList.map(async (chat) => {
                const {token} = await this.api.postToken(chat.id) as any;
                await newConnect(chat.id, token);
            });
            store.set('chats', { chatList });
        } catch (e) {
            console.log(e);
        }
    }

    async createChats(data: { title: string }) {
        try {
            await this.api.postCreateChats(data);
            this.getChats().then();
        } catch (e) {
            alert(e);
        }
    }

    async getChatUsers (id: number) {
        const chatUsers = await this.api.getChatUsers(id) as ChatUsers[];
        store.set('chatUsers', { chatUsers });
        return chatUsers
    }

    async addUser(data: UsersToChat) {
        await this.api.putAddUsers(data);
        this.getChatUsers(data.chatId);
    }

    async getUserIdByLogin(data: { login: string}) {
        try {
            const user = await this.apiUser.postSearchUser(data);
            return user
        } catch (e) {
            alert('Пользователь c таким логином не найден')
        }
    }

    async removeUserFromChart(data: UsersToChat) {
        try {
            const user = await this.api.deleteUsers(data);
            this.getChatUsers(data.chatId);
            return user
        } catch (e) {
            alert('Не удалось удалить пользователя')
        }
    }

    async removeChart(data: { chatId: number }) {
        await this.api.deleteChats(data)
            .then(() => alert('Чат удален'))
            .catch(() => alert('Не удалось удалить чат'));
        this.getChats();
    }
}

export default new ChatsController();
