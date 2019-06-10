# Find a Pool

## Concept

If you're an avid swimmer, finding a pool that is open and accessible when you're free to swim can be a challenge. Unfortunately for swimmers, going to a pool isn't like going to most other places- you can't simply show up during general open hours and expect that you'll be able to swim. There could easily be a swim team practice taking over the whole pool. It might be family swim, and the pool is full of screaming kids, and there's nowhere to easily swim laps. Or it could be closed for maintenance. You need to be able to check ahead of time and see what is going on.

Our app aims to solve this problem by providing a one-stop resource for info on all the pools in your region. The site visitor can see general open hours as well as granular detail of the schedule. The site admin can add and delete pools, and add and delete scheduled events at those pools.

It's also often the case that the pool you regularly swim at might not be conveniently located for where you happen to be. You might not be aware of what pools are in your neighborhood, especially if you're visiting from out of town. Our app provides a map for each pool. In future versions, we plan to add a location-based functionality that will list pools according to proximity.


---
#### Features
* Display all pools in dataset
* Add a new pool end-point
* Add a new event to each pool
* Delete a pool
* Delete an individual event at pool
* Geoencoder translation from address to LatLng data for new map
* Event rendering based on day of week
* Keyword Tags listed by pool
* Images stored by Pool
* Admin functionality for delete & add features

#### Future enhancements
* Add global search by name and tags
* Add location based search
* Default display events based on current day of week
* Create an image gallery by Pool
* Create user/password login state
* Enable image upload and validation by users
* Fix render map on pool post
* Create update/put end-point for pool
* API controller docs update
* stop hunger, fight crime


#### Technology Leveraged
* HTML
* CSS
* javascript
* [Jquery](http://jquery.com/)
* [Bootstrap](http://getbootstrap.com/)
* [Node.js](https://nodejs.org/en/)
* [MongoDB](http://mongodb.github.io/node-mongodb-native/2.0/)
* [Google Maps API for Node](https://github.com/moshen/node-googlemaps/blob/master/README.md)

#### Technology Overview

Our App is built with a RESTful architecture utilizing Node.js and MongoDB to store data. We implemented a model-controller framework with mongoose and several node-modules, including [express](https://expressjs.com/) & [body-parser](https://github.com/expressjs/body-parser). Our google maps api integration utilizes a node-module that allows us to use geoencoding to translate an address into Lat/Long coordinates on the server and then pass a map object to the client-browser via ajax. For more info on the GoogleMapsAPI node-module vist the repo [here](https://github.com/moshen/node-googlemaps/blob/master/README.md)).

#### Other Credits

Glyphicons used via Bootstrap. http://glyphicons.com/

### Contributors list

[![waterswv](https://github.com/waterswv.png?size=50)](https://github.com/waterswv)
[![sonoilconte](https://github.com/sonoilconte.png?size=50)](https://github.com/sonoilconte)
