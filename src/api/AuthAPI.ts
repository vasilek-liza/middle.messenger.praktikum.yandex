import { API } from './api';

export interface ISignUpData {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    password: string
}

export interface IUser {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string
}

export interface ISignInData {
    login: string;
    password: string
}

export class AuthAPI extends API {
    constructor() {
        super('/auth');
    }

    signin(data: ISignInData): Promise<unknown> {
        return this.http.post('/signin', {
            data,
            headers: {"Content-Type": "application/json"}
        })
    }

    signup(data: ISignUpData): Promise<unknown> {
        return this.http.post(
            '/signup', 
            {
                data,
                headers: {"Content-Type": "application/json"}
            }
        )
    }

    logout(): Promise<unknown> {
        return this.http.post('/logout')
    }

    getUser(): Promise<unknown> {
        return this.http.get('/user')

    }

}