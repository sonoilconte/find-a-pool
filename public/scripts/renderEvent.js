function renderEvent(poolDiv, evnt) {
  // Append events to the appropriate day in the schedule
  const eventDay = evnt.dayOfWeek.toLowerCase();
  const eventDiv = document.createElement('div');
  eventDiv.classList.add('event', 'row');
  eventDiv.id = evnt._id;
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

  poolDiv.getElementsByClassName(eventDay)[0].appendChild(eventDiv);

  // poolDiv.find(`.${eventDay}`).children().last().append(
  //   `
  //     <div class='event row' id='${evnt._id}'>
  //       <div class="col-xs-6">${evnt.title}</div>
  //       <div class="col-xs-4"> ${evnt.startTime} - ${evnt.endTime}</div>
  //       <div class="col-xs-2">
  //         <button class='delete-event'>
  //           <span class='glyphicon glyphicon-remove'></span>
  //         </button>
  //       </div>
  //     </div>
  //   `
  // );
}
