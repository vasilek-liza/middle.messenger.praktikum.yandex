import { NotFound } from './pages/NotFounded';
import { Profile } from './pages/Profile';
import { LogIn } from './pages/LogIn';
import { SignUp } from './pages/SignUp';
import { Main } from './pages/Main';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    root.innerHTML = '';

    const getCurrentPages = () => {
        switch(window.location.pathname) {
            case '/login': 
                return LogIn();
            case '/signup': 
                return SignUp();
            case '/profile': 
                return Profile();
            case '/': 
                return Main();
            default: 
                return NotFound();
        }
    }

    root.innerHTML = getCurrentPages();
})