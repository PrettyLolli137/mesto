/* Поп-ап редактирования профиля */

const openPopupBtn = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup_type_edit");
const popupCloseBtn = document.querySelector(".popup__close");
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
    editPopup.classList.add("popup_opened");
}

function closePopupByClick(evt) {
    const isOverlay = evt.target.classList.contains("popup_type_edit");
    const isCloseBtn = evt.target.classList.contains("popup__close");
    if (isOverlay || isCloseBtn) {
        closePopup();
    }
}

function closePopup() {
    editPopup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closePopup();

}

openPopupBtn.addEventListener("click", openPopup);
popupCloseBtn.addEventListener("click", closePopup);
editPopup.addEventListener("click", closePopupByClick);
formElement.addEventListener("submit", handleProfileFormSubmit);
formSave.addEventListener("click", closePopupByClick);

/* 6 карточек, лайк и мусорка */

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

const cardTemplate = document.getElementById("card-template");
const groupsContainer = document.querySelector(".groups");

const createCardElement = (cardsData) => {
    const cardsElement = cardTemplate.content.querySelector(".groups__group").cloneNode(true);
    const cardsImage = cardsElement.querySelector(".groups__image");
    const cardsTitle = cardsElement.querySelector(".groups__text");
    const cardsDeleteBtn = cardsElement.querySelector(".groups__deletebtn");
    const cardsLikeBtn = cardsElement.querySelector(".groups__like");

    cardsTitle.textContent = cardsData.name;
    cardsImage.src = cardsData.link;
    cardsImage.alt = cardsData.name;

    const handleDelete = () => {
        cardsElement.remove();
    };

    const handleLike = (evt) => {
        evt.target.classList.toggle("groups__like_active");
    };

    function openPopupImg() {
        popupDescription.textContent = cardsData.name;
        popupImages.src = cardsData.link;
        cardsImage.alt = cardsData.name;
        popupImg.classList.add("popup_opened");
    }
    cardsImage.addEventListener("click", openPopupImg);
    cardsDeleteBtn.addEventListener("click", handleDelete);
    cardsLikeBtn.addEventListener("click", handleLike);
    return cardsElement;
};

const renderAddElement = (cardsElement) => {
    groupsContainer.prepend(cardsElement);
};

initialCards.forEach((cards) => {
    const element = createCardElement(cards);
    renderAddElement(element);
});

/* Поп ап для добавления картинок */

const popupAddBtn = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_type_add");
const popupAddForm = document.querySelector('.popup__form_type_add'); 
const popupNameAdd = document.querySelector(".popup__text");
const popupLinkAdd = document.querySelector(".popup__link");

function openPopupAdd() {
    popupAdd.classList.add("popup_opened");
}

function closePopupAddByClick(evt) {
    const isOverlay = evt.target.classList.contains("popup_type_add");
    const isCloseBtn = evt.target.classList.contains("popup__close");
    if (isOverlay || isCloseBtn) {
        closePopupAdd();
    }
}

function closePopupAdd() {
    popupAdd.classList.remove("popup_opened");
}

const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const name = popupNameAdd.value;
    const link = popupLinkAdd.value;

    const initialCards = {
        name,
        link,
    };
    renderAddElement(createCardElement(initialCards)); 
    closePopupAdd(popupAdd); 
    event.target.reset(event);
};

popupAddBtn.addEventListener("click", openPopupAdd);
popupCloseBtn.addEventListener("click", closePopupAdd);
popupAdd.addEventListener("click", closePopupAddByClick);
popupAddForm.addEventListener("submit", handleAddFormSubmit); 
formSave.addEventListener("click", closePopupAddByClick); 

/* Поп ап для фоток */

const popupImg = document.querySelector(".popup_type_img");
const popupImages = document.querySelector(".popup__picture");
const popupDescription = document.querySelector(".popup__picture-description");
const popupImgClose = document.querySelector(".popup__close");
const popupImgForm = document.querySelector(".popup__images-container");


function closePopupImgByClick(evt) {
    const isOverlay = evt.target.classList.contains("popup_type_img");
    const isCloseBtn = evt.target.classList.contains("popup__close");
    if (isOverlay || isCloseBtn) {
        closePopupImg();
    }
}

function closePopupImg() {
    popupImg.classList.remove("popup_opened");
}

const handleImgClick = (cardsData) => {
    cardsData.preventDefault();
    cardsData.name = popupDescription.textContent;
    cardsData.link = popupImages.src;
};

popupImgClose.addEventListener("click", closePopupImg);
popupImg.addEventListener("click", closePopupImgByClick);
popupImgForm.addEventListener("click", handleImgClick);







/*
const cardsImage = cardsElement.querySelector('.groups__image');
cardsImage.forEach((groupsImg)) => {
    groupImage.addEventListener('click', () => {
        popupImages.src = groupsImg.link;
        popupDescription.textContent = groupsImg.name;
    });
}

initialCards.forEach((cards) => {
    const element = createCardElement(cards);
    renderAddElement(element);
    
});


const renderAddElement = (cardsElement) => {
    groupsContainer.prepend(cardsElement)
}   
    popupImages.src = cardsData.link;
    popupDescription.textContent = cardsData.name;




    
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
*/


