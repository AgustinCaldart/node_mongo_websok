const express = require('express');
const { connect } = require('mongoose');
const router = require('./network/routes');
//requirimos express
const app = express();
//trabajar json
app.use(express.json());
//iniciamos el router
router(app);

app.use('/app', express.static('static'));
//prendemos express
app.listen(3001);
console.log(`la aplicacion esta escuchando en http://localhost:3000`);

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
