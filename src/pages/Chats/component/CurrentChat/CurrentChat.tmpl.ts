export const template = `
    <div class='current-chat'>
        {{#if id}}            
            <p class='current-chat__user-name'>
                ID выбранного чата: {{{id}}}
            </p>
            <div class='current-chat__action'>
                {{{addUser}}}
                {{{removeUser}}}
                {{{removeChat}}}
            </div>
            <div class='current-chat__incoming-messages'>
                <ul class='current-chat__list'>
                    {{#each messageList}}
                        <li class='current-chat__item'>
                            <div class='current-chat__avatar'>ID: {{{user_id}}}</div>
                            <div class='current-chat__message'>
                                <div class='current-chat__text-and-time'>
                                    <div class='current-chat__text'>
                                        {{{this.content}}}
                                    </div>
                                    <div class='current-chat__time'>
                                        {{{this.time}}}
                                    </div>
                                </div>
                            </div>
                        </li>
                    {{/each}}
                </ul>
            </div>
            <div class='current-chat__send-message'>
                <div id='form-message' class='current-chat__form'>
                    {{{messageInput}}}
                    <span class='error' id="error"></span>
                </div>
                {{{buttonSend}}}
            </div>
        {{else}}
            <div class='current-chat__empty-chat'>Выберете чат из списка</div>
        {{/if}}
        
    </div>
`
