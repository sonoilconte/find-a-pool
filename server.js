const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const app = express();
dotenv.config();
// Serve static files from public folder
app.use(express.static(path.resolve('public')));
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Routes
app.get('/', (req, res) => {
  res.sendFile('views/index.html', {
    root: __dirname,
  });
});

// Documentation route
app.get('/api', controllers.api.index);

// Pool routes
app.get('/api/pools', controllers.pools.index);
app.get('/api/pools/:id', controllers.pools.show);
app.post('/api/pools', controllers.pools.create);
app.delete('/api/pools/:id', controllers.pools.destroy);

// Event routes
app.post('/api/pools/:poolId/events', controllers.events.create);
app.delete('/api/pools/:poolId/events/:eventId', controllers.events.destroy);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express Server is up and running on port ${PORT}`);
});
