const containerScale = document.querySelector('.scale');
const scaleField = document.querySelector('.scale__control--value');
const picture = document.querySelector('.img-upload__preview img');

const Value = {
  STEP: 25,
  MAX: 100,
  MIN: 25,
  DEFAULT: 100,
};

scaleField.value = `${Value.DEFAULT}%`;

const setScale = (scaleValue) => {
  picture.style.transform = `scale(${scaleValue / Value.DEFAULT})`;
  scaleField.value = `${scaleValue}%`;
};

const calculateScale = (scaleFactor) => {
  const currentScale = parseInt(scaleField.value, 10);
  const newScale = currentScale + Value.STEP * scaleFactor;
  if (newScale < Value.MIN || newScale > Value.MAX) {
    return;
  }
  setScale(newScale);
};

const onContainerScaleClick = (evt) => {
  if (evt.target.classList.contains('scale__control--smaller')) {
    calculateScale(-1);
  } else if (evt.target.classList.contains('scale__control--bigger')) {
    calculateScale(1);
  }
};

const resetScale = () => {
  setScale(Value.DEFAULT);
};

containerScale.addEventListener('click', onContainerScaleClick);

export { resetScale };
