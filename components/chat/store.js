const Model = require('./model');

function addChat(chat) {
  const myChat = new Model(chat);
  console.log(myChat);
  return myChat.save();
}

async function getChat(userId) {
  try {
    let filter = {};
    if (userId) {
      filter = {
        users: userId,
      };
    }
    return await Model.find().populate('users').exec();
  } catch (error) {
    throw error;
  }
}
module.exports = {
  addChat,
  getChat,
};
