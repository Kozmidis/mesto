export class Popup {
    _openedClass = "popup_opened";

    constructor(modalId) {
        this.element = document.querySelector(modalId);
    }

    open() {
        this.element.classList.add(this._openedClass);

        document.addEventListener("keyup", this._handleEscClose);
    }

    close() {
        this.element.classList.remove(this._openedClass);

        document.removeEventListener("keyup", this._handleEscClose);
    }

    _handlePopupOverlayClick = (evt) => {
        if (evt.target === this.element) {
            this.close();
        }
    };

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    };

    setEventListeners() {
        this.element
            .querySelector(".popup__close")
            .addEventListener("click", () => this.close());

        this.element.addEventListener("click", (evt) =>
            this._handlePopupOverlayClick(evt)
        );
    }
}