// НЕ ПОНИМАЮ ПОЧЕМУ popupDeleteCard НЕ АКТИВЕН, ВСЕ УЖЕ ПРОВЕРИЛ ЧЕРЕЗ КОНСОЛЬ, НЕ ПОНИМАЮ, ЕСЛИ РАБОТУ НЕ ПРИНИМАЮТ, ТО ХОТЯ БЫ ДАЙТЕ НАВОДКУ, ЧТО НЕ ТАК)

import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, submitFormFunction) {
        super(popupSelector);
        this._submitFormFunction = submitFormFunction;
        this._form = this._popup.querySelector('.popup__container');
        this._submitBtn = this._form.querySelector('.popup__button-save');
        this._defaultSubmitText = this._submitBtn.value;

   }


    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFormFunction({ card: this._card , cardId: this._cardId });
        });
    }

    renderLoading() {
        this._submitBtn.textContent = this._defaultSubmitText
    }

    open = ({ card, cardId }) => {
        super.open();
        this._card= card;
        this._cardId = cardId;
        }
    close() {
        super.close();
    }
}







/*
import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, submitFormFunction) {
        super(popupSelector);
        this._submitFormFunction = submitFormFunction;
        this._form = this._popup.querySelector('.popup__container');
        this._submitBtn = this._form.querySelector('.popup__button-save_type_delete');
        this._defaultSubmitText = this._submitBtn.textContent;

    }


    renderLoading(isLoading) {
        if (isLoading) {
            this._submitBtn.textContent = 'Удаление...';
        } else {
            this._submitBtn.textContent = this._defaultSubmitText;
        }
    }


    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFormFunction({ card: this._card, cardId: this._cardId });
        });
    }


    open = ({ card, cardId }) => {
        super.open();
        this._card = card;
        this._cardId = cardId;
    }

    close() {
        super.close();
    }
}
*/