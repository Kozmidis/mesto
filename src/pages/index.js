import { Card } from "../script/utils/constants.js";
import { FormValidator } from "../script/components/FormValidator.js";
import {
    initialCards,
    config,
    nameInput,
    jobInput,
    editModalButtons,
    addModalButtons,
} from "../script/utils/constants.js";
import PopupWithImage from "../script/components/PopupWithImage.js";
import Section from "../script/components/Section.js";
import UserInfo from "../script/components/UserInfo.js";
import PopupWithForm from "../script/components/PopupWithForm.js";

const popupImage = new PopupWithImage("#popup__image");
popupImage.setEventListeners();

const createCard = (item) => {
    return new Card(item, ".template-photos", (data) => {
        popupImage.open(data);
    }).createCard();
};

const cardList = new Section({
        items: initialCards,
        renderer: (item) => {
            createCard(item);
            cardList.addItems(createCard(item));
        },
    },
    ".photos__cards"
);
cardList.renderItems();

// Информация профиля
const userInfo = new UserInfo(".profile__name", ".profile__about-me");

// попап редактирования профиля
const popupEdit = new PopupWithForm({
    modalId: "#popup__edit",
    formSubmit: (data) => {
        userInfo.setUserInfo(data);

        popupEdit.close();
    },
});
popupEdit.setEventListeners();

// слушатель редактора профиля
editModalButtons.open.addEventListener("click", () => {
    const getUserInfo = userInfo.getUserInfo();
    nameInput.value = getUserInfo.name;
    jobInput.value = getUserInfo.job;

    popupEdit.open();
    validEdit.deactiveButton();
});

// попап добавления карточек
const popupAdd = new PopupWithForm({
    modalId: "#popup__add",
    formSubmit: (item) => {
        createCard(item);
        cardList.addItems(createCard(item));

        popupAdd.close();
    },
});
popupAdd.setEventListeners();

addModalButtons.open.addEventListener("click", () => {
    popupAdd.open();

    validAdd.deactiveButton();
});

// Валидация
const validAdd = new FormValidator(config, popupAdd);
validAdd.enableValidation();

const validEdit = new FormValidator(config, popupEdit);
validEdit.enableValidation();