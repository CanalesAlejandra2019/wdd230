const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let fullName = document.createElement('h2'); 
    let portrait = document.createElement('img');
    let birth = document.createElement('birthdate');
    let place = document.createElement('birthplace');

    
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    
    card.appendChild(fullName);
    card.appendChild(birth);
    card.appendChild(place);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
}
