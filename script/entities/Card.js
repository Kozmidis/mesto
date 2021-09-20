import { Popup } from "./Popup.js";
import { popupImg, popupImgName, closeImageModal } from './constants.js'

export class Card {

    constructor({ name, link }, cardSelector) {
        this._name = name;
        this._link = link;

        this._cardSelector = cardSelector;
    }

    createCard = () => {
        this.photoElements = this._getTemplate();
        this._foundElements();
        this.cardImage.src = this._link;
        this.cardName.textContent = this._name;
        this.cardImage.alt = this._name;

        this._setEventListeners()

        return this.photoElements;
    };

    _foundElements = () => {
        this.cardImage = this.photoElements.querySelector(".photos__card-image");
        this.cardLike = this.photoElements.querySelector(".photos__card-like");
        this.removeButton = this.photoElements.querySelector(
            ".photos__remove-button"
        );
        this.cardName = this.photoElements.querySelector(".photos__card-name");
    };

    _getTemplate() {
        const templatePhotos = document.querySelector(this._cardSelector).content;

        return templatePhotos.cloneNode(true);
    }

    _setEventListeners() {
        this.cardLike.addEventListener("click", (evt) => {
            evt.target.classList.toggle("photos__card-like_active");
        }); //функция лайка/дизлайка карточек



        this.removeButton.addEventListener("click", (evt) => {
            evt.target.closest(".photos__card").remove();
        });
        // функция удаления карточки
        const popupImage = new Popup("#popup__image");
        closeImageModal.addEventListener("click", popupImage.close);


        this.cardImage.addEventListener("click", (evt) => {
            evt.target.closest(".popup__image");
            popupImg.src = this._link;
            popupImg.alt = this._name;
            popupImgName.textContent = this._name;
            popupImage.open();
        });
    }
}