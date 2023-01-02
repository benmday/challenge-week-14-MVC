const comment = async (e) => {
  e.preventDefault();

  const commentField = document.createElement('div');
  const writeComment = document.createElement('p');
  const textBox = document.createElement('input');
  const postBtn = document.createElement('button');
  const commentBtn = document.getElementById('comment-btn');

  writeComment.textContent = 'Write a comment:';
  textBox.setAttribute('type', 'text').setAttribute('id', 'comment-text');
  postBtn.innerHTML = 'Post';

  commentField.appendChild(writeComment);
  commentField.appendChild(textBox);
  commentField.appendChild(postBtn);

  commentBtn.appendChild(commentField);
};

document.querySelector('#comment-btn').addEventListener('click', comment);
