import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._link = this._popup.querySelector('.popup__picture');
        this._name = this._popup.querySelector('.popup__picture-description');
    }

    open = (cardsData) => {
        this._link.src = cardsData.link;
        this._link.alt = cardsData.name;
        this._name.textContent = cardsData.name;
        super.open();
    }

}

