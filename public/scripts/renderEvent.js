function renderEvent(poolDiv, evnt) {
  // Append events to the appropriate day in the schedule
  const eventDay = evnt.dayOfWeek.toLowerCase();
  const eventDiv = document.createElement('div');
  eventDiv.classList.add('event', 'row');
  // Set dataset property. Camel caps eventId will yield data-event-id attribute in HTML
  eventDiv.dataset.eventId = evnt._id;
  eventDiv.innerHTML =
    `
      <div class="col-xs-6">${evnt.title}</div>
      <div class="col-xs-4"> ${evnt.startTime} - ${evnt.endTime}</div>
      <div class="col-xs-2">
        <button class='delete-event'>
          <span class='glyphicon glyphicon-remove'></span>
        </button>
      </div>
    `;

  // Go to the correct day of the week, then to the event-holder inside that day
  poolDiv.getElementsByClassName(eventDay)[0]
    .getElementsByClassName('event-holder')[0].appendChild(eventDiv);
}
