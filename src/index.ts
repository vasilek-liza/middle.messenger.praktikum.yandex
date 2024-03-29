import NotFound from './pages/NotFounded';
import Profile from './pages/Profile';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import ErrorComponent from './pages/ErrorComponent';
import { Chats } from './pages/Chats';
import ChangeUserData from './pages/ChangeUserData';
import ChangePassword from './pages/ChangePassword';
import { Router } from "./utils/Router";
import AuthControllers from "./controllers/AuthControllers";
import { store } from "./store";
import './index.scss';

document.addEventListener('DOMContentLoaded', async() => {
    Router
        .use('/login', LogIn)
        .use('/sign-up', SignUp)
        .use('/messenger', Chats)
        .use('/profile', Profile)
        .use('/settings', ChangeUserData)
        .use('/change-password', ChangePassword)
        .use('/error', ErrorComponent)
        .use('/not-found', NotFound)
        .use('/', Main)
        .start();

    try {
        await AuthControllers.fetchUser();
        if ((!store.getState()?.user?.id && window.location.pathname !== '/sign-up')) {
            Router.start();
            Router.go('/login');
        } else {
            Router.start();
        }
    } catch (e) {
        Router.start();
        if (store.getState().user) {
            Router.go('/messenger');
        } else {
            Router.go('/login');
        }
    }

})
