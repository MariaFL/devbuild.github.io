function search(text, array) {
  const regexp = new RegExp(text, 'i');
  const newArray = array.filter(item => regexp.test(item['title']));
  return newArray;
}