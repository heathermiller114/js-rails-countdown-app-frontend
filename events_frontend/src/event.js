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
}

Event.all = [];