class Event {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.date = data.date
        Event.all.push(this);
    }
}