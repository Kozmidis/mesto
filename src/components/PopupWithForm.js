import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ modalId, handleFormSubmit }) {
        super(modalId);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this.popup.querySelector(".popup__form");
    }

    _getInputValues() {
        this._inputList = this.popup.querySelectorAll(".popup__form-input");
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
}