export function searchFound(article) {
  const publishedDate = article.nextElementSibling;
  return `<div class="article-modal mt-40 border-bottom">
  <h4 class="heading mb-4 mt-5 mt-sm-0">
    ${article.innerText}
  </h4>
  <p class="mb-2 text-small">${publishedDate.innerText}</p>
  <p class="mb-2rem text-small">
    ${truncate(publishedDate.nextElementSibling.innerText, 80)}
  </p>
</div>`;
}

export function noSearchFound() {
  return `<div class="mt-40 text-white border-bottom">
      <p class="mb-2rem text-small">No Search found</p>
    </div>`;
}
