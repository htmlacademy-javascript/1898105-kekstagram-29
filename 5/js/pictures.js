const picturesContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('a');

const renderPicture = (picture) => {
  const element = template.cloneNode(true);

  element.querySelector('img').src = picture.url;
  element.querySelector('.picture__comments').textContent = picture.comments.length;
  element.querySelector('.picture__likes').textContent = picture.likes;
  element.querySelector('img').alt = picture.description;

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
