const FormClassList = { 
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save-disabled',
  inputErrorClass: 'popup__form-invalid',
  errorClass: 'popup__input-error'
};

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

/* const formList = document.querySelectorAll(FormClassList.formSelector);
  formList.forEach((formElement) => {
    setEventListeners(formElement);
const inputList = Array.from(formElement.querySelectorAll(FormClassList.inputSelector));



const isValid = inputElement => inputElement.validity.valid;

const activateError = (errorElement, message) => {
  const formSelector = errorElement.closest(FormClassList.formSelector);
  formSelector.classList.add(FormClassList.inputErrorClass);
  errorElement.textContent = message;
};
  
const resetError = (errorElement) => {
  const formElement = errorElement.closest(FormClassList.formSelector);
  formElement.classList.remove(FormClassList.inputErrorClass);
  errorElement.textContent = '';
};

const handleValidate = () => {

  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);

inputList.forEach(inputElement =>{
  if(isValid(inputElement)){
    activateError(errorElement,inputElement.validationMessage);
    isFormValid = false;
  } else {
    resetError(errorElement);
  }
});
};

inputList.forEach(inputElement => {
  inputElement.addEventListener('input',handleValidate );
});


formElement.addEventListener('submit', evt => {
evt.preventDefault();

});

*/








/*
const FormClassList = { 
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__form__invalid',
  errorClass: 'popup__input__error'
};

const isValid = inputElement => inputElement.validity.valid;

const activateError = (errorElement, message) => {
  const formElement = errorElement.closest(FormClassList.formSelector);
  formElement.classList.add(FormClassList.inputErrorClass);
  errorElement.textContent = message;
};
  
const resetError = (errorElement) => {
  const formElement = errorElement.closest(FormClassList.formSelector);
  formElement.classList.remove(FormClassList.inputErrorClass);
  errorElement.textContent = '';
};

const submitButton = document.querySelector(FormClassList.submitButtonSelector);

submitButton.addEventListener('click', () => {
  const inputList = Array.from(document.querySelectorAll(FormClassList.inputSelector));
  inputList.forEach(inputElement =>{
    const errorElement = document.querySelector(`#error-${inputElement.id}`);
    if(isValid(inputElement)){
      activateError(errorElement,inputElement.validationMessage);
    } else {
      resetError(errorElement);
    }
  });
});
*/

/*

const FormClassList = { 
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__form__invalid',
  errorClass: 'popup__input__error'
};


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
  inputElement.classList.add(FormClassList.inputErrorClass);
  errorElement.classList.add(FormClassList.errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
  inputElement.classList.remove(FormClassList.inputErrorClass);
  errorElement.classList.remove(FormClassList.errorClass);
  errorElement.textContent = '';
};


const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
      hideInputError(formElement, inputElement);
  }
};


const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(FormClassList.inputSelector));
  const submitButtonElement = formElement.querySelector(FormClassList.submitButtonSelector);

  formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();

      inputList.forEach((inputElement) => {
          checkInputValidity(formElement, inputElement);
      });

      if (formElement.checkValidity()) {
          submitButtonElement.classList.remove(FormClassList.inactiveButtonClass);
      } else {
          submitButtonElement.classList.add(FormClassList.inactiveButtonClass);
      }
  });

  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
          checkInputValidity(formElement, inputElement);

          if (formElement.checkValidity()) {
              submitButtonElement.classList.remove(FormClassList.inactiveButtonClass);
          } else {
              submitButtonElement.classList.add(FormClassList.inactiveButtonClass);
          }
      });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(FormClassList.formSelector));
  formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
      });
      setEventListeners(formElement);
  });
};

enableValidation();
*/


/*
/*
const formPopup = document.querySelector('.popup__form');
const formPopupInput = formPopup.querySelector('.popup__input');
const formError = formPopup.querySelector(`#error-${formPopupInput.id}`);

const showInputError = (formElement,inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
  inputElement.classList.add('popup__error-message');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error-message_active');
};

const hideInputError = (formElement,inputElement) => {
    const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
  inputElement.classList.remove('popup__error-message');
  errorElement.classList.remove('popup__error-message_active');
  errorElement.textContent = '';
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
   inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
    });
  });
  };
    setEventListeners(formPopupInput);


const checkInputValidity = (formElement,inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement,);
  }
};


const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  };
  
  enableValidation();

formPopup.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formPopupInput.addEventListener('input', function () {
  checkInputValidity(formPopup,formPopupInput );
});




const activateError = (errorElement) => {

const formElement = errorElement.closet('.popup__form');

formElement.classList.add('.popup__form__invalid');
};

const resetError = (errorElement) => {
  const formElement = errorElement.closet('.popup__form');
  formElement.classList.remove('.popup__form__invalid');

}






const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.add(FormClassList.inputErrorClass);
    errorElement.classList.add(FormClassList.errorClass);
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.remove(FormClassList.inputErrorClass);
    errorElement.classList.remove(FormClassList.errorClass);
    errorElement.textContent = '';
};


const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.classList.add(config.errorClass);
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
};


const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else if (inputElement.hasAttribute('required') && inputElement.value.length === 0) {
        showInputError(formElement, inputElement, 'Это обязательное поле');
    } else {
        hideInputError(formElement, inputElement);
    }
};



const handleFormSubmit = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(FormClassList.inputSelector));
  let isValid = true;
  inputList.forEach((inputElement) => {
    if (!inputElement.validity.valid) {
      checkInputValidity(formElement, inputElement);
      isValid = false;
    }
  });
  if (isValid) {
    // form submission code
  }
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(FormClassList.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      handleFormSubmit(formElement);
    });
    setEventListeners(formElement);
  });
};






fdvdvbdbfbdfbbdfbbdfbdfbdfbdfbfdb



ВАРИНТ С ДОБАВЛЕНИЕМ ВТОРОГО ПОП АПА
    */
