class Event {
    constructor(event) {
        this.id = event.id
        this.name = event.name
        this.date = event.date
        Event.all.push(this);
    }

    renderEventItem() {
        return `
        <li id=${this.id}>
            <h3 data-id=${this.id}>${this.name}
                <button class="edit" data-action="edit" data-id=${this.id}>edit</button>
                <button class="delete" data-action="delete" data-id=${this.id}>delete</button>
            </h3>
            <h4 data-id=${this.id}> Countdown: [countdown timer] until ${this.date}</h4>
        </li>`;
    }

    static findById(id) {
        return this.all.find(event => event.id === id)
    }

    renderUpdateForm() {
        return `
        <form data-id=${this.id}>
            <label>Name</label>
            <p>
                <input type="text" value="${this.name}" />
            </p>
            <label>Date</label>
            <p>
                <input type="date" value="${this.date}" />
            </p>
            <button type='submit'>Save Event</button>
        </form>
        `
    }

    update({ name, date }) {
        this.name  = name;
        this.date = date;
    }

    createDateObjects() {
        const dateOfEvent = new Date(this.date)
        const now = new Date()
        var betweenDates = (dateOfEvent.getTime() - now.getTime())
    }

    turnMillisecondsIntoTimes(betweenDates) {
        var days = Math.floor(betweenDates / (24*60*60*1000))
        var hours = Math.floor()
        var minutes = Math.floor()
        var seconds = Math.floor()
    }
}

Event.all = [];