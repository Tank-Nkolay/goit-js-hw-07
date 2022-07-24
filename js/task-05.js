// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputForm = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

const inputValue = (event) => {
  inputForm === ""
    ? (nameLabel.textContent = "Anonymous")
    : (nameLabel.textContent = event.currentTarget.value);
};

inputForm.addEventListener("input", inputValue);
