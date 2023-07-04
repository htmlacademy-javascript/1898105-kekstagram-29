import { showBigPicture } from './big-picture.js';
const picturesContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('a');

const renderPicture = (picture) => {
  const {url, likes, comments, description} = picture;
  const element = template.cloneNode(true);

  element.querySelector('.picture__img').src = url;
  element.querySelector('.picture__img').alt = description;
  element.querySelector('.picture__comments').textContent = comments.length;
  element.querySelector('.picture__likes').textContent = likes;

  const onElementClick = (evt) => {
    evt.preventDefault();
    showBigPicture(picture);
  };

  element.addEventListener('click', onElementClick);

  return element;
};


const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    fragment.append(renderPicture(picture));
  });

  picturesContainer.append(fragment);
};

export {renderPictures};


