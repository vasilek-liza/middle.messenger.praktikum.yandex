import { renderDom } from "./utils/renderDom";
import { chatsList } from "./pages/Chats/component/ChatList/utils";
import NotFound from './pages/NotFounded';
import Profile from './pages/Profile';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import ErrorComponent from './pages/ErrorComponent';
import Chats from './pages/Chats';
import ChangeUserData from './pages/ChangeUserData';
import ChangePassword from './pages/ChangePassword';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {

    const LogInPage = new LogIn({ title: 'Войти' });
    const SignUpPage = new SignUp({ title: 'Регистрация' });
    const ProfilePage = new Profile({ title: 'Профиль'});
    const ChatsPage = new Chats({ title: 'Чаты' });
    const ErrorComponentPage = new ErrorComponent({ title: '500'});
    const ChangeUserDataPage = new ChangeUserData({ title: 'Изменить данные' });
    const ChangePasswordPage = new ChangePassword({ title: 'Изменить пароль'});
    const NotFoundPage = new NotFound({ title: '404'});

    const getCurrentPages = () => {

        switch(window.location.pathname) {
            case '/login': 
                return LogInPage;
            case '/signup': 
                return SignUpPage;
            case '/profile': 
                return ProfilePage;
            case '/chats': 
                return ChatsPage;
            case '/error': 
                return ErrorComponentPage;
            case '/change-user-data': 
                return ChangeUserDataPage;
            case '/change-password': 
                return ChangePasswordPage;
            case '/': 
            return new Main;
            default: 
                return NotFoundPage;
        }
    }
    
    renderDom("#app", getCurrentPages());

})
