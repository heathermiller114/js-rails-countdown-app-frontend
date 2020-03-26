const endPoint = 'http://localhost:3000/api/v1/events'

document.addEventListener('DOMContentLoaded', () => {
    const endPoint = 'http://localhost:3000/api/v1/events';
    fetch(endPoint)
        .then(res => res.json())
        .then(json => console.log(json));
});