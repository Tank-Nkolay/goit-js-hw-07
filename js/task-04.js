let variableCounterValue = 0;
const counterValue = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener("click", () => {
  variableCounterValue += 1;
  counterValue.textContent = variableCounterValue;
  console.log(variableCounterValue);
});

decrementBtn.addEventListener("click", () => {
  variableCounterValue -= 1;
  counterValue.textContent = variableCounterValue;
  console.log(variableCounterValue);
});

// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
