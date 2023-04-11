const openPopupBtn = document.querySelector('.profile__edit-button_popup-open');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__form-close-btn');
const popupSaveBtn = document.querySelector('.popup__form-button-save');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const popupName = document.querySelector ('.popup__form-input_input-name');
const popupJob = document.querySelector ('.popup__form-input_input-job');
const formElement = document.querySelector('.popup__content');


function openPopup() {
popup.classList.add('popup_open');

let getProfileName = document.querySelector('profile__title').textContent;
let getProfileJob = document.querySelector('profile__subtitle').textContent;

let popupName = document.querySelector('popup__form-input_input-name').value = getProfileName;
let popupJob = document.querySelector('popup__form-input_input-job').value = getProfileJob;

console.log();
}




function closePopup (evt) {
let isOverlay= evt.target.classList.contains('popup');
let isCloseBtn = evt.target.classList.contains('popup__form-close-btn');
console.log();
if (isOverlay || isCloseBtn) {
    popup.classList.remove('popup_open');
}
}

openPopupBtn.addEventListener('click',openPopup );
popupCloseBtn.addEventListener('click',closePopup );
popup.addEventListener('click', closePopup);


function formSubmitHandler (evt) {
	evt.preventDefault();
    popupName = document.querySelector('popup__form-input_input-name').value;
    popupJob = document.querySelector('popup__form-input_input-job').value;


let putProfileName = document.querySelector('profile__title');
let putProfileJob = document.querySelector('profile__subtitle');

putProfileName.textContent = popupName;
putProfileJob.textContent = popupJob;

popupCloseBtn()

}



formElement.addEventListener('submit',formSubmitHandler);






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