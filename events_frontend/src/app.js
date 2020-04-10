class App {
    attachEventListeners() {
        document.querySelector('#events-list').addEventListener('click', e => {
            const id = parseInt(e.target.dataset.id)
            // console.log(id)
            const event = Event.findById(id)
            // console.log(event)
            document.querySelector('#update').innerHTML = event.renderUpdateForm()
        })
        
        document.querySelector('#update').addEventListener('submit', e => {
            e.preventDefault();
            // console.log(e)
            const id = parseInt(e.target.dataset.id)
            const event = Event.findById(id)
            // console.log(event)
            const name = e.target.querySelector('input').value
            // console.log(name)
            const date = e.target.getElementsByTagName('p')[1].querySelector('input').value
            console.log(date)
        })
    }

}