const { connect } = require('mongoose');

const CONECTOR =
  'mongodb+srv://root:root123@message.nmbvy.mongodb.net/message?retryWrites=true&w=majority';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

connect(CONECTOR, OPTIONS, (MongoError) => {
  // si algo sale mal mostramos el error y paramos el servidor
  if (MongoError) {
    console.error(MongoError);
    process.exit(1);
  }
  console.log('Conectado con exito');
});
