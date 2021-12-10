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
async function getUser(filterUser) {
  const rta = await store.list(filterUser);
  return rta;
}

module.exports = {
  addUser,
  getUser,
};
