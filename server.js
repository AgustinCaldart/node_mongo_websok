const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const router = require('./network/routes');
//requirimos express
const app = express();
const socket = require('./socket');
const server = require('http').Server(app);
//trabajar json
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);
//iniciamos el router
router(app);

app.use('/app', express.static('static'));
//prendemos express
server.listen(3000, function () {
  console.log(`la aplicacion esta escuchando en http://localhost:3000`);
});

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
