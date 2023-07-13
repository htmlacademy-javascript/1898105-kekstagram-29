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

//Вариант из созвона

// import { isEscapeKey } from './util.js';
// import { renderComments } from './comments.js';

// const modalBigPicture = document.querySelector('.big-picture');
// const bigPictureImageContainer = document.querySelector('.big-picture__img');
// const bigPictureImage = bigPictureImageContainer.querySelector('img');
// const pictureCaption = document.querySelector('.social__caption');
// const likesCount = document.querySelector('.likes-count');
// const bigPictureCancel = document.querySelector('.big-picture__cancel');
// const buttonLoader = document.querySelector('.comments-loader');
// const commentCount = document.querySelector('.social__comment-count');

// let currentCommentAmount = 0;
// let onButtonLoaderClick = () => { };

// const closeModal = () => {
//   modalBigPicture.classList.add('hidden');
//   document.querySelector('.social__comments').textContent = '';
//   document.body.classList.remove('modal-open');

//   buttonLoader.removeEventListener('click', onButtonLoaderClick);
// };

// const onCloseBigPictureClick = closeModal;

// const onCloseBigPictureEscKeyDown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     closeModal();
//   }
// };

// const renderBigPicture = ({ url, description, likes }) => {
//   bigPictureImage.src = url;
//   pictureCaption.textContent = description;
//   likesCount.textContent = likes;
// };

// const showBigPicture = (picture) => {
//   buttonLoader.classList.remove('hidden');

//   renderBigPicture(picture);

//   const { comments } = picture;
//   const renderNextComment = () => {
//     let nextAmount = currentCommentAmount + 5;

//     const isAllBeShowed = comments.length <= nextAmount;

//     if (isAllBeShowed) {
//       nextAmount = comments.length;
//       buttonLoader.classList.add('hidden');
//     }

//     renderComments(comments.slice(0, nextAmount));
//     currentCommentAmount = nextAmount;
//     commentCount.textContent = `${nextAmount} из ${comments.length} комментариев`;
//   };

//   modalBigPicture.classList.remove('hidden');
//   document.body.classList.add('modal-open');

//   renderNextComment();

//   onButtonLoaderClick = renderNextComment;

//   buttonLoader.addEventListener('click', onButtonLoaderClick);
//   bigPictureCancel.addEventListener('click', onCloseBigPictureClick);
//   document.addEventListener('keydown', onCloseBigPictureEscKeyDown);
// };

// export { showBigPicture };

