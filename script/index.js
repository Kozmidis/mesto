import { Popup, Card } from "./entities/index.js";
import { initialCards } from "./initial-сards.js";
import { config } from "./entities/index.js";
import { FormValidator } from "./entities/validate.js";

(function initCards() {
    const listPhotos = document.querySelector(".photos__cards");
    initialCards.forEach((item) => {
        const card = new Card(item);
        const photoElements = card.createCard();
        listPhotos.prepend(photoElements);
    });
})();

// обработчики попапа редактирования
const popupEdit = new Popup("#popup__edit");
const editModalButtons = {
    open: document.querySelector(".profile__redact"),
    close: document.querySelector(".popup__close_edit"),
};
const formEditButton = document.querySelector("#formEdit");
editModalButtons.open.addEventListener("click", () => {
    const nameInput = document.querySelector(".popup__form-input_input_name");
    const jobInput = document.querySelector(".popup__form-input_input_job");
    nameInput.value = document.querySelector(".profile__name").textContent;
    jobInput.value = document.querySelector(".profile__about-me").textContent;
    popupEdit.open();
});
editModalButtons.close.addEventListener("click", popupEdit.close);
formEditButton.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const nameInput = document.querySelector(".popup__form-input_input_name");
    const jobInput = document.querySelector(".popup__form-input_input_job");

    document.querySelector(".profile__name").textContent = nameInput.value;
    document.querySelector(".profile__about-me").textContent = jobInput.value;
    formEditButton.reset();
    // deactiveButton(popupEdit, submitButton, config);
    popupEdit.close();
});

// обработчики попапа добавления карточек
const popupAdd = new Popup("#popup__add");
const addModalButtons = {
    open: document.querySelector(".profile__add-button"),
    close: document.querySelector(".popup__close_add"),
};
const formAddButton = document.querySelector("#formAdd");

addModalButtons.open.addEventListener("click", popupAdd.open);
addModalButtons.close.addEventListener("click", popupAdd.close);
formAddButton.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const name = document.querySelector(".popup__form-input_input_place").value;
    const link = document.querySelector(".popup__form-input_input_image").value;

    const card = new Card({ name, link });
    const listPhotos = document.querySelector(".photos__cards");
    listPhotos.prepend(card.createCard());

    formAddButton.reset();
    popupAdd.close();
});

const validAdd = new FormValidator(config, popupAdd);
validAdd.enableValidation();

const validEdit = new FormValidator(config, popupEdit);
validEdit.enableValidation();