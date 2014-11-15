module.exports = {
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost/seefu'
  },
  redis: {
    // uri: process.env.REDIS_URI || '127.0.0.1'
  }
};
