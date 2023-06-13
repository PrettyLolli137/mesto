const initialCards = [
    {
        name: "Капибара отдыхает",
        link: "https://pbs.twimg.com/media/DuSVYaGVsAEOdMT?format=jpg&name=large",
    },
    {
        name: "Капибара зевает",
        link: "https://phonoteka.org/uploads/posts/2023-03/1679375631_phonoteka-org-p-zlaya-kapibara-oboi-vkontakte-47.jpg",
    },
    {
        name: "Капибара на интервью",
        link: "https://www.meme-arsenal.com/memes/316cc4c9ff41d2aa5e8d044c5454d100.jpg",
    },
    {
        name: "Капибара и друзья",
        link: "https://pbs.twimg.com/media/E3251qUWYAECU0D.jpg",
    },
    {
        name: "Капибара бешбармак",
        link: "https://pbs.twimg.com/media/Dc6xdk7XkAA9qvv?format=jpg&name=900x900",
    },
    {
        name: "Ok I pull up",
        link: "https://i.ytimg.com/vi/V36bCahm1nU/maxresdefault.jpg",
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