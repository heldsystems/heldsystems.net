fetch('./posts/intro-to-rack-dressing.json')
  .then(res => res.json())
  .then(post => {
    const postList = document.getElementById('post-list');
    const el = document.createElement('div');
    el.innerHTML = `<h2><a href="post.html?slug=${post.slug}">${post.title}</a></h2><p>${post.excerpt}</p><small>${post.date}</small>`;
    postList.appendChild(el);
  });
