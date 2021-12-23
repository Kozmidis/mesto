import { Popup } from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(modalId) {
        super(modalId);
        this._popupImage = this.element.querySelector(".popup__image");
        this._popupName = this.element.querySelector(".popup__image-name");
    }

    open(data) {
        this._popupImage.src = data.link;
        this._popupImage.alt = data.name;
        this._popupName.textContent = data.name;

        super.open();
    }
}