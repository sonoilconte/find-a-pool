function handleIndexSuccess(pools) {
  pools.forEach((pool) => {
    renderPool(pool);
  });
  // After rendering all the pools, hide admin buttons, forms, etc.
  hideAdmin();
  // For now this simply shows Monday (Later it will show the current day of week on which the site is visited)
  showCurrentDay();
}

function indexPools() {
  // Get index of all pools in the database
  $.ajax({
    method: 'GET',
    url: 'api/pools/',
    success: handleIndexSuccess,
    error: handleError
  });
}

indexPools();

function handleNewPoolSuccess(newPool) {
  renderPool(newPool);
  hideAdmin();
  showCurrentDay();
}

const $poolForm = $('#add-pool form');
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

function handlePoolDeleteSuccess(deletedPool) {
  const poolDiv = `[data-pool-id=${deletedPool._id}]`;
  $(poolDiv).hide('slow', function() {
    $(poolDiv).remove;
  });
}

$(document).on('click', '.pool-delete-btn', function(e) {
  e.preventDefault();
  const id = $(this).closest('.pool').data('pool-id');
  $.ajax({
    method: 'DELETE',
    url: `/api/pools/${id}`,
    success: handlePoolDeleteSuccess,
    error: handleError
  });
});

function handleNewEventSuccess(pool) {
  // Grad the poolDiv for the pool where the event should be placed
  const poolDiv = document.querySelectorAll(`[data-pool-id='${pool._id}']`)[0];
  // The event to inject into the DOM is the last event listed in the pool response
  const eventToAdd = pool.events[pool.events.length - 1];
  renderEvent(poolDiv, eventToAdd);
}

$(document).on('submit', '.add-event form', function(e) {
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

function handleEventDeleteSuccess(eventDeleted) {
  const $eventDeleted = $(`[data-event-id='${eventDeleted._id}']`);
  console.log({ $eventDeleted });
  $eventDeleted.hide('slow', function() {
    $eventDeleted.remove();
  });
}

// Event listener for deleting an event
$(document).on('click', '.delete-event', function(e) {
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

function handleError(err) {
  console.log('error', err);
}

// Toggle events for a day of the week clicked
$(document).on('click', '.day-of-week', function(e) {
  e.preventDefault();
  $(this).next().toggle(200);
  // Toggle the show and hide glyphicons
  $(this).find('.glyphicon').toggle();
});

function showCurrentDay() {
  const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  $('.event-holder').hide();
  $(`.${dayOfWeek} .event-holder`).show();
  $(`.${dayOfWeek}`).find('.glyphicon-plus').toggle();
  $(`.${dayOfWeek}`).find('.glyphicon-minus').toggle();
}

function getAdminElements() {
  return [$('.pool-header button'), $('.delete-event'), $('#add-pool'), $('.add-event')];
}

function toggleAdmin() {
  getAdminElements().forEach(adminElement => {
    adminElement.toggle();
  });
}

function hideAdmin() {
  getAdminElements().forEach(adminElement => {
    adminElement.hide();
  });
}

// Admin Log In to toggle admin controls in and out of view
$('#admin').on('click', () => {
  toggleAdmin();
});
