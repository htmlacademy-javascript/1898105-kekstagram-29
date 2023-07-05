import { isEscapeKey } from './util.js';
import { addComment } from './mock.js';


const modalBigPicture = document.querySelector('.big-picture');
const bigPictureImageContainer = document.querySelector('.big-picture__img');
const bigPictureImage = bigPictureImageContainer.querySelector('img');
const pictureCaption = document.querySelector('.social__caption');
const likesCount = document.querySelector('.likes-count');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const pictureCommentsCount = document.querySelector('.comments-count');
const pictureCommentsList = document.querySelector('.social__comments');


const createComments = () => {
  const commentPicture = document.querySelector('.social__comment');
  const commentPictureClone = commentPicture.cloneNode(true);
  const addCommentPicture = addComment();

  commentPictureClone.querySelector('.social__picture').src = addCommentPicture.avatar;
  commentPictureClone.querySelector('.social__picture').alt = addCommentPicture.name;
  commentPictureClone.querySelector('.social__text').textContent = addCommentPicture.message;
  pictureCommentsList.appendChild(commentPictureClone);

};

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
  const { url, likes, comments, description } = picture;

  modalBigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImage.src = url;
  pictureCaption.textContent = description;
  likesCount.textContent = likes;
  pictureCommentsCount.textContent = comments.length;

  createComments();

  bigPictureCancel.addEventListener('click', onCloseBigPictureClick);
  document.addEventListener('keydown', onBigPictureEscKeyDown);

};

export { showBigPicture };
