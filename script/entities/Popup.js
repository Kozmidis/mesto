export class Popup {
    _openedClass = "popup_opened";

    constructor(modalId) {
        this.element = document.querySelector(modalId);
    }

    open = () => {
        this.element.classList.add(this._openedClass);

        document.addEventListener("keyup", this._handleEscapeClick);
        this.element.addEventListener("click", this._handlePopupOverlayClick);
    };

    close = () => {
        this.element.classList.remove(this._openedClass);

        document.removeEventListener("keyup", this._handleEscapeClick);
        this.element.removeEventListener("click", this._handlePopupOverlayClick);
    };

    _handlePopupOverlayClick = (evt) => {
        if (evt.target === this.element) {
            this.close();
        }
    };

    _handleEscapeClick = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    };
}