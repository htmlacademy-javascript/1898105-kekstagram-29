const picturesContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('a');

const renderPicture = (picture) => {
  const element = template.cloneNode(true);
  const imageElement = element.querySelector('img');

  imageElement.src = picture.url;
  imageElement.alt = picture.description;
  element.querySelector('.picture__comments').textContent = picture.comments.length;
  element.querySelector('.picture__likes').textContent = picture.likes;

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
