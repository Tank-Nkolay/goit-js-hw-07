const inputForm = document.querySelector("#validation-input");
const inputValue = inputForm.dataset.length;

const colorForForm = (event) => {
  if (event.currentTarget.value.length === Number(inputValue)) {
    inputForm.classList.add("valid");
    inputForm.classList.remove("invalid");
  } else {
    inputForm.classList.add("invalid");
  }
};
inputForm.addEventListener("blur", colorForForm);

// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
// -----------------------------------------------------------------------------
// Примечание на будущее: используется data атрибут. В JS (dataset) вытаскиваем значение data-length
