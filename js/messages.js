import { isEscapeKey } from './util.js';

const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

const onDocumentClick = (evt) => {
  if (!evt.target.closest('.success__inner') && !evt.target.closest('.error__inner')) {
    removeMessage();
  }
};

const onDocumentEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
    removeMessage();
  }
};
function removeMessage () {
  const messageElement = document.querySelector('.error') || document.querySelector('.success');
  document.body.removeChild(messageElement);
  document.removeEventListener('keydown', onDocumentEscKeyDown, true);
  document.removeEventListener('click', onDocumentClick);
}

const showMessage = (messageElement, closeButtonClass) => {
  document.body.append(messageElement);
  document.addEventListener('keydown', onDocumentEscKeyDown, true);
  document.addEventListener('click', onDocumentClick);
  messageElement.querySelector(closeButtonClass).addEventListener('click', removeMessage);
};

const showSuccessMessage = () => showMessage(successMessage, '.success__button');

const showErrorMessage = () => showMessage(errorMessage, '.error__button');

export {showSuccessMessage, showErrorMessage};
