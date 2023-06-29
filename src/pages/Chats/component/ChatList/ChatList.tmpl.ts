export const template = `
    <div class='chat-list'>
        {{{link}}}
        <div class='chat-list__search-field'>
            {{{search}}}
        </div>
        <p class='chat-list__text'>{{text}}</p>
        <ul class='chat-list__list'>
            {{#each chatsList}}
                <li class='chat-list__item'>
                    <div class='chat-list__block'>
                        <img class="chat-list__avatar" src={{this.image}} alt={{this.alt}} />
                        <div class='chat-list__name-and-message'>
                            <div class='chat-list__name'>
                                {{this.name}}
                            </div>
                            <div class='chat-list__message'>
                                {{this.message}}
                            </div>
                        </div>
                    </div>
                    <div class='chat-list__time-and-count'>
                        <div class='chat-list__time'>
                            {{this.time}}
                        </div>
                        <div class='chat-list__count'>
                            {{this.count}}
                        </div>
                    </div
                </li>
            {{/each}}
        </ul>
    </div>
`
