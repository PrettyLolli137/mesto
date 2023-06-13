const initialCards = [
    {
        name: "Капибара отдыхает",
        link: "https://im.wampi.ru/2023/04/24/Capybara-in-the-pool.jpg",
    },
    {
        name: "Капибара работает",
        link: "https://im.wampi.ru/2023/04/24/760688.jpg",
    },
    {
        name: "Капибара на интервью",
        link: "https://im.wampi.ru/2023/04/24/i_11zon.jpg",
    },
    {
        name: "Капибара и друзья",
        link: "https://ie.wampi.ru/2023/04/24/5M0V7TvZ3zON7x_11zon.jpg",
    },
    {
        name: "Капибары Уллиема Дефо",
        link: "https://ie.wampi.ru/2023/04/24/KAPIBARA-ZIVOTNYE-MEMY-OTSYLKI-7517954.jpg",
    },
    {
        name: "Ok I pull up",
        link: "https://im.wampi.ru/2023/04/24/maxresdefault-3.jpg",
    },
];


const openEditBtn = document.querySelector(".profile__edit-button");
const popupAddBtn = document.querySelector(".profile__add-button");
const formEditPopup = document.querySelector(".popup__form_type_edit");
const formAddPopup = document.querySelector(".popup__form_type_add");



const formClassList = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save-disabled',
    inputErrorClass: 'popup__input_valid_error',
    errorClass: 'popup__error_visible'
};

const formProfileInfo = {
    profileNameSelector: '.profile__title',
    profileJobSelector: '.profile__subtitle'
  };



export {
    initialCards,
    openEditBtn,
    popupAddBtn,
    formClassList,
    formAddPopup,
    formEditPopup,
    formProfileInfo,
    
};





/*

const groupsContainer = document.querySelector(".groups");

*/