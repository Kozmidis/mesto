export class Popup {
    _openedClass = "popup_opened";

    constructor(modalId) {
        this.popup = document.querySelector(modalId);
    }

    open() {
        this.popup.classList.add(this._openedClass);

        document.addEventListener("keyup", this._handleEscClose);
    }

    close() {
        this.popup.classList.remove(this._openedClass);

        document.removeEventListener("keyup", this._handleEscClose);
    }

    _handlePopupOverlayClick = (evt) => {
        if (evt.target === this.popup) {
            this.close();
        }
    };

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    };

    setEventListeners() {
        this.popup
            .querySelector(".popup__close")
            .addEventListener("click", () => this.close());

        this.popup.addEventListener("click", (evt) =>
            this._handlePopupOverlayClick(evt)
        );
    }
}