/*
const FormClassList = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

const formElement1 = document.querySelector('#form');
const formElement2 = document.querySelector('#form2');

const inputList1 = Array.from(formElement1.querySelectorAll(FormClassList.inputSelector));
const inputList2 = Array.from(formElement2.querySelectorAll(FormClassList.inputSelector));

const submitButton1 = formElement1.querySelector(FormClassList.submitButtonSelector);
const submitButton2 = formElement2.querySelector(FormClassList.submitButtonSelector);

const toggleButtonState = (formElement, submitButton) => {
  const inputList = Array.from(formElement.querySelectorAll(FormClassList.inputSelector));
  const isFormValid = inputList.every(isValid);
  
  if (isFormValid) {
    submitButton.classList.remove(FormClassList.inactiveButtonClass);
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.classList.add(FormClassList.inactiveButtonClass);
    submitButton.setAttribute('disabled', true);
  }
}

const handleFormSubmit = (evt) => {
  evt.preventDefault();
};

const setEventListeners = (formElement, submitButton) => {
  toggleButtonState(formElement, submitButton);
  
  formElement.addEventListener('input', () => {
    toggleButtonState(formElement, submitButton);
  });
  
  formElement.addEventListener('submit', handleFormSubmit);
}

setEventListeners(formElement1, submitButton1);
setEventListeners(formElement2, submitButton2);











новый вариант




const FormClassList = { 
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__form__invalid',
  errorClass: 'popup__input__error'
};

const isValid = inputElement => inputElement.validity.valid;

const activateError = (errorElement, message) => {
  const formElement = errorElement.closest(FormClassList.formSelector);
  formElement.classList.add(FormClassList.inputErrorClass);
  errorElement.textContent = message;
};
  
const resetError = (errorElement) => {
  const formElement = errorElement.closest(FormClassList.formSelector);
  formElement.classList.remove(FormClassList.inputErrorClass);
  errorElement.textContent = '';
};

const toggleButtonState = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(FormClassList.inputSelector));
  const submitButton = formElement.querySelector(FormClassList.submitButtonSelector);

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
  const inputList = Array.from(formElement.querySelectorAll(FormClassList.inputSelector));
  const submitButton = formElement.querySelector(FormClassList.submitButtonSelector);

  submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    inputList.forEach((inputElement) => {
      const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
      if (!isValid(inputElement)) {
        activateError(errorElement, inputElement.validationMessage);
      } else {
        resetError(errorElement);
      }
    });
  });

  formElement.addEventListener('input', () => {
    toggleButtonState(formElement);
  });
};

const formList = document.querySelectorAll(FormClassList.formSelector);
formList.forEach((formElement) => {
  setEventListeners(formElement);
});















старый вариант





const FormClassList = { 
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__form__invalid',
  errorClass: 'popup__input__error'
};

const isValid = inputElement => inputElement.validity.valid;

const submitButton = document.querySelector(FormClassList.submitButtonSelector);

const activateError = (errorElement, message) => {
  const formElement = errorElement.closest(FormClassList.formSelector);
  formElement.classList.add(FormClassList.inputErrorClass);
  errorElement.textContent = message;
};
  
const resetError = (errorElement) => {
  const formElement = errorElement.closest(FormClassList.formSelector);
  formElement.classList.remove(FormClassList.inputErrorClass);
  errorElement.textContent = '';
};

const toggleButtonState = () => {
  const inputList = Array.from(formElement.querySelectorAll(FormClassList.inputSelector));
  const isFormValid = inputList.every(isValid);
  if (isFormValid) {
    submitButton.classList.remove(FormClassList.inactiveButtonClass);
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.classList.add(FormClassList.inactiveButtonClass);
    submitButton.setAttribute('disabled', true);
  }
}


submitButton.addEventListener('click', () => {
  const formElement = document.querySelector(FormClassList.formSelector);
  const inputList = Array.from(formElement.querySelectorAll(FormClassList.inputSelector));

  inputList.forEach((inputElement) => {
const errorElement = document.querySelector(`#error-${inputElement.id}`);
  if(!isValid(inputElement)){
    activateError(errorElement,inputElement.validationMessage );
  } else {
    resetError(errorElement);
  }
});
});

formElement.addEventListener('input', toggleButtonState);








вввввввввввввввввввввввввввввввввввввввввввввввввв

const FormClassList = { 
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__form__invalid',
  errorClass: 'popup__input__error'
};

const isValid = inputElement => inputElement.validity.valid;

const activateError = (errorElement, message) => {
  const formElement = errorElement.closest(FormClassList.formSelector);
  formElement.classList.add(FormClassList.inputErrorClass);
  errorElement.textContent = message;
};
  
const resetError = (errorElement) => {
  const formElement = errorElement.closest(FormClassList.formSelector);
  formElement.classList.remove(FormClassList.inputErrorClass);
  errorElement.textContent = '';
};

const toggleButtonState = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(FormClassList.inputSelector));
  const submitButton = formElement.querySelector(FormClassList.submitButtonSelector);

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
    const inputList = Array.from(formElement.querySelectorAll(FormClassList.inputSelector));
    const submitButton = formElement.querySelector(FormClassList.submitButtonSelector);
  
    submitButton.addEventListener('submit', (evt) => {
      evt.preventDefault();
  
      inputList.forEach((inputElement) => {
        const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
        if (!isValid(inputElement)) {
          activateError(errorElement, inputElement.validationMessage);
        } else {
          resetError(errorElement);
        }
      });
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



