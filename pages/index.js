const openPopupBtn = document.querySelector(".profile__edit-button_popup_opened");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__form-close-btn");
const popupSaveBtn = document.querySelector(".popup__form-button-save");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const popupName = document.querySelector(".popup__input_type_name");
const popupJob = document.querySelector(".popup__input_type_job");
const formElement = document.querySelector(".popup__container");
const formSave = document.querySelector(".popup__form");


function openPopup() {
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
    popup.classList.add("popup_opened");

}

function closePopupByClick(evt) {
    let isOverlay = evt.target.classList.contains("popup");
    let isCloseBtn = evt.target.classList.contains("popup__form-close-btn");
    if (isOverlay || isCloseBtn) {
        closePopup();
    }
}

function closePopup() {
    popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closePopup();
}

openPopupBtn.addEventListener("click", openPopup);
popupCloseBtn.addEventListener("click", closePopup);
popup.addEventListener("click", closePopupByClick);
formElement.addEventListener("submit", formSubmitHandler);
formSave.addEventListener("click", closePopupByClick);






/* Поп ап для добавления картинок */

const PopupAddBtn = document.querySelector(".profile__add-button_popup_added");
const popupNameAdd = document.querySelector(".popup__text");
const popupAdd = document.querySelector(".popup__add");


function openPopupAdd() {
    popupNameAdd.value = cardsTitle.textContent;
    popupAdd.classList.add("popup_added");

}
function closePopupAddByClick(evt) {
    let isOverlay = evt.target.classList.contains("popup__add");
    let isCloseBtn = evt.target.classList.contains("popup__form-close-btn");
    if (isOverlay || isCloseBtn) {
        closePopupAdd();
    }
}
function closePopupAdd() {
    popupAdd.classList.remove("popup_added");
}

function formSubmitHandlerAdd(evt) {
    evt.preventDefault();
    
    closePopup();
}

PopupAddBtn.addEventListener("click", openPopupAdd);
popupCloseBtn.addEventListener("click", closePopupAdd);
popupAdd.addEventListener("click", closePopupAddByClick);
formElement.addEventListener("submit", formSubmitHandlerAdd);
formSave.addEventListener("click", closePopupAddByClick);




/* Поп ап для изображений

const  popupImages = document.querySelector('.popup__images');
const popupPicture = document.querySelector('.popup__picture');
const popupPictureDesc = document.querySelector('.popup__picture-description');
*/











/* 6 карточек, лайк и мусорка */

const initialCards = [
    {
        name: 'Капибара отдыхает',
        link: 'https://im.wampi.ru/2023/04/24/Capybara-in-the-pool.jpg'
    },
    {
        name: 'Капибара работает',
        link: 'https://im.wampi.ru/2023/04/24/760688.jpg'
    },
    {
        name: 'Капибара на интервью',
        link: 'https://im.wampi.ru/2023/04/24/i_11zon.jpg'
    },
    {
        name: 'Капибара и друзья',
        link: 'https://ie.wampi.ru/2023/04/24/5M0V7TvZ3zON7x_11zon.jpg'
    },
    {
        name: 'Капибары Уллиема Дефо',
        link: 'https://ie.wampi.ru/2023/04/24/KAPIBARA-ZIVOTNYE-MEMY-OTSYLKI-7517954.jpg'
    },
    {
        name: 'Ok I pull up',
        link: 'https://im.wampi.ru/2023/04/24/maxresdefault-3.jpg'
    }
];

initialCards.push();

const cardTemplate = document.getElementById('card-template');
const groupsContainer = document.querySelector('.groups');

const createCardElement = (cardsData) => {
    const cardsElement = cardTemplate.content.querySelector('.groups__group').cloneNode(true);

    const cardsImage = cardsElement.querySelector('.groups__image');
    const cardsTitle = cardsElement.querySelector('.groups__text');
    const cardsDeleteBtn = cardsElement.querySelector('.groups__deletebtn');
    const cardsLikeBtn = cardsElement.querySelector('.groups__like');



    cardsTitle.textContent = cardsData.name;
    cardsImage.src = cardsData.link;
    cardsImage.alt = cardsData.name;

    const handleDelete = (evt) => {
        cardsElement.remove();
    }

    const handleLike = (evt) => {
        evt.target.classList.toggle('groups__like_active');
    }

    cardsDeleteBtn.addEventListener('click', handleDelete);
    cardsLikeBtn.addEventListener('click', handleLike);

    return cardsElement;
};

initialCards.forEach((card) => {
    const element = createCardElement(card);
    groupsContainer.append(element);
});

