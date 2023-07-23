import { 
    AuthAPI, 
    ISignInData, 
    ISignUpData 
} from "../api/AuthAPI";
import { store } from "../store";
import { Router } from "../utils/Router";

class AuthController {
    private api = new AuthAPI();

    async signin(data: ISignInData) {
        try {
            await this.api.signin(data);
            await this.fetchUser();
            Router.go('/profile');
        } catch (error) {
            console.log(error)
        }
    }

    async signup(data: ISignUpData) {
        try {
            await this.api.signup(data);
            await this.fetchUser();
            Router.go('/login');
        } catch (error) {
            console.log(error)
        }
    }

    async logout() {
        try {
            await this.api.logout();
            store.set('user', undefined)
        } catch (error) {
            console.log(error)
        }
    }

    async fetchUser() {
        try {
            const user = await this.api.getUser();
            store.set('user', user);
        } catch (error) {
            console.log(error)
        }
    }
}

export default new AuthController();
