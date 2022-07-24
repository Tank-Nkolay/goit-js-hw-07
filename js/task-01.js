const navEl = document.querySelectorAll(".item");

//  находим количество категорий у главного ul
const numberOfCategories = navEl.length;

//  находим название h2
// const x = document.querySelectorAll("#categories h2");
// const y = [...x].map((element) => {
//   return element.textContent;
// });

console.log(`Number of categories: ${numberOfCategories}`);

navEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
