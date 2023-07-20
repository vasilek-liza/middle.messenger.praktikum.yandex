export const template = `
    <div class='page-change-user-data wrapper'>
        <div class='page-change-user-data__content'>
            <form class='page-change-user-data__form' id='form-change-data'>
                <p class='page-change-user-data__description description'>Изменить данные</p>
                {{{email}}}
                {{{login}}}
                {{{first_name}}}
                {{{second_name}}}
                {{{display_name}}}
                {{{phone}}}
                {{{save}}}
                <span class='error' id="error"></span>
            </form>
        </div>
    </div>
`
