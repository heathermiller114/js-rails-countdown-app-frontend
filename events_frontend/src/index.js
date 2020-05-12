const endPoint = 'http://localhost:3000/api/v1/events'

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.attachEventListeners();

    const endPoint = 'http://localhost:3000/api/v1/events';
    fetch(endPoint)
      .then(res => res.json())
      .then(json => {
        json.forEach(function(event) {
            let newEvent = new Event(event);
            document.querySelector('#events-list').innerHTML += newEvent.renderEventItem();
            newEvent.createDateObjects()
            });
      });
  });
