export class Card {
    constructor(item, cardSelector, handleCardClick) {
        this._name = item.name;
        this._link = item.link;
        this._data = item;
        this._handleCardClick = handleCardClick;
        this._cardSelector = cardSelector;
    }

    createCard = () => {
        this._photoElement = this._getTemplate();
        this._foundElements();
        this._cardImage.src = this._link;
        this._cardName.textContent = this._name;
        this._cardImage.alt = this._name;

        this._setEventListeners();
        return this._photoElement;
    };

    _foundElements = () => {
        this._cardImage = this._photoElement.querySelector(".photos__card-image");
        this._cardLike = this._photoElement.querySelector(".photos__card-like");
        this._removeButton = this._photoElement.querySelector(
            ".photos__remove-button"
        );
        this._cardName = this._photoElement.querySelector(".photos__card-name");
    };

    _getTemplate() {
        const templatePhotos = document.querySelector(this._cardSelector).content;

        return templatePhotos.cloneNode(true);
    }



    //метод лайка/дизлайка карточек
    _handleCardLike(evt) {
        evt.target.classList.toggle("photos__card-like_active");
    }


    // метод удаления карточки
    _removeCard() {
        this._photoElement.remove();
    }


    _setEventListeners() {
        this._cardLike.addEventListener("click", this._handleCardLike);
        this._removeButton.addEventListener("click", this._removeCard);


        this._cardImage.addEventListener("click", () => {
            this._handleCardClick(this._data);
        }); //открыть попап изображения
    }
}