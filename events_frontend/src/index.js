const endPoint = 'http://localhost:3000/api/v1/events'

document.addEventListener('DOMContentLoaded', () => {
    const endPoint = 'http://localhost:3000/api/v1/events';
    fetch(endPoint)
      .then(res => res.json())
      .then(json => 
        json.forEach(event => {
            const markup  = `
            <li>
                <h3>${event.name}
                <button>edit</button>
                </h3>
            </li>`

            document.querySelector('#events-list').innerHTML += markup;
            })
        );
  });
