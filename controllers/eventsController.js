var db = require('../models');

// POST '/api/pools/:poolId/events'
function create(req, res) {
  db.Pool.findById(req.params.poolId, function(err, foundPool) {
    console.log(req.body);
    var newEvent = new db.Events(req.body);  // how would we validate this data?
    foundPool.events.push(newEvent);
    foundPool.save(function(err, savedPool) {
      console.log('newEvent created: ', newEvent);
      res.json(savedPool);  // responding with updated object
    });
  });
}

// DELETE '/api/pools/:poolId/events/:eventId'
function destroy(req, res) {
    db.Pool.findById(req.params.poolId, function (err, foundPool) {
     if (err) {console.log('error finding Pool', err);}
     // we've got the Pool, now find the event within it
     let correctEvent = foundPool.events.id(req.params.eventId);
     if (correctEvent) {
       correctEvent.remove();
       // resave the Pool now that the event is gone
       foundPool.save(function(err, saved) {
         console.log('REMOVED ', correctEvent.title, 'FROM ', saved.events);
         res.json(correctEvent);
       });

     }
});
}

module.exports = {
  create: create,
  destroy: destroy
};
