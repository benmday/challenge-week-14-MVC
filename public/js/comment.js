const commentDiv = document.querySelector('#comment-div');

commentDiv.style.display = 'none';

const showDiv = async (e) => {
  e.preventDefault();

  commentDiv.style.display = 'block';
};

const postComment = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment-contents').value.trim();

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    console.log(id);

    const response = await fetch(`/api/blog/${id}`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace(`/blog/${id}`)
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#comment-btn').addEventListener('click', showDiv);

document.querySelector('#post-btn').addEventListener('click', postComment);
