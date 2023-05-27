import { initialCards } from "./constants.js";
import { Card } from "./Сard.js";
import { FormValidator } from "./FormValidator.js";



const openEditBtn = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_type_edit");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const popupName = document.querySelector(".popup__input_type_name");
const popupJob = document.querySelector(".popup__input_type_job");
const formEditPopup = document.querySelector(".popup__form_type_edit");
const formAddPopup = document.querySelector(".popup__form_type_add");
const popupImages = document.querySelector(".popup__picture");
const popupDescription = document.querySelector(".popup__picture-description");
const groupsContainer = document.querySelector(".groups");
const popupAddBtn = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_type_add");
const popupNameAdd = document.querySelector(".popup__input_type_text");
const popupLinkAdd = document.querySelector(".popup__input_type_link");
const popupImg = document.querySelector(".popup_type_img");
const popupList = document.querySelectorAll('.popup');



const formClassList = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save-disabled',
    inputErrorClass: 'popup__input_valid_error',
    errorClass: 'popup__error_visible'
};


const formProfileValidator = new FormValidator(formEditPopup, formClassList);
formProfileValidator.enableValidation();

const formAddValidator = new FormValidator(formAddPopup, formClassList);
formAddValidator.enableValidation();




const handlePopupClose = (evt) => {
    const isOverlay = evt.target.classList.contains('popup');
    const isCloseBtn = evt.target.classList.contains('popup__close');
    if (isOverlay || isCloseBtn) {
        popupList.forEach(closePopup);
    }
};

const closePressTheEsc = (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
};

const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePressTheEsc);
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePressTheEsc);
}

popupList.forEach((popup) => {
    popup.addEventListener("click", handlePopupClose);
})


const openEditForm = () => {
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
    formProfileValidator.resetError();
    openPopup(popupEdit);
}

const openAddForm = () => {
    formAddPopup.reset();
    formAddValidator.resetError();
    openPopup(popupAdd);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closePopup(popupEdit);
}

const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const name = popupNameAdd.value;
    const link = popupLinkAdd.value;

    const newCard = {
        name,
        link,
    };

    groupsContainer.prepend(createNewCard(newCard));
    closePopup(popupAdd);
};

// Создание карточки
const createNewCard = (element) => {
    const card = new Card(element, openPopupImg);
    const cardElement = card.createCardElement();
    return cardElement;
}

const openPopupImg = (cardsData) => {
    popupDescription.textContent = cardsData.name;
    popupImages.src = cardsData.link;
    popupImages.alt = cardsData.name;
    openPopup(popupImg);
}

initialCards.forEach((element) => {
    groupsContainer.prepend(createNewCard(element));
});


formEditPopup.addEventListener("submit", handleProfileFormSubmit);
openEditBtn.addEventListener("click", openEditForm);
formAddPopup.addEventListener("submit", handleAddFormSubmit);
popupAddBtn.addEventListener("click", openAddForm);









































