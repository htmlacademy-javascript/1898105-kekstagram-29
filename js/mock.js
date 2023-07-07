import { randomInteger } from './util.js';


const PHOTO_COUNT = 25;
const COMMENT_COUNT = 125;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const Likes = {
  MIN: 15,
  MAX: 200
};

const IdComment = {
  MIN: 1,
  MAX: 1000000
};

const Avatars = {
  MIN: 1,
  MAX: 6
};

const names = [
  'Иван',
  'Андрей',
  'Мария',
  'Николай',
  'Елена',
  'Ольга',
  'Фигаро'
];

const description = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5'
];


/** Создаёт один комментарий*/
// const addComment = () => ({
//   id: randomInteger(IdComment.MIN, IdComment.MAX),
//   avatar: `img/avatar-${randomInteger(Avatars.MIN, Avatars.MAX)}.svg`,
//   message: MESSAGES[randomInteger(0, MESSAGES.length - 1)],
//   name: names[randomInteger(0, names.length - 1)]
// });

const generateComments = () => {
  const comments = [];
  for (let i = 1; i < randomInteger(0, COMMENT_COUNT); i++) {
    comments.push({
      id: randomInteger(IdComment.MIN, IdComment.MAX),
      avatar: `img/avatar-${randomInteger(Avatars.MIN, Avatars.MAX)}.svg`,
      message: MESSAGES[randomInteger(0, MESSAGES.length - 1)],
      name: names[randomInteger(0, names.length - 1)]
    });
  }
  return comments;
};

/** Создаёт одно фото*/
// const addPhoto = (id) => ({
//   id,
//   url: `photos/${id}.jpg`,
//   description: description[randomInteger(0, description.length - 1)],
//   likes: randomInteger(Likes.MIN, Likes.MAX),
//   comments: Array.from(
//     { length: randomInteger(0, COMMENT_COUNT) },
//     addComment,
//   ),
// });

const addPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: description[randomInteger(0, description.length - 1)],
  likes: randomInteger(Likes.MIN, Likes.MAX),
  comments: generateComments(),
});

/** Добавляет фото в массив*/
const addPhotos = () => {
  const photos = [];
  for (let i = 1; i <= PHOTO_COUNT; i++) {
    photos.push(addPhoto(i));
  }

  return photos;
};


export { addPhotos };
export { generateComments };
export { addPhoto };

