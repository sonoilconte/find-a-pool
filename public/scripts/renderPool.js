function renderPool(pool){

  const poolHTML = `

  <!--Beginning of Pool Data-->
  <div class="pool col-xs-12" data-pool-id="${pool._id}">
    <div class="row">
      <!--Pool Info Column 1 Begin-->
      <div class="col-sm-6 col-md-4">
        <div class="pool-header clearfix">
          <button class="pool-delete-btn btn btn-danger">Delete Pool</button>
          <h2>${pool.name}</h2>
        </div>
        <section class="contact">
          <p>${pool.address}</p>
          <p>${pool.phoneNumber}</p>
          <p>${pool.contactEmail}</p>
        </section>
        <section class="op-hours">
          <h3>Hours of Operation</h3>

          <div class="monday">
            <div class="row day-of-week">
              <p class="col-xs-6 show-hide">
                Monday
                <span class='glyphicon glyphicon-plus'></span>
                <span class='glyphicon glyphicon-minus'></span>
              </p>
              <p class="col-xs-6">${pool.monday}</p>
            </div>
            <div class="event-holder">
            </div>
          </div>

          <div class="tuesday">
            <div class="row day-of-week">
              <p class="col-xs-6 show-hide">
                Tuesday
                <span class='glyphicon glyphicon-plus'></span>
                <span class='glyphicon glyphicon-minus'></span>
              </p>
              <p class="col-xs-6">${pool.tuesday}</p>
            </div>
            <div class="event-holder">
            </div>
          </div>

          <div class="wednesday">
            <div class="row day-of-week">
            <p class="col-xs-6 show-hide">
              Wednesday
              <span class='glyphicon glyphicon-plus'></span>
              <span class='glyphicon glyphicon-minus'></span>
            </p>
            <p class="col-xs-6">${pool.wednesday}</p>
            </div>
            <div class="event-holder">
            </div>
          </div>

          <div class="thursday">
            <div class="row day-of-week">
              <p class="col-xs-6 show-hide">
                Thursday
                <span class='glyphicon glyphicon-plus'></span>
                <span class='glyphicon glyphicon-minus'></span>
              </p>
              <p class="col-xs-6">${pool.thursday}</p>
            </div>
            <div class="event-holder">
            </div>
          </div>

          <div class="friday">
            <div class="row day-of-week">
              <p class="col-xs-6 show-hide">
                Friday
                <span class='glyphicon glyphicon-plus'></span>
                <span class='glyphicon glyphicon-minus'></span>
              </p>
              <p class="col-xs-6">${pool.friday}</p>
            </div>
            <div class="event-holder">
            </div>
          </div>

          <div class="saturday">
            <div class="row day-of-week">
              <p class="col-xs-6 show-hide">
                Saturday
                <span class='glyphicon glyphicon-plus'></span>
                <span class='glyphicon glyphicon-minus'></span>
              </p>
              <p class="col-xs-6">${pool.saturday}</p>
            </div>
            <div class="event-holder">
            </div>
          </div>

          <div class="sunday">
            <div class="row day-of-week">
              <p class="col-xs-6 show-hide">
                Sunday
                <span class='glyphicon glyphicon-plus'></span>
                <span class='glyphicon glyphicon-minus'></span>
              </p>
              <p class="col-xs-6">${pool.sunday}</p>
            </div>
            <div class="event-holder">
            </div>
          </div>

        </section>
      </div> <!--Pool Info Column 1 End-->

      <div class="col-sm-6 col-md-4"> <!--Pool Info Column 2 Begin-->
        <section class="image">
        <img src='${pool.imageURL}' alt='pool image'/>
        </section>
        <section class="map">
          <div class="overlay" onClick="style.pointerEvents='none'"></div>
          <div class="map-insert"></div>
        </section>

      </div>
      <!-- Pool Info Column 2 End -->

      <!-- Pool Info Column 3 Begin-->
      <div class="col-sm-6 col-md-4">
      <section class="events">
        <!-- ADD EVENT SECTION-->
        <div class="add-event">
          <h4>Add an Event</h4>
          <form action="index.html" method="post">
            <div class="row">
              <div class="col-sm-6"><input class="form-control" type="text" name="dayOfWeek" value="" placeholder="Day of Week" required></div>
              <div class="col-sm-6"><input class="form-control" type="text" name="title"  value="" placeholder="Title" required></div>
            </div>
            <div class="row">
              <div class="col-sm-6"><input class="form-control" type="text" name="startTime" value="" placeholder="Start Time"></div>
              <div class="col-sm-6"><input class="form-control" type="text" name="endTime" value="" placeholder="End Time"></div>
            </div>
            <div class="row">
              <div class="col-sm-6"><input class="form-control" type="text" name="description" value="" placeholder="Description"></div>
              <div class="col-sm-6"><input class="form-control submit" class="btn btn-default" type="submit" name="submit" value="Submit"></div>
            </div>
          </form>
        </div>
      </section>
      </div>
    </div>
    <!-- Pool Info Column 3 End-->
    <div class="col-xs-12 pool-tags" data-pool-id="${pool._id}">
    </div>
  </div><!--Pool Info End -->
  `;
  $('#insert-pool').prepend(poolHTML);
}
