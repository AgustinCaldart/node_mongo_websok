const store = require('./store');

function addMessage(chat, user, message) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[messageController] No hay chat usuario o mensaje');
      reject('Los datos son incorrectos');
      return false;
    }

    /*  let fileUrl = '';
      if (file) {
          fileUrl = 'http://localhost:3000/app/files/' + file.filename;
      } */

    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
      //file: fileUrl,
    };

    store.add(fullMessage);

    resolve(fullMessage);
  });
}

async function addMessageAsync(chat, user, message) {
  if (!chat || !user || !message) {
    throw 'Los datos son incorrectos';
  }
  const fullMessage = {
    chat: chat,
    user: user,
    message: message,
    data: new Date(),
  };
  store.add(fullMessage);
  return fullMessage;
}

async function getMessages(filterChat) {
  const rta = await store.list(filterChat);
  return rta;
}

async function updateMessage(id, message) {
  if (!id || !message) {
    return reject('invalid Data');
  }
  const result = await store.updateText(id, message);
  return result;
}
async function deleteMessage(id) {
  if (!id) {
    return 'id invalido';
  }
  const result = await store.removeMessage(id);
  return result;
}

module.exports = {
  addMessageAsync,
  getMessages,
  updateMessage,
  deleteMessage,
  addMessage,
};
