import { Popup, Card } from "./entities/constants.js";
import { FormValidator } from "./entities/FormValidator.js";
import { initialCards, listPhotos, config, nameInput, jobInput, cardName, cardLink, nameProfile, jobProfile, editModalButtons, formEditButton, addModalButtons, formAddButton, BUTTON_CREATE, BUTTON_SUBMIT } from "./entities/constants.js"



(function initCards() {

    initialCards.forEach((item) => {
        const card = new Card(item, ".template-photos");
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

    resetForm(formEditButton, popupEdit, BUTTON_SUBMIT)
});

// обработчики попапа добавления карточек
const popupAdd = new Popup("#popup__add");


addModalButtons.open.addEventListener("click", popupAdd.open);
addModalButtons.close.addEventListener("click", popupAdd.close);
formAddButton.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const name = cardName.value;
    const link = cardLink.value

    const card = new Card({ name, link }, ".template-photos");
    listPhotos.prepend(card.createCard());
    resetForm(formAddButton, popupAdd, BUTTON_CREATE)
});

const validAdd = new FormValidator(config, popupAdd);
validAdd.enableValidation();

const validEdit = new FormValidator(config, popupEdit);
validEdit.enableValidation();