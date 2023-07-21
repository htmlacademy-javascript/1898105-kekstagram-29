import './form.js';
import { showAlert } from './util.js';
import { renderPictures } from './pictures';
import { getData } from './data.js';
getData()
  .then((pictures) => {
    renderPictures(pictures);
  })
  .catch(
    (err) => {
      showAlert(err.message, 'red');
    }
  );

