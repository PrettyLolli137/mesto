// НЕ ПОНИМАЮ ПОЧЕМУ popupDeleteCard НЕ АКТИВЕН, ВСЕ УЖЕ ПРОВЕРИЛ ЧЕРЕЗ КОНСОЛЬ, НЕ ПОНИМАЮ, ЕСЛИ РАБОТУ НЕ ПРИНИМАЮТ, ТО ХОТЯ БЫ ДАЙТЕ НАВОДКУ, ЧТО НЕ ТАК)


import './index.css';
import {
    // initialCards,
    openEditBtn,
    popupAddBtn,
    formClassList,
    formAddPopup,
    formEditPopup,
    formProfileInfo,
    // templateSelector,
    popupAvatarBtn,
    formAvatar
}  from "../scripts/utils/constants.js";


import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import Api from '../scripts/components/Api';
import PopupDeleteCard from '../scripts/components/PopupDeleteCard';



const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
    headers: {
        authorization: '306be11b-c38b-4424-b7d8-096b26b89e4b',
        'Content-Type': 'application/json'
    }
});

// Информация о пользователе
const userInfo = new UserInfo(formProfileInfo);


// Попап для фото
const popupImg = new PopupWithImage(".popup_type_img");



function createNewCard(element) {
    const card = new Card(element, popupImg.open,popupDeleteCard.open, (like, cardId) => {
        if (like.classList.contains('groups__like_active')) {
            api.likeCard(cardId)
                .then(res => { card.toggleLike(res.likes) })
                .catch(err => console.log(`Что-то пошло не так: ${err}`));
        } else {
            api.unlikeCard(cardId)
                .then(res => { card.toggleLike(res.likes) })
                .catch(err => console.log(`Что-то пошло не так: ${err}`));
        }
    });
    return card.createCardElement();
}

// Отрисовка карточек
const section = new Section((element) => {
    section.addItem(createNewCard(element));
}, '.groups');
// Создаем экземпляр класса PopupWithForm для попапа редактирования профиля


const popupDeleteCard = new PopupDeleteCard('.popup_type_delete', ({ card, cardId }) => { 
    api.deleteCard(cardId)
    .then(() => {
        card.removeCard();
        popupDeleteCard.close();
      })
        .catch(err => console.log(`Что-то пошло не так: ${err}`))
        .finally(() => popupDeleteCard.renderLoading());
});

const popupEdit = new PopupWithForm(".popup_type_edit", (data) => {
    api.setUserInfo(data)
        .then(res => {
            userInfo.setUserInfo({
                username: res.name,
                job: res.about,
                avatar: res.avatar

            });
            console.log(res);
            popupEdit.close();
        })
        .catch(err => console.log(`Ошибка: ${err}`))
        .finally(() => popupEdit.renderLoading());
});
const popupAvatar = new PopupWithForm(".popup_type_edit-avatar", (data) => {
    api.updateUserAvatar(data)
        .then(res => {
            userInfo.setUserInfo({
                username: res.name,
                job: res.about,
                avatar: res.avatar
            });
            popupAvatar.close();
        })
        .catch(err => console.log(`Что-то пошло не так: ${err}`))
        .finally(() => popupAvatar.renderLoading());

});


const popupAdd = new PopupWithForm('.popup_type_add', (inputValues) => {
    api.addCard(inputValues)
        .then((res) => {
            res.myId = res.owner._id;
            section.addNewItem(createNewCard(res));
            popupAdd.close();
        })
        .catch(err => console.log(`Ошибка: ${err}`))
        .finally(() => popupAdd.renderLoading());
});




const formProfileValidator = new FormValidator(formEditPopup, formClassList);
formProfileValidator.enableValidation();

const formAddValidator = new FormValidator(formAddPopup, formClassList);
formAddValidator.enableValidation();

const formAvatarValidator = new FormValidator(formAvatar, formClassList);
formAvatarValidator.enableValidation();

popupImg.setEventListeners();
popupEdit.setEventListeners();
popupAdd.setEventListeners();
popupAvatar.setEventListeners();
popupDeleteCard.setEventListeners();
// Слушатели для открытия форм


popupAddBtn.addEventListener('click', () => {
    formAddValidator.resetValidation();
    popupAdd.open();
});

openEditBtn.addEventListener('click', () => {
    formProfileValidator.resetValidation();
    popupEdit.setInputValue(userInfo.getUserInfo());
    popupEdit.open();
});

