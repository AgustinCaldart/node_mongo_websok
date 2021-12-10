const { capitalizarPalabras } = require('../../utils');
const Model = require('./model');

async function getUser(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { name: capitalizarPalabras(filterUser) };
  }
  const user = await Model.find(filter);
  if (user.length === 0) {
    return 'Usuario no encontrado';
  }
  return user;
}

function addUser(user) {
  const myUser = new Model(user);
  myUser.save();
}

module.exports = {
  add: addUser,
  list: getUser,
};
