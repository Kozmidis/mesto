import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ modalId, formSubmit }) {
        super(modalId);
        this._formSubmit = formSubmit;
        this._form = this.element.querySelector(".popup__form");
    }

    _getInputValues() {
        this._inputList = this.element.querySelectorAll(".popup__form-input");
        this._inputValues = {};
        this._inputList.forEach(
            (input) => (this._inputValues[input.name] = input.value)
        );

        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this.element.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._formSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}