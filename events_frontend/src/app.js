class App {
    attachEventListeners() {
        document.getElementById('events-list').addEventListener('click', e => {
            console.log('clicked');
        })
    }
}