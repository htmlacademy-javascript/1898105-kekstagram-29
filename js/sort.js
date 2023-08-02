import { renderGallery } from './renderGallery';
import { debounce } from './util';

const PICTURE__COUNT = 10;
const Sorting = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const CLASS__ACTIVE = 'img-filters__button--active';
const selectedFilter = document.querySelector('.img-filters');
const filterPictures = document.querySelector('.pictures');

const sortRandom = () => Math.random() - 0.5;
const sortByComments = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;
let currentSort = Sorting.DEFAULT;
let pictures = [];

const getSortPictures = () => {
  switch (currentSort) {
    case Sorting.RANDOM:
      return [...pictures].sort(sortRandom).slice(0, PICTURE__COUNT);
    case Sorting.DISCUSSED:
      return [...pictures].sort(sortByComments);
    default:
      return pictures;
  }
};

const debouncedRenderPictures = debounce(() => {
  filterPictures.querySelectorAll('.picture').forEach((element) => element.remove());
  renderGallery(getSortPictures());
});

selectedFilter.addEventListener('click', (evt) => {
  if (!evt.target.classList.contains('img-filters__button')) {
    return;
  }
  const clickedButton = evt.target;
  if (clickedButton.id === currentSort) {
    return;
  }
  selectedFilter
    .querySelector(`.${CLASS__ACTIVE}`)
    .classList.remove(CLASS__ACTIVE);
  clickedButton.classList.add(CLASS__ACTIVE);
  currentSort = clickedButton.id;
  debouncedRenderPictures();
});

const initialize = (loaderPictures) => {
  selectedFilter.classList.remove('img-filters--inactive');
  pictures = loaderPictures;
};

export { initialize, getSortPictures };
