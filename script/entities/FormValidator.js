export class FormValidator {
    constructor(config, targetFormElement) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;


        this._targetFormElement = targetFormElement;
    }
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._targetFormElement.element.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = this._targetFormElement.element.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = " ";
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState(buttonElement) {
        if (this._hasInvalidInput()) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.setAttribute("disabled", "disabled");
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.removeAttribute("disabled");
        }
    }

    _setEventListeners(formElement) {
        this._inputList = Array.from(
            formElement.querySelectorAll(this._inputSelector)
        );
        const buttonElement = formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState(buttonElement);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(buttonElement);
            });
        });
    }


    enableValidation() {
        this._targetFormElement.element.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners(this._targetFormElement.element);
    }
}