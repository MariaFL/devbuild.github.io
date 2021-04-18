import './scss/index.scss';
import insetInfo from './js/insertCards';
import { startSearch } from './js/search';


function activeSearch(input) {
  if (!sessionStorage.getItem('request')) {
    return alert('Pleas, wait for the information to load');
  }
  startSearch(input.value);
}

function setSearchListening() {
  const searchForm = document.getElementById('js-search-form');
  const searchInput = document.getElementById('search');


  if (searchForm) {
    searchForm.addEventListener('submit', event => {
      event.preventDefault();
      activeSearch(searchInput);
    });
  }

  if (searchInput) {
    searchInput.oninput = function() {
      activeSearch(searchInput);
    }
  }
}

window.onload = function() {
  sessionStorage.setItem('request', 0);
  insetInfo();
  setSearchListening();
};
