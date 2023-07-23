import UsersAPI, { 
    UserProfile,
    Password
} from "../api/UsersAPI";
import { store } from "../store";
import { Router } from "../utils/Router";

class UserController {
    private api = new UsersAPI();

    async changeUserProfile(data: UserProfile) {
        try {
            const user = await this.api.putUserProfile(data);
            store.set('user', user);
            Router.go('/profile');
        } catch (error) {
            console.log(error)
        }
    }

    async changeUserAvatar(data: FormData) {
        try {
            const user = await this.api.putUserAvatar(data);
            store.set('user', user);
            Router.go('/profile');
        } catch (error) {
            console.log(error)
        }
    }

    async changeUserPassword(data: Password) {
        try {
            await this.api.putUserPassword(data);
            Router.go('/profile');
        } catch (error) {
            console.log(error)
        }
    }
    
}

export default new UserController();
