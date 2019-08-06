const db = require('../models');

function create(req, res) {
  // TODO: validation and error handling, refactor in promise chain
  db.Pool.findById(req.params.poolId, (err, foundPool) => {
    console.log('Creating event from ', req.body);
    const newEvent = new db.Event(req.body);
    foundPool.events.push(newEvent);
    foundPool.save((saveErr, savedPool) => {
      if (saveErr) {
        console.log('Error saving pool with new event', saveErr);
        res.status(500).end();
        return;
      }
      console.log('Created ', { newEvent });
      res.json(savedPool);
    });
  });
}

function destroy(req, res) {
  // TODO: validation and error handling
  const { poolId, eventId } = req.params;
  console.log({ poolId, eventId });
  db.Pool.findById(poolId, (err, foundPool) => {
    if (err) {
      console.log('Error finding Pool', err);
    }
    const event = foundPool.events.id(eventId);
    if (event) {
      event.remove();
      foundPool.save((saveErr, pool) => {
        if (saveErr) {
          console.log('Error saving pool with removed event', saveErr);
          res.status(500).end();
          return;
        }
        console.log(`Removed ${event} from ${pool.name}`);
        res.json(event);
      });
    }
  });
}

module.exports = {
  create,
  destroy,
};
