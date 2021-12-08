const { connect } = require('mongoose');
const { capitalizarPalabras } = require('../../utils');
const Model = require('./model');

const CONECTOR =
  'mongodb+srv://root:root123@message.nmbvy.mongodb.net/message?retryWrites=true&w=majority';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

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

connect(CONECTOR, OPTIONS, (MongoError) => {
  // si algo sale mal mostramos el error y paramos el servidor
  if (MongoError) {
    console.error(MongoError);
    process.exit(1);
  }
  console.log('Conectado con exito');
});
