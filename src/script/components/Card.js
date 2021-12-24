export class Card {
    constructor(item, cardSelector, handleCardClick) {
        this._name = item.name;
        this._link = item.link;
        this._data = item;
        this._handleCardClick = handleCardClick;
        this._cardSelector = cardSelector;
    }

    createCard = () => {
        this.photoElements = this._getTemplate();
        this._foundElements();
        this.cardImage.src = this._link;
        this.cardName.textContent = this._name;
        this.cardImage.alt = this._name;

        this._setEventListeners();

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

        this.cardImage.addEventListener("click", () => {
            this._handleCardClick(this._data);
        }); //открыть попап изображения
    }
}