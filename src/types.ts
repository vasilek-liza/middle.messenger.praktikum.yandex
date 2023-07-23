import { IUser } from "./api/AuthAPI";
import { ChatList } from "./controllers/ChatsControllers";

export interface State {
    user?: IUser;
    chats?: ChatList[]
}