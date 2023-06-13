import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormFunction) {
        super(popupSelector);
        this._submitFormFunction = submitFormFunction;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
    }

    getInputValue() {
        this._value = {};
        this._inputList.forEach(input => {
            this._value[input.name] = input.value;
        });
        return this._value;
    }

    setInputValue(inputInfo) {
        this._inputList.forEach(input => {
            input.value = inputInfo[input.name];
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitFormFunction);
    }

    close() {
        super.close();
        this._form.reset();
    }
}