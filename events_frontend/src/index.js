const endPoint = 'http://localhost:3000/api/v1/events'

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    // console.log(app)
    app.attachEventListeners();

    const endPoint = 'http://localhost:3000/api/v1/events';
    fetch(endPoint)
      .then(res => res.json())
      .then(json => {
        // console.log(json)
        json.forEach(function(event) {
            // console.log(event)
            let newEvent = new Event(event);
            // console.log(newEvent)
            document.querySelector('#events-list').innerHTML += newEvent.renderEventItem();
            });
      });
  });
