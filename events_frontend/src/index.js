const endPoint = 'http://localhost:3000/api/v1/events'

document.addEventListener('DOMContentLoaded', () => {
    const endPoint = 'http://localhost:3000/api/v1/events';
    fetch(endPoint)
      .then(res => res.json())
      .then(json => {
        json.forEach(event => {
            const newEvent = new Event(event);
            // console.log(newEvent)
            document.querySelector('#events-list').innerHTML += newEvent.renderEventItem();
            })
      });
  });
