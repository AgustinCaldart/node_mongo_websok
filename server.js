const express = require('express');
const { config } = require('./config/config');
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

const URL = `mongodb+srv://${config.dbUser}:${config.dbPassword}@message.nmbvy.mongodb.net/${config.dbName}?retryWrites=true&w=majority`;

const CONECTOR = URL;
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
