export class Card {
    constructor({
        item,
        myInfo,
        cardSelector,
        handleCardClick,
        handleDeleteCard,
        handleLikeCard,
        handleDeleteLikeCard,
    }) {
        this._name = item.name;
        this._link = item.link;
        this._likes = item.likes;
        this._data = item;
        this._userId = item.owner._id;
        this._myId = myInfo._id;
        this._handleCardClick = handleCardClick;
        this._cardSelector = cardSelector;
        this._handleDeleteCard = handleDeleteCard;
        this._handleLikeCard = handleLikeCard;
        this._handleDeleteLikeCard = handleDeleteLikeCard;
    }

    getCard() {
        return this._data;
    }

    _foundElements = () => {
        this._cardImage = this._photoElement.querySelector(".photos__card-image");
        this._cardLike = this._photoElement.querySelector(".photos__card-like");
        this._removeButton = this._photoElement.querySelector(
            ".photos__remove-button"
        );
        this._likesCounter = this._photoElement.querySelector(
            ".photos__card-like-counter"
        );
        this._cardName = this._photoElement.querySelector(".photos__card-name");
    };

    _getTemplate() {
        const templatePhotos = document
            .querySelector(this._cardSelector)
            .content.querySelector(".photos__card")
            .cloneNode(true);

        return templatePhotos;
    }

    //метод лайка/дизлайка карточек
    handleCardLike(item) {
        this._likes = item.likes;
        this._getLikesCounter(item);
        if (this._checkMyLike()) {
            this._cardLike.classList.add("photos__card-like_active");
        } else {
            this._cardLike.classList.remove("photos__card-like_active");
        }
    }

    _getLikesCounter(item) {
        this._likesCounter.textContent =
            item.likes.length;
    }

    _checkMyLike() {
        return Boolean(this._likes.find((item) => item._id == this._myId));
    }

    // метод удаления карточки
    removeCard = () => {
        this._photoElement.remove();
    };

    _setEventListeners() {
        this._cardLike.addEventListener("click", () => {
            if (this._checkMyLike()) {
                this._handleDeleteLikeCard();
            } else {
                this._handleLikeCard();
            }
        });

        this._removeButton.addEventListener("click", () => {
            this._handleDeleteCard(this._data._id);
        });

        this._cardImage.addEventListener("click", () => {
            this._handleCardClick(this._data);
        }); //открыть попап изображения
    }

    createCard = () => {
        this._photoElement = this._getTemplate();
        this._foundElements();
        const cardName = this._cardName;
        const cardImage = this._cardImage;
        const cardLikeCounter = this._likesCounter;
        const removeButton = this._removeButton;

        if (this._userId == this._myId) {
            removeButton.classList.add("photos__remove-button_active");
        }

        if (this._checkMyLike()) {
            this._cardLike.classList.add("photos__card-like_active");
        }

        cardName.textContent = this._name;
        cardImage.src = this._link;
        cardImage.alt = this._name;
        cardLikeCounter.textContent = this._likes.length;

        this._setEventListeners();
        return this._photoElement;
    };
}