import emptyAvatar from '../../../../assets/img/empty_avatar.svg';
import Avatar from '../../../../components/Avatar';
import Input from '../../../../components/Input';
import { withStore } from "../../../../store";
import UserControllers from '../../../../controllers/UserControllers';
import { State } from '../../../../types';
import Block from '../../../../utils/Block';
import './AvatarProfile.scss';

class BaseAvatarProfile extends Block {
    constructor(props = {}) {
        super(props);
    }

    protected initChildren(): void {  
        this.children.inputAvatar = new Input({
            type: "file",
            name: "avatar",
            className: "user-avatar__input",
            placeholder: 'Изменить аватар',
            events: {
                change: (evt) => this.changeImg(evt),
            },
        });
        this.children.avatarImg = new Avatar({ image: `${emptyAvatar}`, alt: 'avatar' })
    }

    changeImg(evt: Event) {
        const target = evt.target as HTMLInputElement;
    
        if (target.files && target.files.length > 0) {
            const file = target.files[0];
            const formData = new FormData();
    
            formData.append("avatar", file);
    
            UserControllers.changeUserAvatar(formData).finally(() => {
                target.value = "";
            });
        }
    }

    render() {
        return this.compile(
            `   
                <div class="user-avatar">
                    <form class="user-avatar__change-avatar">
                        <label class="user-avatar__label" for="avatar">Изменить аватар:</label>
                        {{{inputAvatar}}}
                    </form>
                    {{#if avatar}}            
                        <img class="avatar" src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="avatar" />
                    {{else}}
                        {{{avatarImg}}}         
                    {{/if}}
                    <p class="user-avatar__name">{{userName}}</p>
                </div>
            `, 
            { ...this.props }
        )
    }
}

function mapStateProps(state: State) {
    return {...state.user}
}

export const AvatarProfile = withStore(mapStateProps)(BaseAvatarProfile);
