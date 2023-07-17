import './form.js';
import { showAlert } from './util.js';
import { renderPictures } from './pictures';
import { resetEffects } from './filters.js';
import { addPhotos } from './mock.js';
import { sendData, getData } from './data.js';
import { resetScale } from './scale.js';
resetScale();
resetEffects();
addPhotos();
sendData();
getData()
  .then((pictures) => {
    renderPictures(pictures);
  })
  .catch(
    (err) => {
      showAlert(err.message, 'red');
    }
  );

