const { capitalizarPalabras } = require('../../utils');
const Model = require('./model');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: capitalizarPalabras(filterUser) };
  }
  const messages = await Model.find(filter);
  if (messages.length === 0) {
    return 'Usuario no encontrado';
  }
  return messages;
}
async function updateText(id, message) {
  const foundMessage = await Model.findById(id);
  foundMessage.message = message;
  const newMessage = foundMessage.save();
  return newMessage;
}
async function removeMessage(id) {
  const message = Model.findByIdAndDelete(id);
  return message;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText,
  removeMessage,
};
