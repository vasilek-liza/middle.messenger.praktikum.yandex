export const template = `
    <div class='current-chat'>
        <p class='current-chat__user-name'>{{userPlofile}}</p>
        <div class='current-chat__incoming-messages'>
            <ul class='current-chat__list'>
                {{#each incomingMessages}}
                    <li class='current-chat__item'>
                        <div class='current-chat__message'>
                            <div class='current-chat__text-and-time'>
                                <div class='current-chat__text'>
                                    {{this.text}}
                                </div>
                                <div class='current-chat__time'>
                                    {{this.time}}
                                </div>
                            </div>
                        </div>
                    </li>
                {{/each}}
            </ul>
        </div>
        <div class='current-chat__outgoing-messages'>
            <ul class='current-chat__list'>
                {{#each outgoingMessages}}
                    <li class='current-chat__item'>
                        <div class='current-chat__message'>
                            <div class='current-chat__text-and-time'>
                                <div class='current-chat__text'>
                                    {{this.text}}
                                </div>
                                <div class='current-chat__time'>
                                    {{this.time}}
                                </div>
                            </div>
                        </div>
                    </li>
                {{/each}}
            </ul>
        </div>
        <div class='current-chat__send-message'>
            <form id='form-message' class='current-chat__form'>
                {{{messageInput}}}
                <span class='error' id="error"></span>
            </form>
            {{{buttonSend}}}
        </div>
    </div>
`
