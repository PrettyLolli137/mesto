import './pages/index.css'
import {
    initialCards,
    openEditBtn,
    popupAddBtn,
    formClassList,
    formAddPopup,
    formEditPopup,
    formProfileInfo,
    

} from "./scripts/utils/constants.js";

import Card from "./scripts//Card.js";
import FormValidator from "./scripts//FormValidator.js";
import PopupWithImage from "./scripts//PopupWithImage.js";
import Section from "./scripts//Section.js";
import UserInfo from "./scripts/UserInfo.js";
import PopupWithForm from "./scripts//PopupWithForm.js";








// Информация о пользователе
const userInfo = new UserInfo(formProfileInfo);


// Попап для фото
const popupImg = new PopupWithImage(".popup_type_img");



// Карточки на сайте
const section = new Section({
    items: initialCards,
    renderer: (element) => {
    const card = new Card(element, popupImg.open);
    return card.createCardElement();
}
}, '.groups');

    section.renderItems();


// Попап и форма для редактирования
const popupEdit = new PopupWithForm(".popup_type_edit", (evt) => {
    evt.preventDefault();
    userInfo.setUserInfo(popupEdit.getInputValue());
    popupEdit.close();
});




//Попап для формы с добавлением картинки

const popupAdd = new PopupWithForm(".popup_type_add", (evt) => {
    evt.preventDefault();
    section.addNewItem(section.renderer(popupAdd.getInputValue()));
    popupAdd.close();
});





//Validation 
const formProfileValidator = new FormValidator(formEditPopup, formClassList);
formProfileValidator.enableValidation();

const formAddValidator = new FormValidator(formAddPopup, formClassList);
formAddValidator.enableValidation();



popupImg.setEventListeners();
popupEdit.setEventListeners();
popupAdd.setEventListeners();

// Слушатели для открытия форм
openEditBtn.addEventListener('click', () => {
    formProfileValidator.resetValidation();
    popupEdit.setInputValue(userInfo.getUserInfo());
    popupEdit.open();
});

popupAddBtn.addEventListener('click', () => {
    formAddValidator.resetValidation();
    popupAdd.open();
});












/*
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const popupName = document.querySelector(".popup__input_type_name");
const popupJob = document.querySelector(".popup__input_type_job");
const popupImages = document.querySelector(".popup__picture");
const popupDescription = document.querySelector(".popup__picture-description");
const popupNameAdd = document.querySelector(".popup__input_type_text");
const popupLinkAdd = document.querySelector(".popup__input_type_link");
const popupList = document.querySelectorAll('.popup');

import Card from "./scripts/Сard.js";
import Section from "./scripts/Section.js";




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
    formProfileValidator.resetValidation();
    openPopup(popupEdit);
}

const openAddForm = () => {
    formAddPopup.reset();
    formAddValidator.resetValidation();
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

const templateSelector = '#card-template'; // Вызвал переменную 

// Создание карточки
const createNewCard = (element) => {
    const card = new Card(element, openPopupImg, templateSelector); // добавил templateSelector
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




*/






/*


const section = new Section({
    items: initialCards,
    renderer: (element) => {
    const card = new Card(element, popupImg.open);
    return card.createCardElement();
}
}, '.groups');

    section.renderItems();



    const popupAdd = new PopupWithForm(".popup_type_add", (evt) => {
    evt.preventDefault();
    section.addNewItem(section.renderer(popupAdd.getInputValue()));
    popupAdd.close();
});



const capybaraChill = new URL('./scripts/constants.js/https://im.wampi.ru/2023/04/24/Capybara-in-the-pool.jpg', import.meta.url);
const capybaraWork = new URL('./images/james.jpg', import.meta.url);
const capybaraInter = new URL('./images/bryant.jpg', import.meta.url)
const capybaraFriends = new URL('./images/jordan.jpg', import.meta.url);
const capybaraDefo = new URL('./images/james.jpg', import.meta.url);
const capybaraOk = new URL('./images/bryant.jpg', import.meta.url)

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'Капибара отдыхает', link: capybaraChill },
  { name: 'Капибара работает', link: capybaraWork },
  { name: 'Капибара на интервью', link: capybaraInter },
  { name: 'Капибара и друзья', link: capybaraFriends },
  { name: 'Капибары Уллиема Дефо', link: capybaraDefo },
  { name: 'Ok I pull up', link: capybaraOk },
]; 

*/























