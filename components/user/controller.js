const store = require('./store');

async function addUser(name) {
  if (!name) {
    throw 'Los datos son incorrectos';
  }
  const user = {
    name,
  };
  store.add(user);
  return user;
}

module.exports = {
  addUser,
};
