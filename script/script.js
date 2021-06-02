const editButton = document.querySelector(".profile__redact");
const popupEdit = document.querySelector("#popup__edit");
const closeEditModal = document.querySelector(".popup__close_edit");
const formElement = document.querySelector("#formEdit");
const nameInput = document.querySelector(".popup__form-input_input_name");
const jobInput = document.querySelector(".popup__form-input_input_job");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about-me");


const closeAddModal = document.querySelector('.popup__close_add')
const addButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector("#popup__add");
const formCreateElement = document.querySelector("#formAdd")
const placeInput = document.querySelector(".popup__form-input_input_place")
const imageInput = document.querySelector(".popup__form-input_input_image")

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



const initCards = initialCards.slice()
    //модальное окно редактирования профиля (открыть/закрыть/сохранить)

function popupEditOpen() {
    if (!(popupEdit.classList.contains('popup_opened'))) {

        nameInput.value = profileName.textContent
        jobInput.value = profileAbout.textContent
        popupEdit.classList.add('popup_opened');
    }
}

function popupEditClose() {
    if (popupEdit.classList.contains('popup_opened')) {

        popupEdit.classList.remove('popup_opened');
    }
}


function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value
    profileAbout.textContent = jobInput.value
    popupEditClose()
}



//модальное окно добавления карточек (открыть/закрыть)

function popupAddOpen() {
    if (!(popupAdd.classList.contains('popup_opened'))) {

        popupAdd.classList.add('popup_opened');
    }
}

function popupAddClose() {
    if (popupAdd.classList.contains('popup_opened')) {

        popupAdd.classList.remove('popup_opened');
    }
}


function addCards() {
    initialCards.forEach(function(card) {
        const photoElements = templatePhotos.cloneNode(true)
        photoElements.querySelector('.photos__card-like')
        photoElements.querySelector('.photos__card-image').src = card.link
        photoElements.querySelector('.photos__card-name').textContent = card.name
        photoElements.querySelector('.photos__card-image').alt = card.name

        photoElements.querySelector('.photos__card-like').addEventListener('click', function(evt) {
            evt.target.classList.toggle("photos__card-like_active");
        });
        listPhotos.prepend(photoElements)

    })
}
addCards()

function createCardHandler(evt) {
    evt.preventDefault();
    let add = {}
    add.name = placeInput.value
    add.link = imageInput.value

    initialCards.unshift(add)
    placeInput.value = ''
    imageInput.value = ''
    initialCards.splice(1)
    addCards()
    popupAddClose()
}


editButton.addEventListener('click', popupEditOpen);
formElement.addEventListener('submit', formSubmitHandler);
closeEditModal.addEventListener('click', popupEditClose);
closeAddModal.addEventListener('click', popupAddClose);
addButton.addEventListener('click', popupAddOpen);
formCreateElement.addEventListener('submit', createCardHandler)