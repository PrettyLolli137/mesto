const openPopupBtn = document.querySelector(".profile__edit-button_popup_opened");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__form-close-btn");
const popupSaveBtn = document.querySelector(".popup__form-button-save");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const popupName = document.querySelector(".popup__input_type_name");
const popupJob = document.querySelector(".popup__input_type_job");
const formElement = document.querySelector(".popup__container");

function openPopup() {
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
    popup.classList.add("popup_opened");

}

function closePopup(evt) {
    let isOverlay = evt.target.classList.contains("popup");
    let isCloseBtn = evt.target.classList.contains("popup__form-close-btn");
    if (isOverlay || isCloseBtn) {
        popup.classList.remove("popup_opened");
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closePopup();
}

openPopupBtn.addEventListener("click", openPopup);
popupCloseBtn.addEventListener("click", closePopup);
popup.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);






/* openPopupBtn.onclick = () => alert('hello!');  1 вариант - это функция --->  () => alert('hello!') */

/*
function onclick () {
    alert('hello 3!');
}                                          2 вариант функции


openPopupBtn.addEventListener('click',onclick );

const openPopupBtn = document.querySelector('.profile__edit-button_popup-open');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__form-close-btn');
const popupName = document.querySelector('.popup__form-input_input-name');
const popupJob = document.querySelector('.popup__form-input_input-job');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle')
const formElement = document.querySelector('.popup__container');

function togglePopup() {
popup.classList.toggle('popup_open');
popupName.value = profileName.textContent;
popupJob.value = profileJob.textContent;
}


function formSubmitHandler (evt) {
	evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
}


openPopupBtn.addEventListener('click',togglePopup );
popupCloseBtn.addEventListener('click',togglePopup );
formElement.addEventListener('submit', formSubmitHandler);


*/