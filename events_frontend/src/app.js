class App {
    attachEventListeners() {
        document.querySelector('events-list').addEventListener('click', e => {
            console.log('clicked');
        })
    }
}