export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleClickClose = (evt) => {
        const isOverlay = evt.target.classList.contains('popup');
        const isCloseBtn = evt.target.classList.contains('popup__close');
        if (isOverlay || isCloseBtn) {
            this.close();
        }
    }

    _removeEventListeners() {
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('click', this._handleClickClose);
    }

    open() {
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
    }



    close() {
        this._popup.classList.remove('popup_opened');
        this._removeEventListeners();
    }

    setEventListeners() {
        document.addEventListener('click', this._handleClickClose);
        document.addEventListener('keydown', this._handleEscClose);
    }
}
