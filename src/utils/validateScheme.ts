interface validateScheme {
    inputName: string;
    inputValue: string;
}

const validateScheme = ({
    inputName,
    inputValue,
}: validateScheme): string => {
    switch (inputName) {
        case 'first_name':
        case 'second_name':
            if (!inputValue.match(/^[A-Z|А-Я]/)) {
                return 'Должно быть с заглавной буквы';
            } else if (!inputValue.match(/^[(a-zA-Z)|(а-яА-Я)|-]+$/)) {
                return 'Только буквы или знак дефиса';
            } else {
                return ''
            }   
        case 'login':
            if (inputValue.length < 3 || inputValue.length > 20) {
                return 'От 3 до 20 символов';
            } else if (!inputValue.match(/^[(a-zA-Z)|\d|\-|_]+$/)) {
                return 'Латиница, цифры без пробелов, знаки - или _';
            } else if (!inputValue.match(/[a-zA-Z]/)) {
                return 'Минимум одна латинская буква';
            } else {
                return '';
            }
        case 'email':
            if (!inputValue.match(/^[(a-zA-Z)|\d|-|@|.]+$/)) {
                return 'Латиница, цифры без пробелов или дефис';
            } else if (!inputValue.match(/(@\w+\.)/)) {
                return 'Email указан некорректно';
            } else {
                return '';
            }
        case 'password':
            if (inputValue.length < 8 || inputValue.length > 40) {
                return 'От 8 до 40 символов';
            } else if (!inputValue.match(/[A-Z]/)) {
                return 'Хотя бы одна заглаваня буква';
            } else if (!inputValue.match(/\d/)) {
                return 'Хотя бы одна цифра';
            } else {
                return '';
            }
        case 'phone':
            if (inputValue.length < 10 || inputValue.length > 15) {
                return 'От 10 до 15 символов';
            } else if (!inputValue.match(/^(\+|\d)(\d+$)/)) {
                return 'Только цифры или первый +';
            } else {
                return '';
            }
        case 'message':
            if (!inputValue) {
                return 'Введите сообщение';
            } else {
                return '';
            }
        default:
            return ''
    }
};

export default validateScheme;
