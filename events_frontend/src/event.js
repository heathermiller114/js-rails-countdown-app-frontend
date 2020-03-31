class Event {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.date = data.date
        Event.all.push(this);
    }
}

    function renderEventItem() {
        return `
        <li>
            <h3>${this.name}
                <button data-id=${this.id}>edit</button>
            </h3>
        </li>`;
    }
}

Event.all = [];