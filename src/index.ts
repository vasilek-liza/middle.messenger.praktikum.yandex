import { NotFound } from './pages/NotFounded';
import { Profile } from './pages/Profile';
import { LogIn } from './pages/LogIn';
import { SignUp } from './pages/SignUp';
import { Main } from './pages/Main';
import { ErrorComponent } from './pages/ErrorComponent';
import { Chats } from './pages/Chats';
import './index.scss';
import { ChangeUserData } from './pages/ChangeUserData';
import { ChangePassword } from './pages/ChangePassword';
import { Link } from './components/Link';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    root!.innerHTML = '';

    const getCurrentPages = () => {
        switch(window.location.pathname) {
            case '/login': 
                return new LogIn().render();
            case '/signup': 
                return new SignUp().render();
            case '/profile': 
                return new Profile().render();
            case '/chats': 
                return new Chats().render();
            case '/error': 
                return new ErrorComponent().render();
            case '/change-user-data': 
                return new ChangeUserData().render();
            case '/change-password': 
                return new ChangePassword().render();
            case '/': 
                return new Main({
                    title: 'Messenger',
                    linkProfile: new Link({ text: 'Профиль', href: '/profile' }).render,
                    linkLogIn: new Link({ text: 'Войти', href: '/login' }).render(),
                    linkSignup: new Link({ text: 'Зарегистрироваться', href: '/signup' }).render(),
                    linkNotFound: new Link({ text: 'Ошибка 404', href: '/not-found' }).render(),
                    linkError: new Link({ text: 'Ошибка 500', href: '/error' }).render(),
                    linkChats: new Link({ text: 'Чаты', href: '/chats' }).render(),
                    linkChangePassword: new Link({ text: 'Изменить пароль', href: '/change-password' }).render(),
                    linkChangeUserData: new Link({ text: 'Изменить данные', href: '/change-user-data' }).render(),
                }).render();
            default: 
                return new NotFound({ title: '404'}).render();
        }
    }
    
    if(root) {
        root.append(getCurrentPages());
    }
})
