class Event {
    constructor(name, date) {
        // this.id = data.id
        this.name = name
        this.date = date
        Event.all.push(this);
    }

    renderEventItem() {
        return `
        <li>
            <h3>${this.date}
                <button data-id=${this.id}>edit</button>
            </h3>
        </li>`;
    }
}

Event.all = [];