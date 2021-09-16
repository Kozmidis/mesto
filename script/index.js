import { Popup, Card } from "./entities/constants.js";
import { FormValidator } from "./entities/FormValidator.js";
import { initialCards, config, nameInput, jobInput, cardName, cardLink, jobProfile, nameProfile } from "./entities/constants.js"



(function initCards() {
    const listPhotos = document.querySelector(".photos__cards");
    initialCards.forEach((item) => {
        const card = new Card(item);
        const photoElements = card.createCard();
        listPhotos.prepend(photoElements);
    });
})();

function resetForm(form, popup, button) {
    form.reset()
    popup.close()
    const buttonElement = form.querySelector(`${config.submitButtonSelector}[name=${button}]`)
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute("disabled", "disabled");
}

// обработчики попапа редактирования
const popupEdit = new Popup("#popup__edit");
const editModalButtons = {
    open: document.querySelector(".profile__redact"),
    close: document.querySelector(".popup__close_edit"),
};
const formEditButton = document.querySelector("#formEdit");
editModalButtons.open.addEventListener("click", () => {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;

    popupEdit.open();
});
editModalButtons.close.addEventListener("click", () => {
    popupEdit.close()
});
formEditButton.addEventListener("submit", (evt) => {
    evt.preventDefault();

    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;

    const button = 'submit'
    resetForm(formEditButton, popupEdit, button)
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
    const name = cardName.value;
    const link = cardLink.value

    const card = new Card({ name, link });
    const listPhotos = document.querySelector(".photos__cards");
    listPhotos.prepend(card.createCard());
    const button = 'create'
    resetForm(formAddButton, popupAdd, button)
});

const validAdd = new FormValidator(config, popupAdd);
validAdd.enableValidation();

const validEdit = new FormValidator(config, popupEdit);
validEdit.enableValidation();