function searchPrototype(text, array) {
  const regexp = new RegExp(text, 'i');
  const newArray = array.filter(item => regexp.test(item['title']));
  return newArray;
}

function setActiveCard(card) {
  card.hidden = false;
}

function setHiddenCard(card) {
  card.setAttribute('hidden', true);
}

function searchCard(cards, text) {
  const regexp = new RegExp(text, 'i');
  for (let card of cards) {
    if (regexp.test(card.dataset.title) || text.length < 3) {
      setActiveCard(card);
    } else {
      setHiddenCard(card);
    }
  };
}

export function startSearch(text) {
  const cards = document.getElementsByClassName('js-cards-block__card');
  searchCard(cards, text);
}



