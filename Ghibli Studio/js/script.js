// Document manipulation thought JS
var app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

// XMLHttpRequest method here

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films'),
request.onload = function () {
  // Inside onload we manipulate the JSON but BEFORE WE NEED TO JSON.PARSE IT
  var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
      data.forEach((movie) => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        const h1 = document.createElement('h1');
        h1.textContent = movie.title;
        const p = document.createElement('p')
        movie.description = movie.description.substring(0, 300);
        p.textContent = `${movie.description}...`;
        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
      }
    )};
}
request.send();
