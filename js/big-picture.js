import { isEscapeKey } from './util.js';
import { renderComments } from './comments.js';

const modalBigPicture = document.querySelector('.big-picture');
const bigPictureImageContainer = document.querySelector('.big-picture__img');
const bigPictureImage = bigPictureImageContainer.querySelector('img');
const pictureCaption = document.querySelector('.social__caption');
const likesCount = document.querySelector('.likes-count');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const pictureCommentsCount = document.querySelector('.comments-count');
const buttonLoader = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');

const onCloseBigPictureClick = () => {
  modalBigPicture.classList.add('hidden');
  document.querySelector('.social__comments').textContent = '';
  document.body.classList.remove('modal-open');
};

const onBigPictureEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalBigPicture.classList.add('hidden');
    document.querySelector('.social__comments').textContent = '';
    document.body.classList.remove('modal-open');
  }
};


const showBigPicture = (picture) => {
  buttonLoader.classList.remove('hidden');
  let pack = 5;
  const { url, likes, comments, description } = picture;
  if (comments.length <= pack) {
    pack = comments.length;
    buttonLoader.classList.add('hidden');
  }
  commentCount.textContent = `${pack} из ${comments.length} комментариев`;
  modalBigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImage.src = url;
  pictureCaption.textContent = description;
  likesCount.textContent = likes;
  pictureCommentsCount.textContent = comments.length;
  renderComments(comments.slice(0, pack));

  const onButtonLoaderClick = () => {
    buttonLoader.classList.remove('hidden');
    document.querySelector('.social__comments').textContent = '';
    pack = pack + 5;
    if (pack >= comments.length) {
      pack = comments.length;
      buttonLoader.classList.add('hidden');
    }
    renderComments(comments.slice(0, pack));
    commentCount.textContent = `${pack} из ${comments.length} комментариев`;
  };

  buttonLoader.addEventListener('click', onButtonLoaderClick);
  bigPictureCancel.addEventListener('click', onCloseBigPictureClick);
  document.addEventListener('keydown', onBigPictureEscKeyDown);
};

export { showBigPicture };
