const store = require('./store');
function addChat(users) {
  /*  if (!users || !Array.isArray(users)) {
    return Promise.reject('Invalid user list');
  } */
  const chat = {
    users: users,
  };
  console.log(chat);
  return store.addChat(chat);
}

async function getChat(userId) {
  try {
    return await store.getChat(userId);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addChat,
  getChat,
};
