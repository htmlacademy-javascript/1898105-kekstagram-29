import { isEscapeKey } from './util.js';

const modalBigPicture = document.querySelector('.big-picture');
const bigPictureImageContainer = document.querySelector('.big-picture__img');
const bigPictureImage = bigPictureImageContainer.querySelector('img');
const pictureCaption = document.querySelector('.social__caption');
const likesCount = document.querySelector('.social__likes');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const onCloseBigPictureClick = () => {
  modalBigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onBigPictureEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalBigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

const showBigPicture = (picture) => {
  const { url, likes, description } = picture;

  modalBigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImage.src = url;
  pictureCaption.textContent = description;
  likesCount.textContent = likes;

  bigPictureCancel.addEventListener('click', onCloseBigPictureClick);
  document.addEventListener('keydown', onBigPictureEscKeyDown);
};

export { showBigPicture };
