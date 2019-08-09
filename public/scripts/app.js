$(document).ready(() => {
  indexPools();
  // Add pool event listener and ajax call
  const $poolForm = $('#add-pool form');
  // console.log('$poolForm', $poolForm);
  $poolForm.on('submit', (e) => {
    e.preventDefault();
    const data = $poolForm.serialize();
    $.ajax({
      method: 'POST',
      url: '/api/pools/',
      data: data,
      success: handleNewPoolSuccess,
      error: handleError
    });
    $poolForm.trigger('reset');
  });
  // Admin Log In to toggle admin controls in and out of view
  $('#admin').on('click', () => {
    toggleAdmin();
  });
});

//  Any time there's an ajax call, re-attach all the event listeners
//  Event listeners are removed at the end of each handleSuccess function
//  They are re-attached here when ajax calls are complete
//  This process is to ensure that the listeners are always applied to elements
//  added to the page (add pool, add event), but not applied multiple times
//  resulting in functions being run more times than intended

$(document).ajaxComplete(listenDeletePool);
$(document).ajaxComplete(listenAddEvent);
$(document).ajaxComplete(listenDeleteEvent);
$(document).ajaxComplete(listenDayClick);

function indexPools() {
  // Get index of all pools in the database
  $.ajax({
    method: 'GET',
    url: 'api/pools/',
    success: handleIndexSuccess,
    error: handleError
  });
}

function handleIndexSuccess(pools) {
  pools.forEach((pool) => {
    renderPool(pool);
  });
  // After indexing all the pools, hide admin and show only the current day
  hideAdmin();
  // For now this simply shows Monday (Later it will show the current day of week on which the site is visited)
  showCurrentDay();
}

function listenDeletePool() {
  $('.pool-delete-btn').on('click', function(e) {
    e.preventDefault();
    const id = $(this).closest('.pool').data('pool-id');
    $.ajax({
      method: 'DELETE',
      url: `/api/pools/${id}`,
      success: handlePoolDeleteSuccess,
      error: handleError
    });
  });
}

function listenAddEvent() {
  $('.add-event form').on('submit', function(e) {
    e.preventDefault();
    const $eventForm = $(this);
    const data = $eventForm.serialize();
    const id = $eventForm.closest('.pool').data('pool-id');
    $.ajax({
      method: 'POST',
      url: `/api/pools/${id}/events`,
      data,
      success: handleNewEventSuccess,
      error: handleError,
    });
    $eventForm.trigger('reset');
  });
}

// Event listener for deleting an event
function listenDeleteEvent() {
  $('.delete-event').on('click', function(e) {
    e.preventDefault();
    const eventId = $(this).closest('.event').data('event-id');
    const poolId = $(this).closest('.pool').data('pool-id');
    $.ajax({
      method: 'DELETE',
      url: `/api/pools/${poolId}/events/${eventId}`,
      success: handleEventDeleteSuccess,
      error: handleError
    });
  });
}

function handleNewPoolSuccess(newPool) {
  // TODO: Below I put in a quick fix where I simply reindex all the pools such that you see the new one with the maps ready
  // What I should do is a separate render of the new pool
  // where I injext that new pool's html into the dom without re-rendering everything
  // but it needs to include the google map
  // TODO: Use a renderMap function that will be called inside render pool
  // TODO: Then all you should have to do is call renderPool and renderEvent for each event
  indexPools();
  // renderPool(newPool);
  // // get the div for the pool where we'll put events
  // let poolDiv = `[data-pool-id=${newPool._id}]`;
  // newPool.events.forEach(function(element){
  //   renderEvent(poolDiv, element);
  // });
  // // remove event listeners such that adding event listeners accross page on ajax complete does not duplicate event listeners
  // removeEventListeners();
}

function handlePoolDeleteSuccess(deletedPool) {
  const poolDiv = `[data-pool-id=${deletedPool._id}]`;
  $(poolDiv).hide('slow', function() {
    $(poolDiv).remove;
  });
  removeEventListeners();
}

function handleNewEventSuccess(pool) {
  // Grad the poolDiv for the pool where the event should be placed
  const poolDiv = document.querySelectorAll(`[data-pool-id='${pool._id}']`)[0];
  // The event to inject into the DOM is the last event listed in the pool response
  const eventToAdd = pool.events[pool.events.length - 1];
  renderEvent(poolDiv, eventToAdd);
  removeEventListeners();
}

function handleEventDeleteSuccess(eventDeleted) {
  const $eventDeleted = $(`[data-event-id='${eventDeleted._id}']`);
  console.log({ $eventDeleted });
  $eventDeleted.hide('slow', function() {
    $eventDeleted.remove();
  });
  removeEventListeners();
}

function handleError(err) {
  console.log('error', err);
}

function listenDayClick() {
  // toggle events for a day of the week clicked
  $('.day-of-week').on('click', function(e){
    e.preventDefault();
    console.log('clicked a day of week div');
    $(this).next().toggle(200);
    // toggle the show and hide glyphicons
    $(this).find('.glyphicon').toggle();
  });
}

function toggleAdmin() {
  $('.pool-header button').toggle();
  $('.delete-event').toggle();
  $('#add-pool').toggle();
  $('.add-event').toggle();
}

function hideAdmin() {
  $('.pool-header button').hide();
  $('.delete-event').hide();
  $('#add-pool').hide();
  $('.add-event').hide();
}

function showCurrentDay() {
  $('.event-holder').hide();
  $('.monday .event-holder').show();
  $('.monday').find('.glyphicon-plus').toggle();
  $('.monday').find('.glyphicon-minus').toggle();
}

// remove event listeners such that adding event listeners accross whole page on ajax complete does not duplicate event listeners
function removeEventListeners() {
  $('.pool-delete-btn').off();
  $('.add-event form').off();
  $('.delete-event').off();
  $('.day-of-week').off();
}
