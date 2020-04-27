class App {

    addEvents() {
        document.querySelector('#events-list').innerHTML = ''
        Event.all.forEach(
            event => (document.querySelector('#events-list').innerHTML += event.renderEventItem())
        )
    }


    attachEventListeners() {
        document.querySelector('#events-list').addEventListener('click', e => {
            if (e.target.className === 'edit' || e.target.dataset.action === 'edit') {
                const id = parseInt(e.target.dataset.id)
                const event = Event.findById(id)
                document.querySelector('#update').innerHTML = event.renderUpdateForm()
            }
        })
        
        document.querySelector('#update').addEventListener('submit', e => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id)
            const event = Event.findById(id)
            const newName = e.target.querySelector('input').value
            const newDate = e.target.getElementsByTagName('p')[1].querySelector('input').value

            fetch(`http://localhost:3000/api/v1/events/${event.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: newName,
                    date: newDate
                })
            })
                .then(res => res.json())
                .then(updatedEvent => {
                    const event2 = Event.findById(updatedEvent.id)
                    event2.update(updatedEvent)
                    console.log(this)
                    debugger
                    this.addEvents() //why do you work but the others dont
                    document.querySelector('#update').innerHTML = ''
                })
        })


        document.querySelector('#events-list').addEventListener('click', e => {
            if (e.target.className === 'delete' || e.target.dataset.action === 'delete') {
                const id = parseInt(e.target.dataset.id)
                // const event = Event.findById(id)

                fetch(`http://localhost:3000/api/v1/events/${id}`, {
                 method: 'DELETE',
                 headers: {
                     "Content-Type": "application/json",
                     "Accept": "application/json"
                 },
                 body: JSON.stringify({
                     "id": id
                 })
                })
                // debugger
                const removeEvent = document.getElementById(`${id}`)
                removeEvent.remove()
            }
            // this.addEvents() // why will you not work no matter where i put you
            //the event is deleted from the DB -- but does not delete from the page without refresh
        })

        document.querySelector('#new-event-form').addEventListener('submit', e => {
            e.preventDefault()
            // debugger
            const name = e.target.querySelector('#event-name').value
            const date = e.target.querySelector('#event-date').value

            fetch('http://localhost:3000/api/v1/events',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    "name": name,
                    "date": date
                })
            })
            // debugger
            .then(res => res.json())
            .then(newEvent => {
                //console.log(newEvent)
                //console.log(this)
                this.addEvents()// debugger //why won't this work either
                document.querySelector('#event-name').value = ""
                document.querySelector('#event-date').value = ""
                // document.querySelector('#events-list').append(newEvent)
                console.log("all done!")
            })
        })
    }
}