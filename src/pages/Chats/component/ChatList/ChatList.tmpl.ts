export const template = `
    <div class='chat-list'>
        {{{ link }}}
        <div class='chat-list__add'>{{{ addChat }}}</div>
        <ul class='chat-list__list'>
            {{#each chatList}}
                <li class='chat-list__item' key={{{this.id}}}>
                    <div class='chat-list__block'>
                        {{#if this.avatar}}            
                            <img src="https://ya-praktikum.tech/api/v2/resources{{this.avatar}}" alt="avatar" id={{{this.id}}} />
                        {{else}}
                            <div class='chat-list__empty-avatar' id={{{this.id}}} >id: {{{this.id}}}</div>
                        {{/if}}
                        <div class='chat-list__name-and-message'>
                            <div class='chat-list__name'>
                                {{this.title}}
                            </div>
                            <div class='chat-list__message'>
                                {{this.last_message.content}}
                            </div>
                        </div>
                    </div>
                    <div class='chat-list__time-and-count'>
                        <div class='chat-list__time'>
                            {{this.last_message.time}}
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
