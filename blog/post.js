const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get('slug');

fetch(`posts/${slug}.json`)
  .then(res => res.json())
  .then(post => {
    document.getElementById('title').innerText = post.title;
    document.getElementById('meta').innerText = `${post.date} | ${post.tags.join(', ')}`;
    document.getElementById('content').innerHTML = post.content;
  });
