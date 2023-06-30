import { MessageData } from "../ChatList/utils";
import Input from "../../../../components/Input";

import { template } from './CurrentChat.tmpl';
import './CurrentChat.scss';
import Block from "../../../../utils/Block";
import Button from "../../../../components/Button";
import { getFormData } from "../../../../utils/getFotmData";
import { getErrorText } from "../../../../utils/getErrorText";
import validateScheme from "../../../../utils/validateScheme";

export default class CurrentChat extends Block {
    constructor(props: { 
        userProfile: string;
        incomingMessages?: MessageData[];
        outgoingMessages?: MessageData[];
        imgSend: string
    }) {
        super(props)
    }

    protected initChildren(): void {
        this.children.messageInput = new Input({
            name: 'message',
            placeholder: 'Сообщение',
            className: 'grey-input',
        });
        this.children.buttonSend = new Button(
            {
                text: `->`,
                type: 'submit',
                events: { 
                    click: (e) => {
                        e.preventDefault();
                        const formData = getFormData('form-message');
                        let re = validateScheme({ 
                            inputName:'message', 
                            inputValue: formData.message 
                        });
                        getErrorText(re);
                        console.log(formData);
                    }
                }
            }
        )
    }

    render() {
        return this.compile(template, {...this.props})
    };
}
