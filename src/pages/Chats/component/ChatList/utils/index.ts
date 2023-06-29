import emptyAvatar from '../../../../../assets/img/empty_avatar.svg';

export interface IchatsList {
    image: string, 
    alt: string, 
    name: string, 
    message: string, 
    time: string, 
    count: string, 
    incomingMessages?: MessageData[],
    outgoingMessages?: MessageData[],
}

export type MessageData = {
    text: string;
    time: string
}

export const chatsList: IchatsList[] = [
    { 
        image: emptyAvatar, 
        alt: 'profile',
        name: 'Андрей',
        message: 'Привет',
        time: '10:49',
        count: '9',
        incomingMessages: [
            {
                text: 'лялялялял потоля',
                time: '12:10'
            },
            {
                text: 'почему молчишь',
                time: '18:10'
            }
        ],
        outgoingMessages: [
            {
                text: 'лялялялял потоля',
                time: '20:10'
            },
            {
                text: `Предмет истории есть жизнь народов и человечества. 
                    Непосредственно уловить и обнять словом — описать жизнь не только человечества, но одного народа, — представляется невозможным.
                    Все древние историки употребляли один и тот же прием для того, чтобы описать и уловить кажущуюся неуловимой — жизнь народа. 
                    Они описывали деятельность единичных людей, правящих народом; и эта деятельность выражала для них деятельность всего народа.
                    `,
                time: '23:10'
            }
        ],
    },
    { 
        image: emptyAvatar, 
        alt: 'profile',
        name: 'Анна',
        message: 'ляляляля потоля',
        time: '12:49',
        count: '5',
    },
    { 
        image: emptyAvatar, 
        alt: 'profile',
        name: 'Ксюха',
        message: 'Привет',
        time: '16:49',
        count: '1',
    },
    { 
        image: emptyAvatar, 
        alt: 'profile',
        name: 'Саша',
        message: 'почему не отвечаешь',
        time: '18:40',
        count: '2',
    },
    { 
        image: emptyAvatar, 
        alt: 'profile',
        name: 'Евдокия',
        message: 'Купи свеклу',
        time: '19:49',
        count: '1',
    },
];
