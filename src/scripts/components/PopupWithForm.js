import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormFunction) {
        super(popupSelector);
        this._submitFormFunction = submitFormFunction;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._submitBtn = this._form.querySelector('.popup__button-save');
        this._defaultSubmitText = this._submitBtn.value;
       this._handleSubmit = this._handleSubmit.bind(this);

    }
    _handleSubmit(evt) {
        evt.preventDefault();
        this._submitBtn.textContent = `${this._submitBtn.textContent}...`
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



    renderLoading() {
        this._submitBtn.textContent = this._defaultSubmitText
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

/*
   renderLoading(isLoading) {
        if (isLoading) {
            this._submitBtn.value = `${this._submitBtn.value}...`;
        } else {
            this._submitBtn.value = this._defaultSubmitText;
        }
    }





  _handleSubmit(evt) {
        evt.preventDefault();
        this.renderLoading(true);
        this._submitFormFunction(this._getInputValues());
        this.close();
    }






  setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleSubmit);
    }

    _removeEventListeners() {
        super._removeEventListeners();
        this._form.removeEventListener('submit', this._handleSubmit);
    }


  _handleSubmit(evt) {
        evt.preventDefault();
        this._submitFormFunction(this._getInputValues());
        this.close();
    }


        this._handleSubmit = this._handleSubmit.bind(this);

     _getInputValues() {
        const inputValues = {};
        this._inputList.forEach(input => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }
*/
/*
   renderLoading(isLoading) {
        if (isLoading) {
            this._submitBtn.value = `${this._submitBtn.value}...`;
        } else {
            this._submitBtn.value = this._defaultSubmitText;
        }
    }

import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormFunction) {
        super(popupSelector);
        this._submitFormFunction = submitFormFunction;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._submitBtn = this._form.querySelector('.popup__button-save');
        this._defaultSubmitText = this._submitBtn.value;
       this._handleSubmit = this._handleSubmit.bind(this);

    }
    _handleSubmit(evt) {
        evt.preventDefault();
        this._submitBtn.textContent = `${this._submitBtn.textContent}...`
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



    renderLoading() {
        this._submitBtn.textContent = this._defaultSubmitText
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



  _handleSubmit(evt) {
        evt.preventDefault();
        this.renderLoading(true);
        this._submitFormFunction(this._getInputValues());
        this.close();
    }






  setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleSubmit);
    }

    _removeEventListeners() {
        super._removeEventListeners();
        this._form.removeEventListener('submit', this._handleSubmit);
    }


  _handleSubmit(evt) {
        evt.preventDefault();
        this._submitFormFunction(this._getInputValues());
        this.close();
    }


        this._handleSubmit = this._handleSubmit.bind(this);

     _getInputValues() {
        const inputValues = {};
        this._inputList.forEach(input => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }
*/
