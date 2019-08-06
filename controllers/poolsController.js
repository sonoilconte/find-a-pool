const GoogleMapsAPI = require('googlemaps');
const db = require('../models');

function geocodeAddress(address) {
  // Google maps config
  const publicConfig = {
    key: process.env.MAPS_API_KEY,
    stagger_time: 1000, // for elevationPath
    encode_polylines: false,
    secure: true, // use https
  };
  const gmAPI = new GoogleMapsAPI(publicConfig);
  const geocodeParams = {
    address,
  };
  return new Promise((resolve, reject) => {
    gmAPI.geocode(geocodeParams, (err, res) => {
      if (err) {
        reject(err);
      } else {
        const coordinates = {};
        coordinates.lat = res.results[0].geometry.location.lat;
        coordinates.long = res.results[0].geometry.location.lng;
        console.log('lat, long found from g maps is ', coordinates);
        resolve(coordinates);
      }
    });
  });
}

function index(req, res) {
  db.Pool.find({}, (err, pools) => {
    if (err) {
      console.log('Error finding all pools', err);
    }
    console.log('Finding all pools');
    res.json(pools);
  });
}

function show(req, res) {
  db.Pool.findById(req.params.id, (err, pool) => {
    if (err) {
      console.log('Error finding pool by ID', err);
    }
    res.json(pool);
  });
}

function create(req, res) {
  console.log('will create pool from req.body', req.body);
  const poolData = req.body;
  // TODO: add more complete validation of pool data
  if (poolData.address) {
    geocodeAddress(poolData.address)
    .then((coordinates) => {
      poolData.maps = coordinates;
      return db.Pool.create(poolData);
    })
    .then((newPool) => {
      console.log('created new pool', newPool);
      res.json(newPool);
    })
    .catch((err) => {
      console.log('caught error creating pool', err);
    });
  } else {
    res.status(422).end();
  }
}

function destroy(req, res) {
  db.Pool.findOneAndRemove({ _id: req.params.id }, (err, pool) => {
    if (err) {
      console.log('Error finding and deleting pool', err);
    }
    console.log('Deleting pool ', pool);
    res.json(pool); // TODO: don't respond with entire document?
  });
}

module.exports = {
  index,
  show,
  create,
  destroy,
};
