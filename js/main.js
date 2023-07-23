import './form.js';
import { showAlert, debounce } from './util.js';
import { renderPictures } from './pictures.js';
import { getData } from './data.js';
import { init as initFilter, getSortPictures } from './sort.js';

// getData()
//   .then((pictures) => {
//     renderPictures(pictures);
//   })
//   .catch(
//     (err) => {
//       showAlert(err.message, 'red');
//     }
//   );

try {
  const data = await getData();
  const debouncerRenderPictures = debounce(renderPictures);
  initFilter(data, debouncerRenderPictures());
  renderPictures(getSortPictures());
} catch (err) {
  showAlert(err.message, 'red');
}


