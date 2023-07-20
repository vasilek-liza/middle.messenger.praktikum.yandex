export const template = `
    <div class='page-signup wrapper'>
        <div class='page-signup__content'>
            <form class='page-signup__form' id='form-sign'>
                <p class='page-signup__description description'>Регистрация</p>
                {{{email}}}
                {{{login}}}
                {{{first_name}}}
                {{{second_name}}}
                {{{phone}}}
                {{{password}}}
                {{{password_copy}}}
                <span class='error' id="error"></span>
                {{{button}}}
                {{{enter_link}}}
            </form>
        </div>
    </div>
`
