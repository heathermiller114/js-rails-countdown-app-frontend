class Event {
    constructor(event) {
        this.id = event.id
        this.name = event.name
        this.date = event.date
        Event.all.push(this);
    }

    renderEventItem() {
        return `
        <li>
            <h3>${this.name}
                <button data-id=${this.id}>edit</button>
            </h3>
            <h4> Countdown: [countdown timer] until ${this.date}</h4>
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
                <input type="text" value="${this.date} />
            </p>
            <button type='submit'>Save Event</button>
        </form>
        `
    }
}

Event.all = [];