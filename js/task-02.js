const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ourUlEl = document.querySelector("#ingredients");

const newLiEl = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add(".item");

  itemEl.append(ingredient);
  return itemEl;
});

console.log(ourUlEl);
ourUlEl.append(...newLiEl);

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
