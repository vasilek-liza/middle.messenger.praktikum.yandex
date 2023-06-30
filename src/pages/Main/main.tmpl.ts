export const template = `
    <div class='main-page wrapper'>
        <h1 class='main-page__title'>Messenger</h1>
        <main class='main-page__content'>
            <nav class='main-page__navigation'>
                <ul class='main-page__list'>
                    <li class='main-page__list-item'>{{{linkLogIn}}}</li>
                    <li class='main-page__list-item'>{{{linkSignup}}}</li>
                    <li class='main-page__list-item'>{{{linkProfile}}}</li>
                    <li class='main-page__list-item'>{{{linkNotFound}}}</li>
                    <li class='main-page__list-item'>{{{linkError}}}</li>
                    <li class='main-page__list-item'>{{{linkChats}}}</li>
                    <li class='main-page__list-item'>{{{linkChangePassword}}}</li>
                    <li class='main-page__list-item'>{{{linkChangeUserData}}}</li>
                </ul>
            </nav>
        </main>
    </div>
`
