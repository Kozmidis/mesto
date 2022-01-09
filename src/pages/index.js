import "./index.css";

import { Card } from "../utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import {
    initialCards,
    config,
    nameInput,
    jobInput,
    editModalButtons,
    addModalButtons,
    avatarModalButtons,
} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../components/Api";
import PopupSubmit from "../components/PopupSubmit.js";

const api = new Api({
    address: "https://mesto.nomoreparties.co/v1/cohort-32",
    headers: {
        authorization: "d9996a98-2868-4f20-beed-902261c5825b",
        "Content-Type": "application/json",
    },
});

const userInfo = new UserInfo(
    ".profile__name",
    ".profile__about-me",
    ".profile__main-avatar"
);

let myInfo;

Promise.all([api.getUserProfile(), api.getUserCards()])
    .then(([profileInfo, cardArr]) => {
        myInfo = profileInfo;

        userInfo.setUserInfo(profileInfo);
        cardList.renderItems(cardArr);
    })
    .catch((error) => {
        console.log(error);
    });

const createCard = (item) => {
    const card = new Card({
        item: item,
        myInfo: myInfo,
        cardSelector: ".template-photos",
        handleCardClick: (card) => {
            popupImage.open(card);
        },
        handleDeleteCard: (cardId) => {
            popupDelete.setSubmitAction(() => {
                api
                    .removeCard(cardId)
                    .then(() => {
                        card.removeCard();
                        popupDelete.close();
                    })
                    .catch(() => {
                        console.log("Ошибка удаления");
                    });
            });
            popupDelete.open();
        },
        handleLikeCard: () => {
            api
                .addLike(card.getCard()._id)
                .then((itemCard) => {
                    card.handleCardLike(itemCard);
                })
                .catch(() => console.log("Ошибка работы лайка"));
        },
        handleDeleteLikeCard: () => {
            api
                .removeLike(card.getCard()._id)
                .then((itemCard) => {
                    card.handleCardLike(itemCard);
                })
                .catch(() => console.log("Ошибка работы дизлайка"));
        },
    });
    return card.createCard();
};

const cardList = new Section({
        renderer: (item) => {
            cardList.addItemsAppend(createCard(item));
        },
    },
    ".photos__cards"
);
const popupDelete = new PopupSubmit("#popup__delete");
popupDelete.setEventListeners();

const popupImage = new PopupWithImage("#popup__image");
popupImage.setEventListeners();

// попап редактирования профиля
const popupEdit = new PopupWithForm({
    modalId: "#popup__edit",
    handleFormSubmit: (data) => {
        popupEdit.renderLoading(true);
        api
            .setUserProfile(data)
            .then((dataInfo) => {
                userInfo.setUserInfo(dataInfo);
                popupEdit.close();
            })
            .catch((error) => console.log(error))
            .finally(() => popupEdit.renderLoading(false));
    },
});
popupEdit.setEventListeners();

// слушатель редактора профиля
editModalButtons.open.addEventListener("click", () => {
    const getUserInfo = userInfo.getUserInfo();
    nameInput.value = getUserInfo.name;
    jobInput.value = getUserInfo.about;

    popupEdit.open();
    validEdit.deactiveButton();
});

// попап добавления карточек
const popupAdd = new PopupWithForm({
    modalId: "#popup__add",
    handleFormSubmit: (item) => {
        popupAdd.renderLoading(true);

        api
            .addCard(item)
            .then((itemCard) => {
                const newCard = createCard(itemCard);
                cardList.addItemsPrepend(newCard);
                popupAdd.close();
            })
            .catch((error) => console.log(error))
            .finally(() => popupAdd.renderLoading(false));
    },
});
popupAdd.setEventListeners();

addModalButtons.open.addEventListener("click", () => {
    popupAdd.open();

    validAdd.deactiveButton();
});

const popupAvatar = new PopupWithForm({
    modalId: "#popup__avatar",
    handleFormSubmit: (data) => {
        popupAvatar.renderLoading(true);

        api
            .editAvatar(data)
            .then((profileInfo) => {
                userInfo.setUserInfo(profileInfo);

                popupAvatar.close();
            })
            .catch((error) => console.log(error))
            .finally(() => popupAvatar.renderLoading(false));
    },
});
popupAvatar.setEventListeners();

avatarModalButtons.open.addEventListener("click", () => {
    popupAvatar.open();

    validAvatar.deactiveButton();
});

// Валидация
const validAdd = new FormValidator(config, popupAdd);
validAdd.enableValidation();

const validEdit = new FormValidator(config, popupEdit);
validEdit.enableValidation();

const validAvatar = new FormValidator(config, popupAvatar);
validAvatar.enableValidation();