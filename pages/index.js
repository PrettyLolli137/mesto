const openPopupBtn = document.querySelector('.profile__edit-button_popup-open');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const popupName = document.querySelector('.popup__name');
const popupJob = document.querySelector('.popup__job');
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


/* openPopupBtn.onclick = () => alert('hello!');  1 вариант - это функция --->  () => alert('hello!') */

/*
function onclick () {
    alert('hello 3!');
}                                          2 вариант функции


openPopupBtn.addEventListener('click',onclick );
*/