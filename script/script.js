let editButton = document.querySelector(".profile__redact");
let popup = document.querySelector(".popup");
let closeModal = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__form")
let nameInput = document.querySelector(".popup__form-input_input_name")
let jobInput = document.querySelector(".popup__form-input_input_job")
let profileName = document.querySelector(".profile__name")
let profileAbout = document.querySelector(".profile__about-me")




const templatePhotos = document.querySelector('#template-photos').content
const listPhotos = document.querySelector('.photos__cards')




const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
initialCards.forEach(function(card) {
    const photoElements = templatePhotos.cloneNode(true)
    const likeButton = document.querySelector('.photos__card-like')
    photoElements.querySelector('.photos__card-image').src = card.link
    photoElements.querySelector('.photos__card-name').textContent = card.name
    listPhotos.append(photoElements)
})

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