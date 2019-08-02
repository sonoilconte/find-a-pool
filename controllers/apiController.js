// Endpoint responds with API documentation JSON
const index = (req, res) => {
  res.json({
    message: 'Welcome to Find a Pool!',
    documentation_url: 'https://github.com/sonoilconte/Find-a-Pool',
    base_url: 'localhost:3000',
    endpoints: [{
      method: 'GET',
      path: '/api',
      description: 'Describes available endpoints',
    }],
  });
};

module.exports = {
  index,
};
