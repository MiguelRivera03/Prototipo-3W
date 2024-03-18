const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const whiteList = ['http://localhost:3000']

app.use(cors(
  { origin: true, credentials: true }));

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Permite a cualquier origen
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Enviaste una peticion al microservicio por medio de la api GATEWAY c:');
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});