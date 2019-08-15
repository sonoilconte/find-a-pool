# Find a Pool

Deployed at https://find-a-pool.herokuapp.com/

## Concept

If you're an avid swimmer, finding a pool that is open and accessible when you're free to swim can be a challenge. Unfortunately for swimmers, going to a pool isn't like going to most other places- you can't simply show up during general open hours and expect that you'll be able to swim. There could easily be a swim team practice taking over the whole pool. It might be family swim, and the pool is full of screaming kids, and there's nowhere to easily swim laps. Or it could be closed for maintenance. You need to be able to check ahead of time and see what is going on.

Our app aims to solve this problem by providing a one-stop resource for info on all the pools in your region. The site visitor can see general open hours as well as granular detail of the schedule. The site admin can add and delete pools, and add and delete scheduled events at those pools.

It's also often the case that the pool you regularly swim at might not be conveniently located for where you happen to be. You might not be aware of what pools are in your neighborhood, especially if you're visiting from out of town. Our app provides a map for each pool. In future versions, we plan to add a location-based functionality that will list pools according to proximity.

---
#### Features
* Display all pools in database
* Add a new pool
* Add a new event to a pool
* Delete a pool
* Delete an individual event at a pool
* When creating a new pool, create a map from the address
* Render events based on day of the week
* Keyword tags for each pool
* Display an image for each pool
* Admin functionality for creating or deleting pools/events
* Display pool events for the current day of the week by default

#### Future enhancements
* Add global search by name and tags
* Add location based search
* Create an image gallery by Pool
* User authentication and access control
* Enable image upload and validation
* Update pool data endpoint and GUI
* API controller docs update

#### Technologies
* HTML
* CSS
* JavaScript
* [Jquery](http://jquery.com/)
* [Bootstrap](http://getbootstrap.com/)
* [Node.js](https://nodejs.org/en/)
* [MongoDB](http://mongodb.github.io/node-mongodb-native/2.0/)
* [Google Maps API for Node](https://github.com/moshen/node-googlemaps/blob/master/README.md)

#### Technology Overview

Our App is built with a RESTful architecture utilizing Node.js and MongoDB to store data. We implemented a model-controller framework with mongoose and several node libraries, including [express](https://expressjs.com/) & [body-parser](https://github.com/expressjs/body-parser). Our google maps API integration utilizes a node library that allows us to use geocoding to translate an address into latitude and longitude coordinates on the server and then pass map data to the client. For more info on the GoogleMapsAPI node module visit the repo [here](https://github.com/moshen/node-googlemaps/blob/master/README.md)).

#### Other Credits

Glyphicons used via Bootstrap. http://glyphicons.com/

### Contributors list

[![waterswv](https://github.com/waterswv.png?size=50)](https://github.com/waterswv)
[![sonoilconte](https://github.com/sonoilconte.png?size=50)](https://github.com/sonoilconte)
