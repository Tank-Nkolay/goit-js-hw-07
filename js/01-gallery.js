import { galleryItems } from "./gallery-items.js";
// Change code below this line

const createGallery = (img) => {
  return img
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
    <a class="gallery__link" href = "${original}">
    <img class="gallery__image" src = "${preview}" data-source = "${original}" alt = "${description}" >
    </a>
    </div>`
    )
    .join("");
};

function onGalleryImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src =${evt.target.dataset.source}>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscape);
        console.log("Добавил Слушатель");
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscape);
        console.log("Удалил Слушатель");
      },
    }
  );

  function onEscape(evt) {
    if (evt.key === "Escape") {
      instance.close();
      return;
    }
  }

  instance.show();
}

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", createGallery(galleryItems));
galleryRef.addEventListener("click", onGalleryImageClick);

console.log(galleryItems);

// _______________________________________________

// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
// _______________________________________________
