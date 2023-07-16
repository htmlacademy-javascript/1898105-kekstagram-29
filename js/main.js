import './form.js';
import {resetEffects} from './filters.js';
import {addPhotos} from './mock.js';
import {renderPictures} from './pictures.js';
import {resetScale} from './scale.js';
resetScale();
renderPictures(addPhotos());
resetEffects();

