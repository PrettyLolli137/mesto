import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormFunction) {
        super(popupSelector);
        this._submitFormFunction = submitFormFunction;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._handleSubmit = this._handleSubmit.bind(this);

    }

    _handleSubmit(evt) {
        evt.preventDefault();
        this._submitFormFunction(this._getInputValues());
        this.close();
    }

    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach(input => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    setInputValue(inputInfo) {
        this._inputList.forEach(input => {
            input.value = inputInfo[input.name];
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleSubmit);
    }

    _removeEventListeners() {
        super._removeEventListeners();
        this._form.removeEventListener('submit', this._handleSubmit);
    }

    close() {
        super.close();
        this._form.reset();
    }
}

