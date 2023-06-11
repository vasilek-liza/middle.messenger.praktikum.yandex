import { NotFound } from './pages/NotFounded';
import { Profile } from './pages/Profile';
import { LogIn } from './pages/LogIn';
import { SignUp } from './pages/SignUp';
import { Main } from './pages/Main';
import { Error } from './pages/Error';
import { Chats } from './pages/Chats';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    const getCurrentPages = () => {
        switch(window.location.pathname) {
            case '/login': 
                return LogIn();
            case '/signup': 
                return SignUp();
            case '/profile': 
                return Profile();
            case '/chats': 
                return Chats();
            case '/error': 
                return Error();
            case '/': 
                return Main();
            default: 
                return NotFound();
        }
    }

    root.innerHTML = getCurrentPages();
})