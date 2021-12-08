const { connect } = require('mongoose');
const Model = require('./model');

const CONECTOR =
  'mongodb+srv://root:root123@message.nmbvy.mongodb.net/message?retryWrites=true&w=majority';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
function addMessage(message) {
  /* list.push(message); */
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage() {
  const messages = await Model.find();
  return messages;
}
async function updateText(id, message) {
  const foundMessage = await Model.findById(id);
  foundMessage.message = message;
  const newMessage = foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText,
  //delete
};

connect(CONECTOR, OPTIONS, (MongoError) => {
  // si algo sale mal mostramos el error y paramos el servidor
  if (MongoError) {
    console.error(MongoError);
    process.exit(1);
  }
  console.log('Conectado con exito');
});
