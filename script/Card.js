import { initialCards } from './initial-сards.js';

class Card {
    constructor(data, cardSelector) {
        data
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }



    _getTemplate() {
        const templatePhotos = document.querySelector(this._cardSelector).content;
        const photoElements = templatePhotos.cloneNode(true);

        return photoElements;
    }

    // handleCardLike = (evt) => {

    // }


    createCard = () => {
        this.photoElements = this._getTemplate();
        this.cardImage = this.photoElements.querySelector(".photos__card-image");
        this.cardLike = this.photoElements.querySelector(".photos__card-like");
        this.cardImage.src = this._link;
        this.photoElements.querySelector(".photos__card-name").textContent = this._name;
        this.cardImage.alt = this._name;
        this.photoElements.querySelector(".photos__remove-button");

        this.cardLike.addEventListener("click", (evt) => {
            evt.target.classList.toggle("photos__card-like_active");
        }); //функция лайка/дизлайка карточек

        this.cardImage.addEventListener("click", function(evt) {
            evt.target.closest(".popup__image");
            popupImg.src = this.link;
            popupImg.alt = this.name;
            popupImgName.textContent = this.name;
            openImagePopup();
        });

        // this.photoElements
        //     .querySelector(".photos__remove-button")
        //     .addEventListener("click", handleDelete);
        return this.photoElements;
    }


}

const renderCards = () => {
    const listPhotos = document.querySelector(".photos__cards")
    initialCards.forEach((item) => {
        const card = new Card(item, '.template-photos')
        const photoElements = card.createCard();
        listPhotos.prepend(photoElements);
    });
};

renderCards()