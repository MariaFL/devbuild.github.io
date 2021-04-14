import './scss/index.scss';

function setCards(dataCards) {
  const cardsBlock = document.getElementById('js-cards-block');

  for (let i = 0; i < dataCards.length; i++) {
    let card = createCard(dataCards[i]);
    cardsBlock.append(card);
  }
}

function createCard(data) {
  const price = data['price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let type = data['type'];
  let typeText, typeClass;
  if (/living/.test(type.toLowerCase())) {
    typeText = 'Independent living';
    typeClass = 'for-living';
  } else {
    typeText = 'Restaurant & Support available';
    typeClass = 'for-business';
  };
  const cardlink = document.createElement('a');
  cardlink.className = 'cards-block__card';
  cardlink.innerHTML = `
    <div class="cards-block__card__image-block">
        <img src="https://via.placeholder.com/380x240/66c5e5/52861d?text=build${data['id']}" alt="" class="cards-block__card__image-block__img">
        <div class="cards-block__card__image-block__text cards-block__card__image-block__text_${typeClass}">${typeText}</div>
    </div>
    <div class="cards-block__card__description">
        <p class="cards-block__card__description__title">${data['title']}</p>
        <p class="cards-block__card__description__address">${data['address']}</p>
        <br>
        <p class="cards-block__card__description__price">New Properties for Sale from <b>&#163;${price}</b></p>
        <p class="cards-block__card__description__available">Shared Ownership Available</p>
    </div>
  `;
  return cardlink;
}

async function getData() {
  const response = await fetch('https://603e38c548171b0017b2ecf7.mockapi.io/homes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  });
  const data = await response.json();
  console.log(data);
  setCards(data);
}

getData();