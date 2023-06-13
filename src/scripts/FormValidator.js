export default class FormValidator {
    constructor(formElement, formClassList) {
        this._formElement = formElement;
        this._formSelector = formClassList.formSelector;
        this._inputSelector = formClassList.inputSelector;
        this._submitButtonSelector = formClassList.submitButtonSelector;
        this._inactiveButtonClass = formClassList.inactiveButtonClass;
        this._inputErrorClass = formClassList.inputErrorClass;
        this._errorClass = formClassList.errorClass;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }

    _activateError(inputElement, message) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = message;
        errorElement.classList.add(this._errorClass);
    }

    _resetError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._activateError(inputElement, inputElement.validationMessage);
        } else {
            this._resetError(inputElement);
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _deactivateButton() {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
    }

    _activateButton() {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._deactivateButton();
        } else {
            this._activateButton();
        }
    }

    _setEventListeners() {
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners();
    }

    resetValidation() {
        this._inputList.forEach((inputElement) => {
            this._resetError(inputElement);
        });
        this._deactivateButton();
    }
}






