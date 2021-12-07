function addMessagePromise(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messangerController] No hay usuario o mensaje');
      return reject('Los datos son incorrectos');
    }

    const fullMessage = {
      user: user,
      message: message,
      data: new Date(),
    };
    console.log(fullMessage);
    resolve(fullMessage);
  });
}

async function addMessageAsync(user, message) {
  if (!user || !message) {
    throw 'Los datos son incorrectos';
  }
  const fullMessage = {
    user: user,
    message: message,
    data: new Date(),
  };
  console.log(fullMessage);
  return fullMessage;
}

module.exports = {
  addMessagePromise,
  addMessageAsync,
};
