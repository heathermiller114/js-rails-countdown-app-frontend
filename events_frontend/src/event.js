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
            <h4 data-id=${this.id} class="days"> Countdown: _____ days</h4>
            <h4 data-id=${this.id} class="hours"> hours</h4>
            <h4 data-id=${this.id} class="minutes"> minutes</h4>
            <h4 data-id=${this.id} class="seconds"> seconds</h4>
            <h4 data-id=${this.id}>until ${this.date}</h4>
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
  
        var days = Math.floor(betweenDates / (24*60*60*1000))
        var daysInMilliseconds = betweenDates % (24*60*60*1000)
        var hours = Math.floor((daysInMilliseconds)/(60*60*1000))
        var hoursInMilliseconds = betweenDates % (60*60*1000)
        var minutes = Math.floor((hoursInMilliseconds)/(60*1000))
        var minutesInMilliseconds = betweenDates % (60*1000)
        var seconds = Math.floor((minutesInMilliseconds)/(1000))

        document.getElementById(this.id).querySelectorAll('h4.days')[0].innerHTML = `${days} days` 
        document.getElementById(this.id).querySelectorAll('h4.hours')[0].innerHTML = `${hours} hours`
        document.getElementById(this.id).querySelectorAll('h4.minutes')[0].innerHTML = `${minutes} minutes`
        document.getElementById(this.id).querySelectorAll('h4.seconds')[0].innerHTML = `${seconds} seconds`
    };

}

Event.all = [];