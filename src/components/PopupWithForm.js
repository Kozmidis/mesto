import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ modalId, handleFormSubmit }) {
        super(modalId);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this.popup.querySelector(".popup__form");
        this._button = this._form.querySelector(".popup__submit-button");
        this._buttonText = this._button.textContent;
        this._inputList = this.popup.querySelectorAll(".popup__form-input");
    }

    _getInputValues() {

        this._inputValues = {};
        this._inputList.forEach(
            (input) => (this._inputValues[input.name] = input.value)
        );

        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this.popup.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    renderLoading(loads) {
        this._button.textContent = loads ? "Сохранение..." : this._buttonText;
    }
}