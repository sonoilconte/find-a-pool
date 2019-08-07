function renderTags(poolDiv, element){
  // append event data to events div
  for (let i = 0; i < element.tags.length; i++){
    // console.log('Rendering tag ', element.tags[i]);
    $(poolDiv).find('.pool-tags').append(`<button type="button" class="btn btn-info btn-sm">
    <span class="glyphicon glyphicon-tag" aria-hidden="true"></span>` + element.tags[i] + " </button>" + `<span> </span>`);
  }
}
