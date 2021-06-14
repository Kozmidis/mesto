const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("popup__form-input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__form-input-error_active");
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("popup__form-input_type_error");
    errorElement.classList.remove("popup__form-input-error_active");
    errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(
        formElement.querySelectorAll(".popup__form-input")
    );
    const buttonElement = formElement.querySelector(".popup__submit-button");
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function() {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.form));
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElement);
    });
}
enableValidation({
    form: '.popup__form[name="popupEdit"]',
    user: '.popup__form-input_input_name[name="user"]',
    userjob: '.popup__form-input_input_job[name="userjob"]',
    submitButton: '.popup__submit-button[name="submit"]'
});

enableValidation({
    form: '.popup__form[name="popupAdd"]',
    place: '.popup__form-input_input_place[name="place"]',
    image: '.popup__form-input_input_image[name="image"]',
    submitButton: '.popup__submit-button[name="create"]'
});

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add("popup__submit-button_inactive");
        buttonElement.setAttribute("disabled", "disabled");
    } else {
        buttonElement.classList.remove("popup__submit-button_inactive");
        buttonElement.removeAttribute("disabled");
    }
}