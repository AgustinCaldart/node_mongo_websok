const { capitalizarPalabras } = require('../../utils');
const Model = require('./model');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

function getMessage(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: capitalizarPalabras(filterUser) };
    }
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          return reject(error);
        }
        resolve(populated);
      });
  });
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
