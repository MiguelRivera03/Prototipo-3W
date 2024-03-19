const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

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
  const responseData = {msg: "Ejemplo microservicios y API Gateway"}
  res.json(responseData);
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});