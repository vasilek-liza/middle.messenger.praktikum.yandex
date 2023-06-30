import emptyAvatar from '../../../../assets/img/empty_avatar.svg';
import Avatar from '../../../../components/Avatar';
import Button from '../../../../components/Button';
import Block from '../../../../utils/Block';
import './AvatarProfile.scss';

export default class AvatarProfile extends Block {
    constructor(props: { userName : string}) {
        super(props);
    }

    protected initChildren(): void {
        this.children.save = new Button({ text: 'Поменять', type: 'submit' });
        this.children.avatar = new Avatar({ image: `${emptyAvatar}`, alt: 'avatar' })
    }

    render() {
        return this.compile(
            `   
                <div class="user-avatar">
                    <form class="user-avatar__change-avatar">
                        <label class="user-avatar__label" for="avatar">Изменить аватар:</label>
                        <input class="user-avatar__input" type="file" name="avatar">
                        <div class="user-avatar__avatar-save">
                            {{{save}}}
                        </div>
                    </form>
                    {{{avatar}}}
                    <p class="user-avatar__name">{{userName}}</p>
                </div>
            `, 
            { ...this.props }
        )
    };
}