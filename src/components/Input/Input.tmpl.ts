export const template = `
    {{#if value}}            
        <input class='custom-input {{className}}' name={{name}} placeholder={{placeholder}} value={{value}} />
    {{else}}
        <input class='custom-input {{className}}' name={{name}} placeholder={{placeholder}} type={{type}} />
    {{/if}}
`
