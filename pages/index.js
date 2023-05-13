import { activateButton } from "./validate.js";
import { deactivateButton } from "./validate.js";


const openEditBtn = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_type_edit");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const popupName = document.querySelector(".popup__input_type_name");
const popupJob = document.querySelector(".popup__input_type_job");
const formEditPopup = document.querySelector(".popup__form_type_edit");
const formAddPopup = document.querySelector(".popup__form_type_add");
const popupImages = document.querySelector(".popup__picture");
const popupDescription = document.querySelector(".popup__picture-description");
const cardTemplate = document.getElementById("card-template");
const groupsContainer = document.querySelector(".groups");
const popupAddBtn = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_type_add");
const popupNameAdd = document.querySelector(".popup__input_type_text");
const popupLinkAdd = document.querySelector(".popup__input_type_link");
const popupImg = document.querySelector(".popup_type_img");

const popupList = document.querySelectorAll('.popup');



const handlePopupClose = (evt) => {
    const isOverlay = evt.target.classList.contains('popup');
    const isCloseBtn = evt.target.classList.contains('popup__close');
    if (isOverlay || isCloseBtn) {
        popupList.forEach(closePopup);
    }
};

const closePressTheEsc = (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
    }
    };

    const openPopup = (popup) => {
        popup.classList.add('popup_opened');
    }
    const closePopup = (popup) => {
        popup.classList.remove('popup_opened');
    }

popupList.forEach((popup) => {
    popup.addEventListener("click", handlePopupClose);
    document.addEventListener('keydown', closePressTheEsc);
})


const openEditForm = () => {
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
    activateButton(popupEdit.querySelector('.popup__button-save'), { inactiveButtonClass: 'popup__button-save-disabled' });
    openPopup(popupEdit);
}

const openAddForm = () => {
    formAddPopup.reset();
    deactivateButton(popupAdd.querySelector('.popup__button-save'), { inactiveButtonClass: 'popup__button-save-disabled' });
    openPopup(popupAdd);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closePopup(popupEdit);
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
};

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

    const openPopupImg = () => {
        popupDescription.textContent = cardsData.name;
        popupImages.src = cardsData.link;
        popupImages.alt = cardsData.name;
        openPopup(popupImg);
    }

    cardsImage.addEventListener('click', openPopupImg)

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

formEditPopup.addEventListener("submit", handleProfileFormSubmit);
openEditBtn.addEventListener("click", openEditForm);
formAddPopup.addEventListener("submit", handleAddFormSubmit);
popupAddBtn.addEventListener("click", openAddForm);



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

    const handleImgClick = (cardsData) => {
        cardsData.preventDefault();
        cardsData.name = popupDescription.textContent;
        cardsData.link = popupImages.src;
    };
popupImgForm.addEventListener("click", handleImgClick);
const popupCloseBtn = document.querySelector(".popup__close");





popupEdit.addEventListener("click", (evt) =>{
    closePopupOverlay(evt);
});
popupAdd.addEventListener("click", (evt) =>{
    closePopupOverlay(evt);
});
popupImg.addEventListener("click", (evt) =>{
    closePopupOverlay(evt);
});

const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 

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




    popupCloseBtn.addEventListener("click", () => closePopup(editPopup));
const popupCloseBtn = document.querySelector(".popup__close");


/*








*/






/* 
































































*/