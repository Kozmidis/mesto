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
    _showInputError(formElement, inputElement, errorMessage) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = " ";
    }

    _checkInputValidity(formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(
                formElement,
                inputElement,
                inputElement.validationMessage
            );
        } else {
            this._hideInputError(formElement, inputElement);
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.setAttribute("disabled", "disabled");
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.removeAttribute("disabled");
        }
    }

    _setEventListeners(formElement) {
        const inputList = Array.from(
            formElement.querySelectorAll(this._inputSelector)
        );
        const buttonElement = formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(formElement, inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    }

    deactiveButton(buttonElement) {
        buttonElement.addEventListener("click", () => {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.setAttribute("disabled", "disabled");
        });
    }

    enableValidation() {
        const formElement = this._targetFormElement.element.querySelector(
            this._formSelector
        );
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners(formElement);
    }
}