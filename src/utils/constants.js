const arhyz = new URL('../images/cards/arkhyz.jpg',
    import.meta.url);
const ivanovo = new URL('../images/cards/ivanovo.jpg',
    import.meta.url);
const kholmogorsky = new URL('../images/cards/kholmogorsky-rayon.jpg',
    import.meta.url);
const kamchatka = new URL('../images/cards/kamchatka.jpg',
    import.meta.url);
const chelyabinsk = new URL('../images/cards/chelyabinsk-oblast.jpg',
    import.meta.url);
const baikal = new URL('../images/cards/baikal.jpg',
    import.meta.url);





export { Popup }
from "../components/Popup.js";
export { Card }
from "../components/Card.js";
// перенос строки у экспорта осуществляет авторедактирование в VSCode
export { initialCards, listPhotos, config, nameInput, jobInput, cardName, cardLink, nameProfile, jobProfile, editModalButtons, formEditButton, addModalButtons, formAddButton, BUTTON_CREATE, BUTTON_SUBMIT }

const initialCards = [{
        name: "Архыз",
        link: arhyz,
    },
    {
        name: "Челябинская область",
        link: chelyabinsk,
    },
    {
        name: "Иваново",
        link: ivanovo,
    },
    {
        name: "Камчатка",
        link: kamchatka,
    },
    {
        name: "Холмогорский район",
        link: kholmogorsky,
    },
    {
        name: "Байкал",
        link: baikal,
    },
];
const listPhotos = document.querySelector(".photos__cards");

const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__form-input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_inactive",
    inputErrorClass: "popup__form-input_type_error",
    errorClass: "popup__form-input-error_active",
};


const nameInput = document.querySelector(".popup__form-input_input_name");
const jobInput = document.querySelector(".popup__form-input_input_job");
const cardName = document.querySelector(".popup__form-input_input_place");
const cardLink = document.querySelector(".popup__form-input_input_image");

const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__about-me");

const popupImg = document.querySelector(".popup__image");
const popupImgName = document.querySelector(".popup__image-name");

const closeImageModal = document.querySelector(".popup__close_img");


const editModalButtons = {
    open: document.querySelector(".profile__redact"),
    close: document.querySelector(".popup__close_edit"),
};
const formEditButton = document.querySelector("#formEdit");

const addModalButtons = {
    open: document.querySelector(".profile__add-button"),
    close: document.querySelector(".popup__close_add"),
};
const formAddButton = document.querySelector("#formAdd");

const BUTTON_CREATE = 'create'
const BUTTON_SUBMIT = 'submit'