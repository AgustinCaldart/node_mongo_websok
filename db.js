const { connect } = require('mongoose');

const CONECTOR =
  'mongodb+srv://root:root123@message.nmbvy.mongodb.net/message?retryWrites=true&w=majority';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = db;
