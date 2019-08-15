import renderPool from './renderPool.js';
import renderEvent from './renderEvent.js';
import serialize from './serialize-0.2.js';

function handleError(err) {
  console.log('error', err);
}

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
  getAdminElements().forEach((adminElement) => {
    adminElement.toggle();
  });
}

function hideAdmin() {
  getAdminElements().forEach((adminElement) => {
    adminElement.hide();
  });
}

// Admin Log In to toggle admin controls in and out of view
$('#admin').on('click', () => {
  toggleAdmin();
});

function handleIndexSuccess(pools) {
  pools.forEach((pool) => {
    renderPool(pool);
  });
  // After rendering all the pools, hide admin buttons, forms, etc.
  hideAdmin();
  showCurrentDay();
}

function indexPools() {
  // Get index of all pools in the database
  $.ajax({
    method: 'GET',
    url: 'api/pools/',
    success: handleIndexSuccess,
    error: handleError,
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
    data,
    success: handleNewPoolSuccess,
    error: handleError,
  });
  $poolForm.trigger('reset');
});

function handlePoolDeleteSuccess(deletedPool) {
  const $poolDiv = $(`[data-pool-id=${deletedPool._id}]`);
  $poolDiv.hide('slow', () => {
    $poolDiv.remove();
  });
}

$(document).on('click', '.pool-delete-btn', (e) => {
  e.preventDefault();
  const id = e.target.closest('.pool').dataset.poolId;
  $.ajax({
    method: 'DELETE',
    url: `/api/pools/${id}`,
    success: handlePoolDeleteSuccess,
    error: handleError,
  });
});

function handleNewEventSuccess(pool) {
  // Grad the poolDiv for the pool where the event should be placed
  const poolDiv = document.querySelectorAll(`[data-pool-id='${pool._id}']`)[0];
  // The event to inject into the DOM is the last event listed in the pool response
  const eventToAdd = pool.events[pool.events.length - 1];
  renderEvent(poolDiv, eventToAdd);
}

$(document).on('submit', '.add-event form', (e) => {
  e.preventDefault();
  const form = e.target;
  const data = serialize(form);
  const id = form.closest('.pool').dataset.poolId;
  $.ajax({
    method: 'POST',
    url: `/api/pools/${id}/events`,
    data,
    success: handleNewEventSuccess,
    error: handleError,
  });
  form.reset();
});

function handleEventDeleteSuccess(eventDeleted) {
  const $eventDeleted = $(`[data-event-id='${eventDeleted._id}']`);
  $eventDeleted.hide('slow', () => {
    $eventDeleted.remove();
  });
}

// Event listener for deleting an event
$(document).on('click', '.delete-event', (e) => {
  e.preventDefault();
  const { eventId } = e.target.closest('.event').dataset;
  const { poolId } = e.target.closest('.pool').dataset;
  $.ajax({
    method: 'DELETE',
    url: `/api/pools/${poolId}/events/${eventId}`,
    success: handleEventDeleteSuccess,
    error: handleError,
  });
});

// Toggle events for a day of the week clicked
$(document).on('click', '.day-of-week', function (e) {
  e.preventDefault();
  const $dayDiv = $(this);
  // Toggle the events for the day, which are held in the next sibling
  $dayDiv.next().toggle(200);
  // Toggle the +/- glyphicons representing whether the events are shown or hidden
  $dayDiv.find('.glyphicon').toggle();
});
