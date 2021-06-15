const editButton = document.querySelector(".profile__redact");
const popupEdit = document.querySelector("#popup__edit");
const closeEditModal = document.querySelector(".popup__close_edit");
const formEditElement = document.querySelector("#formEdit");
const nameInput = document.querySelector(".popup__form-input_input_name");
const jobInput = document.querySelector(".popup__form-input_input_job");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about-me");

const closeImageModal = document.querySelector(".popup__close_img");
const closeAddModal = document.querySelector(".popup__close_add");
const addButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector("#popup__add");
const formCreateElement = document.querySelector("#formAdd");
const placeInput = document.querySelector(".popup__form-input_input_place");
const imageInput = document.querySelector(".popup__form-input_input_image");
const popupContainer = document.querySelector(".popup__content");

const templatePhotos = document.querySelector("#template-photos").content;
const listPhotos = document.querySelector(".photos__cards");
const popupImage = document.querySelector("#popup__image");
const popupImg = document.querySelector(".popup__image");
const popupImgName = document.querySelector(".popup__image-name");

function openModal(modal) {
    modal.classList.add("popup_opened");
    document.addEventListener("keyup", keyHandler);

    modal.addEventListener("click", popupOverlay);
}

function closeModal(modal) {
    modal.classList.remove("popup_opened");
    document.removeEventListener("keyup", keyHandler);
    modal.removeEventListener("click", popupOverlay);
}

function openEditPopup() {
    openModal(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
}

function closeEditPopup() {
    closeModal(popupEdit);
}

function openAddPopup() {
    openModal(popupAdd);
}

function closeAddPopup() {
    closeModal(popupAdd);
    formCreateElement.reset()
}

function openImagePopup() {
    openModal(popupImage);
}

function closeImagePopup() {
    closeModal(popupImage);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closeEditPopup();
}

function handleCardLike(evt) {
    evt.target.classList.toggle("photos__card-like_active");
}

function renderCards() {
    initialCards.forEach(item => {
        const card = createCard(item);
        addCard(card);
    });

}

renderCards();



function addCard(item) {
    listPhotos.prepend(item)
}

function createCard({ name, link }) {
    const photoElements = templatePhotos.cloneNode(true);
    const cardImage = photoElements.querySelector(".photos__card-image")
    const cardLike = photoElements.querySelector(".photos__card-like");
    cardImage.src = link;
    photoElements.querySelector(".photos__card-name").textContent = name;
    cardImage.alt = name;
    photoElements.querySelector(".photos__remove-button");

    cardLike.addEventListener("click", handleCardLike)

    cardImage.addEventListener("click", function(evt) {
        evt.target.closest(".popup__image");
        popupImg.src = link;
        popupImg.alt = name;
        popupImgName.textContent = name;
        openImagePopup();
    });

    photoElements.querySelector(".photos__remove-button").addEventListener("click", handleDelete);
    return photoElements;
}

function createCardHandler(evt) {
    evt.preventDefault();
    const name = placeInput.value;
    const link = imageInput.value;

    addCard(createCard({ name, link }))
    formCreateElement.reset()
    closeAddPopup();
}

function handleDelete(evt) {
    evt.target.closest(".photos__card").remove();
}

editButton.addEventListener("click", openEditPopup);
formEditElement.addEventListener("submit", handleProfileFormSubmit);
closeEditModal.addEventListener("click", closeEditPopup);
closeAddModal.addEventListener("click", closeAddPopup);
closeImageModal.addEventListener("click", closeImagePopup);
addButton.addEventListener("click", openAddPopup);
formCreateElement.addEventListener("submit", createCardHandler);

const keyHandler = (evt) => {
    if (evt.key === "Escape" || !evt.target === "popupContainer") {
        const popupActive = document.querySelector(".popup_opened");
        closeModal(popupActive);
    }
};



const popupOverlay = (evt) => {
    if (!(evt.target === popupContainer)) {
        closeModal(evt.target);
    }
};