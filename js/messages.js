import { isEscapeKey } from './util.js';

const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

const messageRemove = () => {
  const messageElement = document.querySelector('.error') || document.querySelector('.success');
  document.body.removeChild(messageElement);
  document.removeEventListener('keydown', documentEscapeHandler, true);
  document.removeEventListener('click', documentClickHandler);
};

function documentEscapeHandler (evt) {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
    messageRemove();
  }
}

function documentClickHandler (evt) {
  if (!evt.target.closest('.success__inner') && !evt.target.closest('.error__inner')) {
    messageRemove();
  }
}

const showMessage = (messageElement, closeButtonClass) => {
  document.body.append(messageElement);
  document.addEventListener('keydown', documentEscapeHandler, true);
  document.addEventListener('click', documentClickHandler);
  messageElement.querySelector(closeButtonClass).addEventListener('click', messageRemove);
};

const showSuccessMessage = () => showMessage(successMessage, '.success__button');

const showErrorMessage = () => showMessage(errorMessage, '.error__button');

export {showSuccessMessage, showErrorMessage};
