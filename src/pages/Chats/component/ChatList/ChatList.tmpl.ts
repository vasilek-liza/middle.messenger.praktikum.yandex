export const template = `
    <div class='chat-list'>
        {{{ link }}}
        <div class='chat-list__add'>{{{ addChat }}}</div>
        <div class='chat-list__search-field'>
            {{{search}}}
        </div>
        <ul class='chat-list__list'>
            {{#each chatList}}
                <li class='chat-list__item'>
                    <div class='chat-list__block'>
                        {{#if this.avatar}}            
                            <img src="https://ya-praktikum.tech/api/v2/resources{{this.avatar}}" alt="avatar" />
                        {{else}}
                            <div class='chat-list__empty-avatar'>id: {{{this.id}}}</div>
                        {{/if}}
                        <div class='chat-list__name-and-message'>
                            <div class='chat-list__name'>
                                {{this.title}}
                            </div>
                            <div class='chat-list__message'>
                                {{this.last_message}}
                            </div>
                        </div>
                    </div>
                    <div class='chat-list__time-and-count'>
                        <div class='chat-list__time'>
                            10:12
                        </div>
                        <div class='chat-list__count'>
                            {{this.unread_count}}
                        </div>
                    </div
                </li>
            {{/each}}
        </ul>
    </div>
`
