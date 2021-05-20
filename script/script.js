let editButton = document.querySelector(".profile__redact");
let popup = document.querySelector(".popup");
let closeModal = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__form")
let nameInput = document.querySelector(".popup__form-input_name")
let jobInput = document.querySelector(".popup__form-input_job")
let profileName = document.querySelector(".profile__name")
let profileAbout = document.querySelector(".profile__about-me")


function popupOpen() {
    if (popup.classList.contains('popup_closed')) {

        nameInput.value = profileName.textContent
        jobInput.value = profileAbout.textContent
        popup.classList.add('popup_opened');
        popup.classList.remove('popup_closed');
    }
}

function popupClose() {
    if (popup.classList.contains('popup_opened')) {
        popup.classList.add('popup_closed');
        popup.classList.remove('popup_opened');
    }
}


function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value
    profileAbout.textContent = jobInput.value
    popupClose()
}

editButton.addEventListener('click', popupOpen);
closeModal.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);