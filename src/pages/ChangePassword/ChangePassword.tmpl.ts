export const template = `
    <div class='page-change-password wrapper'>
        <div class='page-change-password__content'>
            <form class='page-change-password__form' id='form-change-password'>
                <p class='page-change-password__description description'>Изменить пароль</p>
                {{{oldPassword}}}
                {{{newPassword}}}
                {{{save}}}
                <span class='error' id="error"></span>
            </form>
        </div>
    </div>
`
