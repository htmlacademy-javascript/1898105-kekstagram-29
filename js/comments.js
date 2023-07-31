const pictureCommentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const renderComments = (comments) => {
  const fragmentComments = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentPictureClone = commentTemplate.cloneNode(true);
    const commentAvatar = commentPictureClone.querySelector('.social__picture');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentPictureClone.querySelector('.social__text').textContent = comment.message;
    fragmentComments.append(commentPictureClone);

  });

  pictureCommentsList.append(fragmentComments);

};

export {renderComments};
