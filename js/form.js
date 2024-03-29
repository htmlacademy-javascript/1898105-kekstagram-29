import { isEscapeKey } from './util.js';
import { sendData } from './data.js';
import { resetScale } from './scale.js';
import { resetEffects } from './filters.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';

const MAX_HASHTAGE_COUNT = 5;
const FILE_TYPES = ['png', 'jpg', 'jpeg'];
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const body = document.querySelector('body');
const buttonUpload = document.querySelector('.img-upload__input');
const overlayImg = document.querySelector('.img-upload__overlay');
const closeButtonImg = document.querySelector('.img-upload__cancel');
const imgForm = document.querySelector('.img-upload__form');
const photoPreview = imgForm.querySelector('.img-upload__preview img');
const inputHash = imgForm.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const publishButton = document.querySelector('.img-upload__submit');
const effectsPreviews = imgForm.querySelectorAll('.effects__preview');
const hideOverlayImg = () => {
  overlayImg.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const PublishButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const pristine = new Pristine(imgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const blockPublishButton = () => {
  publishButton.disabled = true;
  publishButton.textContent = PublishButtonText.SENDING;
};

const unblockPublishButton = () => {
  publishButton.disabled = false;
  publishButton.textContent = PublishButtonText.IDLE;
};

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const validateHashTag = (value) => normalizeTags(value).every((tag) => VALID_HASHTAG.test(tag));

const validateHashCount = (value) => normalizeTags(value).length <= MAX_HASHTAGE_COUNT;

const validateuUniqueHash = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

pristine.addValidator(
  inputHash, validateHashCount, 'Много хештегов',
  3,
  true
);

pristine.addValidator(
  inputHash, validateuUniqueHash, 'Не уникальный хештег',
  1,
  true
);

pristine.addValidator(
  inputHash, validateHashTag, 'Не правильный хештег',
  2,
  true
);

const setUserFormSubmit = (onSuccess) => {
  imgForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockPublishButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(() => {
          showErrorMessage();
        })
        .finally(unblockPublishButton);
    }
  });
};

const onCloseButtonImgEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideOverlayImg();
    resetEffects();
    resetScale();
    imgForm.reset();
    pristine.reset();
  }
};

const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it) => fileName.endsWith(it));
};

const onUploadButtonChange = () => {
  const file = buttonUpload.files[0];

  if (file && isValidType(file)) {
    photoPreview.src = URL.createObjectURL(file);
    effectsPreviews.forEach((preview) => {
      preview.style.backgroundImage = `url('${photoPreview.src}')`;
    });
  }
  overlayImg.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onCloseButtonImgEscKeyDown);
};

const onCloseButtonImgClick = () => {
  showSuccessMessage();
  hideOverlayImg();
  resetEffects();
  resetScale();
  imgForm.reset();
  pristine.reset();
  document.removeEventListener('keydown', onCloseButtonImgEscKeyDown);
};

const onTextFocusEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const onInputHashFocusEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

buttonUpload.addEventListener('change', onUploadButtonChange);
closeButtonImg.addEventListener('click', onCloseButtonImgClick);
textDescription.addEventListener('keydown', onTextFocusEscKeyDown);
inputHash.addEventListener('keydown', onInputHashFocusEscKeyDown);
setUserFormSubmit(onCloseButtonImgClick);
export {setUserFormSubmit};
