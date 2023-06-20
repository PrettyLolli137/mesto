import './index.css';
import {
    initialCards,
    openEditBtn,
    popupAddBtn,
    formClassList,
    formAddPopup,
    formEditPopup,
    formProfileInfo,
    templateSelector

} from "../scripts/utils/constants.js";

import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";

// Информация о пользователе
const userInfo = new UserInfo(formProfileInfo);


// Попап для фото
const popupImg = new PopupWithImage(".popup_type_img");

// Карточки на сайте
const section = new Section({
    items: initialCards,
    renderer: (element) => {
        const card = new Card(element, popupImg.open, templateSelector);
        return card.createCardElement();
    }
}, '.groups');

section.renderItems();

// Попап и форма для редактирования
const popupEdit = new PopupWithForm(".popup_type_edit", inputValues => {
    userInfo.setUserInfo(inputValues);
});

//Попап для формы с добавлением картинки
const popupAdd = new PopupWithForm(".popup_type_add", inputValues => {
    section.addNewItem(section.renderer(inputValues));
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
