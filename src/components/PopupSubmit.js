import { Popup } from "./Popup.js";

export default class PopupSubmit extends Popup {
    constructor(modalId) {
        super(modalId);
    }

    setSubmitAction(submitAction) {
        this._handleSubmitAction = submitAction;
    }

    setEventListeners() {
        super.setEventListeners();
        this.popup.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmitAction();
        });
    }
}