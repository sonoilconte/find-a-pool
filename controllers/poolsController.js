const GoogleMapsAPI = require('googlemaps');
const db = require('../models');

// Google maps config
const publicConfig = {
  key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg', // TODO: Move this to .env
  stagger_time: 1000, // for elevationPath
  encode_polylines: false,
  secure: true, // use https
};
const gmAPI = new GoogleMapsAPI(publicConfig);

function renderMapLatLng(pools) {
  pools.forEach((pool) => {
    // Geoencode the address of the pool, and save lat and long in the DB
    // TODO: This appears to be calling maps every time we get a pool in the
    // index ... if so must change
    const geocodeParams = {
      address: pool.address,
    };
    const updatedPool = pool;
    gmAPI.geocode(geocodeParams, (err, encoding) => {
      updatedPool.maps.lat = encoding.results[0].geometry.location.lat;
      updatedPool.maps.long = encoding.results[0].geometry.location.lng;
      console.log('Geoencoding... lat, long ', updatedPool.maps);
      updatedPool.save();
    });
  });
}

// TODO: we should only geoencode once i.e. when we create the new pool
function createNewPool(pool) {
  const geocodeParams = {
    address: pool.address,
  };
  const updatedPool = pool;
  return new Promise((resolve, reject) => {
    gmAPI.geocode(geocodeParams, (err, res) => {
      updatedPool.maps.lat = res.results[0].geometry.location.lat;
      updatedPool.maps.long = res.results[0].geometry.location.lng;
      console.log('Pool was created and lat, long found from g maps is ', updatedPool.maps);
      updatedPool.save()
      .then(pool => {
        resolve(pool);
      })
      .catch(err => {
        reject(err);
      });
    });
  })
}

// Responds with index of all pools
function index(req, res) {
  db.Pool.find({}, (err, pools) => {
    if (err) {
      console.log('Error finding all pools', err);
    }
    // TODO: This likely needs to be fixed such that we're somehow including the
    // render in the response
    renderMapLatLng(pools);
    res.json(pools);
  });
}

function show(req, res) {
  // Respond with a pool by ID
  db.Pool.findById(req.params.id, (err, pool) => {
    if (err) {
      console.log('Error finding pool by ID', err);
    }
    // renderMapLatLng(pool); // this is breaking below
    res.json(pool);
  });
}

function create(req, res) {

  console.log('req.body', req.body);
  db.Pool.create(req.body)
  .then((pool) => {
    console.log('created pool', pool);
    return createNewPool(pool);
  })
  .then(result => {
    console.log('created pool with result', result);
    res.json(result);
  })
  .catch(err => {
    console.log('caught error ', err);
  });
}

function destroy(req, res) {
  db.Pool.findOneAndRemove({ _id: req.params.id }, (err, pool) => {
    if (err) {
      console.log('Error finding and deleting pool', err);
    }
    res.json(pool); // TODO: don't respond with entire document?
  });
}

module.exports = {
  index,
  show,
  create,
  destroy,
};
