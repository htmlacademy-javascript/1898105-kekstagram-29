import { isEscapeKey } from './util.js';
const MAX_HASHTAGE_COUNT = 5;
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const body = document.querySelector('body');
const buttonUpload = document.querySelector('.img-upload__input ');
const overlayImg = document.querySelector('.img-upload__overlay');
const closeButtonImg = document.querySelector('.img-upload__cancel');
const imgForm = document.querySelector('.img-upload__form');
const inputHash = imgForm.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const pristine = new Pristine(imgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const normaliseTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const validHashTag = (value) => normaliseTags(value).every((tag) => VALID_HASHTAG.test(tag));

const validHashCount = (value) => normaliseTags(value).length <= MAX_HASHTAGE_COUNT;

const validateuUniqueHash = (value) => {
  const lowerCaseTags = normaliseTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set (lowerCaseTags).size;
};

pristine.addValidator(
  inputHash, validHashCount, 'Много хештегов',
  3,
  true
);

pristine.addValidator(
  inputHash, validateuUniqueHash, 'Не уникальный хештег',
  1,
  true
);

pristine.addValidator(
  inputHash, validHashTag, 'Не правильный хештег',
  2,
  true
);


imgForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const onCloseButtonImgEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    overlayImg.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

const onUploadButtonChange = () => {
  overlayImg.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onCloseButtonImgEscKeyDown);
};

const onCloseButtonImgClick = () => {
  overlayImg.classList.add('hidden');
  document.body.classList.remove('modal-open');
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
document.addEventListener('keydown', onCloseButtonImgEscKeyDown);
textDescription.addEventListener('keydown', onTextFocusEscKeyDown);
inputHash.addEventListener('keydown', onInputHashFocusEscKeyDown);
