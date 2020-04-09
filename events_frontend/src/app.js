class App {
    attachEventListeners() {
        document.querySelector('#events-list').addEventListener('click', e => {
            const id = parseInt(e.target.dataset.id)
            console.log(id)
            const event = Event.findById(id)
            console.log(event)
        })
    }
}