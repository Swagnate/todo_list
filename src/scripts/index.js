"use strict";

function createPost(title, textContent, textBtn) {
  let post = document.createElement("div");
  post.classList.add("post");

  let postTitle = document.createElement('h3');
  postTitle.classList.add("post__title");
  postTitle.textContent = title

  let text = document.createElement('p');
  text.classList.add("text");
  text.innerHTML = `
              ${textContent}
          `
  let postBtn = document.createElement("button")
  postBtn.classList.add("post__btn")
  postBtn.textContent = textBtn

  post.prepend(postBtn)
  post.prepend(text)
  post.prepend(postTitle)

  return post
}
const posts = []
for (let i = 0; i <= 8; i++) {
  let post = createPost(`Post #${i}`, "Lorem", "Click")
  posts.push(post)
}

for (let i = 1; i < posts.length; i++) {
  document.body.append(posts[i])
}

postBtn.addEventListener("click", createPost);