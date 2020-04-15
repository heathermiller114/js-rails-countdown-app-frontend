class App {

    addEvents() {
        document.querySelector('#events-list').innerHTML = ''
        Event.all.forEach(
            event => (document.querySelector('#events-list').innerHTML += event.renderEventItem())
        )
    }


    attachEventListeners() {
        document.querySelector('#events-list').addEventListener('click', e => {
            const id = parseInt(e.target.dataset.id)
            const event = Event.findById(id)
            document.querySelector('#update').innerHTML = event.renderUpdateForm()
        })
        
        document.querySelector('#update').addEventListener('submit', e => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id)
            const event = Event.findById(id)
            console.log(event)
            const newName = e.target.querySelector('input').value
            const newDate = e.target.getElementsByTagName('p')[1].querySelector('input').value

            const bodyJSON = {newName, newDate}
            fetch(`http://localhost:3000/api/v1/events/${event.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(bodyJSON),
            })
                .then(res => res.json())
                // console.log(res.json())
                .then(updatedEvent => {
                    console.log(updatedEvent)
                    const event2 = Event.findById(updatedEvent.id)
                    console.log('break')
                    console.log(event2)
                    event2.update(updatedEvent)
                    this.addEvents()
                })
        })
    }

}