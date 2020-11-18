  const Users = require('../controllers/auth.controller');
  module.exports = (router) => {
      router.post('/register', Users.createUser);
      router.post('/login', Users.loginUser);
  }