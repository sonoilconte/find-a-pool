function renderTags(poolDiv, pool) {
  const poolTagsDiv = poolDiv.getElementsByClassName('pool-tags')[0];
  console.log({ poolTagsDiv });
  pool.tags.forEach((tag) => {
    console.log('Rendering tag ', tag);
    const poolTag = document.createElement('button');
    poolTag.type = 'button';
    poolTag.classList.add('btn', 'btn-info', 'btn-sm');
    poolTag.innerHTML =
      `<span class="glyphicon glyphicon-tag" aria-hidden="true"></span>
      ${tag}`;
    poolTagsDiv.appendChild(poolTag);
  });
}
