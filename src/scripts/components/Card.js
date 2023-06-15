export default class Card {
    constructor(cardsData, handleCardClick, templateSelector) {
        this._cardsData = cardsData;
        this._handleCardClick = handleCardClick;
        this._templateSelector = templateSelector


        this._cardsElement =
            document
                .querySelector(this._templateSelector)
                .content
                .querySelector('.groups__group')
                .cloneNode(true);
    }

    _handleDelete = () => {
        this._cardsElement.remove();
    };

    _handleLike = () => {
        this._cardsLikeBtn.classList.toggle("groups__like_active");
    };

    _openImage = () => {
        this._handleCardClick(this._cardsData);
    }

    _setEventListener = () => {
        this._cardsDeleteBtn.addEventListener('click', this._handleDelete);
        this._cardsLikeBtn.addEventListener('click', this._handleLike)
        this._cardsImage.addEventListener('click', this._openImage)

    }


    createCardElement = () => {
        this._cardsImage = this._cardsElement.querySelector(".groups__image");
        this._cardsTitle = this._cardsElement.querySelector(".groups__text");
        this._cardsDeleteBtn = this._cardsElement.querySelector(".groups__deletebtn");
        this._cardsLikeBtn = this._cardsElement.querySelector(".groups__like");

        this._cardsTitle.textContent = this._cardsData.name;
        this._cardsImage.src = this._cardsData.link;
        this._cardsImage.alt = this._cardsData.name;
        this._setEventListener();
        return this._cardsElement;
    }
}


