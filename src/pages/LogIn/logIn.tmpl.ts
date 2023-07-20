export const template = `
    <div class='page-login wrapper'>
        <div class='page-login__content'>
            <form class='page-login__form' id='form-auth'>
                <p class='page-login__title description'>Войти</p>
                {{{login}}}
                {{{password}}}
                <span class='error' id="error"></span>
                {{{button}}}
                {{{signup_link}}}
            </form>
        </div>
    </div>
`
