// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputFormControl = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

const changeOutputText = (event) => {
  outputText.style.fontSize = event.currentTarget.value + "px";
};

inputFormControl.addEventListener("input", changeOutputText);