popupAvatarBtn.addEventListener('click', () => {
    formAddValidator.resetValidation();
    popupAvatar.open();
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([resData, resCardInfo]) => {
        resCardInfo.forEach(element => element.myId = resData._id);

        userInfo.setUserInfo({
            username: resData.name,
            job: resData.job,
            avatar: resData.avatar
        });

        section.renderItems(resCardInfo);
    })
    .catch(err => console.log(`Что-то пошло не так: ${err}`));


/*
const popupAvatar = new PopupWithForm(".popup_type_edit-avatar", inputValues => {
    userInfo.setUserInfo(inputValues);

});

popupAvatarBtn.addEventListener('click', () => {
    formAddValidator.resetValidation();
    popupAvatar.open();
});

const formAvatarValidator = new FormValidator(formAvatar, formClassList);
formAvatarValidator.enableValidation();


const popupAdd = new PopupWithForm('.popup_type_add', (inputValues) => {
    popupAdd.renderLoading(true);
    api.addCard(inputValues)
        .then((res) => {
            res.myId = res.owner._id;
            section.addNewItem(createCardElement(res));
            popupAdd.close();
        })
        .catch(err => console.log(`Ошибка: ${err}`))
        .finally(() => popupAdd.renderLoading(false));
});




const section = new Section({
    items: initialCards,
    renderer: (element) => {
        const card = new Card(element, popupImg.open, templateSelector);
        return card.createCardElement();
    }
}, '.groups');

section.renderItems();



const popupDeleteCard = new PopupDeleteCard('.popup_type_delete', ({ card, cardId }) => {
    popupDeleteCard.renderLoading(true);
    api.deleteCard(cardId)
        .then(() => {
            card.removeCard();
            popupDeleteCard.close();
        })
        .catch(err => console.log(`Что-то пошло не так: ${err}`))
        .finally(() => popupDeleteCard.renderLoading(false));
});









import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import Api from '../scripts/components/Api';
import PopupDeleteCard from '../scripts/components/PopupDeleteCard';






   if (like.classList.contains('groups__like_active')) {
            api.unlikeCard(cardId)
                .then(res => { card.toggleLike(res.likes) })
                .catch(err => console.log(`Что-то пошло не так: ${err}`));
        } else {
            api.likeCard(cardId)
                .then(res => { card.toggleLike(res.likes) })
                .catch(err => console.log(`Что-то пошло не так: ${err}`));
        }











import './index.css';
import {
    // initialCards,
    openEditBtn,
    popupAddBtn,
    formClassList,
    formAddPopup,
    formEditPopup,
    formProfileInfo,
    // templateSelector,
    popupAvatarBtn,
    formAvatar
}  from "../scripts/utils/constants.js";

import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import Api from '../scripts/components/Api';
import PopupDeleteCard from '../scripts/components/PopupDeleteCard';



const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
    headers: {
        authorization: '306be11b-c38b-4424-b7d8-096b26b89e4b',
        'Content-Type': 'application/json'
    }
});

// Информация о пользователе
const userInfo = new UserInfo(formProfileInfo);


// Попап для фото
const popupImg = new PopupWithImage(".popup_type_img");

function createNewCard(element) {
    const card = new Card(element, popupImg.open,popupDeleteCard.open, (like, cardId) => {
        if (like.classList.contains('groups__like_active')) {
            api.likeCard(cardId)
                .then(res => { card.toggleLike(res.likes) })
                .catch(err => console.log(`Что-то пошло не так: ${err}`));
        } else {
            api.unlikeCard(cardId)
                .then(res => { card.toggleLike(res.likes) })
                .catch(err => console.log(`Что-то пошло не так: ${err}`));
        }
    });
    return card.createCardElement();
}

// Отрисовка карточек
const section = new Section((element) => {
    section.addItem(createNewCard(element));
}, '.groups');
// Создаем экземпляр класса PopupWithForm для попапа редактирования профиля

/*
// Попап и форма для редактирования
const popupEdit = new PopupWithForm(".popup_type_edit", inputValues => {
    userInfo.setUserInfo(inputValues);
});
*/











/*
//Попап для формы с добавлением картинки
const popupAdd = new PopupWithForm(".popup_type_add", inputValues => {
    section.addNewItem(section.renderer(inputValues));
});
*/

/*

popupImg.setEventListeners();
popupEdit.setEventListeners();
popupAdd.setEventListeners();
popupAvatar.setEventListeners();
popupDeleteCard.setEventListeners();
// Слушатели для открытия форм


popupAddBtn.addEventListener('click', () => {
    formAddValidator.resetValidation();
    popupAdd.open();
});

openEditBtn.addEventListener('click', () => {
    formProfileValidator.resetValidation();
    popupEdit.setInputValue(userInfo.getUserInfo());
    popupEdit.open();
});

popupAvatarBtn.addEventListener('click', () => {
    formAddValidator.resetValidation();
    popupAvatar.open();
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([resDataUser, resCardInfo]) => {
        resCardInfo.forEach(element => element.myId = resDataUser._id);

        userInfo.setUserInfo({
            username: resDataUser.name,
            job: resDataUser.job,
            avatar: resDataUser.avatar
        });

        section.renderItems(resCardInfo);
    })
    .catch(err => console.log(`Что-то пошло не так: ${err}`));




















*/