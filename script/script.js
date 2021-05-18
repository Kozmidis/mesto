let editButton = document.querySelector(".profile__redact");
let popup = document.querySelector(".popup");
let closeModal = document.querySelector(".popup__close");



function popupOpen() {
    if (popup.classList.contains('popup_closed')) {
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

editButton.addEventListener('click', popupOpen);
closeModal.addEventListener('click', popupClose);



let formElement = document.querySelector(".popup__form")
let nameInput = document.querySelector(".popup__form-name")
let jobInput = document.querySelector(".popup__form-aboutMe")
let profileName = document.querySelector(".profile__name")
let profileAbout = document.querySelector(".profile__aboutMe")

nameInput.value = profileName.textContent
jobInput.value = profileAbout.textContent

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value
    profileAbout.textContent = jobInput.value
    popupClose()
}


formElement.addEventListener('submit', formSubmitHandler);