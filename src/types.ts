import { IUser } from "./api/AuthAPI";
import { ChatList } from "./controllers/ChatsControllers";

export interface State {
    user?: IUser;
    chats?: {chatList: ChatList[]};
    currentChat?: { id: number };
    messageList?: any;
}
