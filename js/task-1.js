const categoriesList = document.getElementById('categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Number categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector('h2');
  const subItems = item.querySelectorAll('li');
  console.log(`Categori: ${title.textContent}`);
  console.log(`Elements:: ${subItems.length}`);
});