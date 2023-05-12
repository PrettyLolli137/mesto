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
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
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



/* 

const FormClassList = { 
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save-disabled',
  inputErrorClass: 'popup__form-invalid',
  errorClass: 'popup__input-error'
};
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);

const isValid = inputElement => inputElement.validity.valid;

const activateError = (errorElement, message) => {
  const formElement = errorElement.closest(FormClassList.formSelector);
  formElement.classList.add(FormClassList.inputErrorClass);
  errorElement.classList.add(FormClassList.errorClass);

  errorElement.textContent = message;
};
  
const resetError = (errorElement) => {
  const formElement = errorElement.closest(FormClassList.formSelector);
  formElement.classList.remove(FormClassList.inputErrorClass);
  errorElement.classList.remove(FormClassList.errorClass);
  errorElement.textContent = '';
};

const toggleButtonState = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(FormClassList.inputSelector));
  const submitButton = formElement.querySelector(FormClassList.submitButtonSelector);
  
  inputList.forEach((inputElement) => {
    const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
    if (!isValid(inputElement)) {
      activateError(errorElement, inputElement.validationMessage);
    } else {
      resetError(errorElement);
    }
  });
  const isFormValid = inputList.every(isValid);
  if (isFormValid) {
    submitButton.classList.remove(FormClassList.inactiveButtonClass);
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.classList.add(FormClassList.inactiveButtonClass);
    submitButton.setAttribute('disabled', true);
  }

}

const setEventListeners = (formElement) => {
  const submitButton = formElement.querySelector(FormClassList.submitButtonSelector);

  submitButton.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  formElement.addEventListener('input', () => {
    toggleButtonState(formElement);
  });
};

  const formList = document.querySelectorAll(FormClassList.formSelector);
formList.forEach((formElement) => {
  setEventListeners(formElement);
});



*/



