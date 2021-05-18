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