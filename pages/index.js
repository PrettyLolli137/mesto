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

function openPopup(popup) {
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    popup.classList.remove('popup_opened')
}

/* popup Edit  */

const popupEditOpen = () => {
    openPopup(editPopup)
}

const popupEditClose = () => {
    closePopup(editPopup);
}

function nameEdit () {
    popupName.value = profileName.textContent; 
    popupJob.value = profileJob.textContent; 
}

function closePopupByClick(evt) {
    const isOverlay = evt.target.classList.contains("popup_type_edit");
    const isCloseBtn = evt.target.classList.contains("popup__close");
    if (isOverlay || isCloseBtn) {
        closePopup(editPopup);
    }
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closePopup(editPopup);
    evt.target.reset(evt);

}
openPopupBtn.addEventListener("click", nameEdit);
editPopup.addEventListener("click", closePopupByClick);
formElement.addEventListener("submit", handleProfileFormSubmit);
formSave.addEventListener("click", closePopupByClick);
openPopupBtn.addEventListener("click", () => openPopup(editPopup));
popupCloseBtn.addEventListener("click", () => closePopup(editPopup));




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
    const popupImgClose = document.querySelector(".popup__close");
    const popupImages = document.querySelector(".popup__picture");
    const popupDescription = document.querySelector(".popup__picture-description");

    cardsTitle.textContent = cardsData.name;
    cardsImage.src = cardsData.link;
    cardsImage.alt = cardsData.name;

    const handleDelete = () => {
        cardsElement.remove();
    };

    const handleLike = (evt) => {
        evt.target.classList.toggle("groups__like_active");
    };


    const openPopupImg = () => {
        popupDescription.textContent = cardsData.name;
        popupImages.src = cardsData.link;
        openPopup(popupImg);
    }

    const closePopupImg = () => {
        closePopup(popupImg)
    }
    
    cardsImage.addEventListener('click', openPopupImg)
    popupImgClose.addEventListener('click', closePopupImg)

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
const popupAddClose = document.querySelector(".popup__close");

const openAddPopup = () => {
    openPopup(popupAdd)
}

const closeAddPopup = () => {
    closePopup(popupAdd)
} 

function closePopupAddByClick(evt) {
    const isOverlay = evt.target.classList.contains("popup_type_add");
    const isCloseBtn = evt.target.classList.contains("popup__close");
    if (isOverlay || isCloseBtn) {
        closePopup(popupAdd);
}
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
    closePopup(popupAdd);
    event.target.reset(event);
};

popupAdd.addEventListener("click", closePopupAddByClick);
popupAddForm.addEventListener("submit", handleAddFormSubmit); 
formSave.addEventListener("click", closePopupAddByClick); 
popupAddBtn.addEventListener("click", () => openPopup(popupAdd));
popupAddClose.addEventListener("click", () => closePopup(popupAdd));

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
        closePopup(popupImg);
    }
}
const handleImgClick = (cardsData) => {
    cardsData.preventDefault();
    cardsData.name = popupDescription.textContent;
    cardsData.link = popupImages.src;
};

popupImg.addEventListener("click", closePopupImgByClick);
popupImgForm.addEventListener("click", handleImgClick);









/* Обший поп ап */
/*

    const  openPopup = (popup) => {
        popupName.value = profileName.textContent; 
        popupJob.value = profileJob.textContent; 
        popup.classList.add('popup_opened');
    }
    const closePopup = (popup) => {
        popup.classList.remove('popup_opened');
    }
    
    /*Пытался сделать сделать открытие и у картинки таким же способом, но не получается сделать */

    






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

