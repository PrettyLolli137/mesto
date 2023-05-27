class FormValidator {
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

  resetError() {
    this._inputList.forEach((inputElement) => {
      this._resetError(inputElement);
    });
    this._deactivateButton();
  }
}



export { FormValidator };



























/*
//Показывает ошибку красным цветом и подчеркивает красным цветом строки валидации

const activateError = (formElement,inputElement, message, formClassList) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formClassList.inputErrorClass);
  errorElement.textContent = message;
  errorElement.classList.add(formClassList.errorClass);
};

//Убирает ошибки в валидации
const resetError = (formElement,inputElement, formClassList) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formClassList.inputErrorClass);
  errorElement.classList.remove(formClassList.errorClass);
  errorElement.textContent = '';
};

// Проверка инпутов на валидность при наборе символов 
const checkInputValidity = (formElement, inputElement, formClassList) => {
  if (!inputElement.validity.valid) {
    activateError(formElement, inputElement, inputElement.validationMessage,formClassList);
  } else {
    resetError(formElement, inputElement, formClassList);
  }
};

const hasInvalidInput = (inputList) => { 
  return inputList.some((inputElement) => { 
    return !inputElement.validity.valid; 
  });
};
const deactivateButton = (buttonElement, formClassList) => {
  buttonElement.classList.add(formClassList.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

const activateButton = (buttonElement, formClassList) => {
  buttonElement.classList.remove(formClassList.inactiveButtonClass);
  buttonElement.removeAttribute('disabled', true);
}

//Блок кнопки
const toggleButtonState = (inputList, buttonElement, formClassList) => {
  if (hasInvalidInput(inputList)) { 
    deactivateButton(buttonElement, formClassList);
  } else {
    activateButton(buttonElement, formClassList);
  }
}

// Слушатель на все инпуты для проверки полей и активации кнопки
const setEventListeners = (formElement, formClassList) => { 
  const inputList = Array.from(formElement.querySelectorAll(formClassList.inputSelector));
  const buttonElement = formElement.querySelector(formClassList.submitButtonSelector);
  
  toggleButtonState(inputList, buttonElement, formClassList);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, formClassList);
      toggleButtonState(inputList, buttonElement, formClassList);
    });
  });
};


const enableValidation = (formClassList) => { 
    const formList = Array.from(document.querySelectorAll(formClassList.formSelector)); 
    formList.forEach((formElement) => {  
      setEventListeners(formElement, formClassList); 
    }); 
  }; 


  enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save-disabled',
  inputErrorClass: 'popup__input_valid_error',
  errorClass: 'popup__error_visible'
});


export { activateButton };
export { deactivateButton };


*/
