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
            const id = parseInt(e.target.dataset.id)
            const event = Event.findById(id)
            const name = e.target.querySelector('input').value
            const date = e.target.getElementsByTagName('p')[1].querySelector('input').value

            const bodyJSON = {name, date}
            fetch(`http://localhost:3000/api/v1/events/${event.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(bodyJSON),
            })
                .then(res => res.json())
                .then(updatedEvent => console.log(updatedEvent))
        })
    }

}