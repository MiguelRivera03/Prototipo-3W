const express = require('express');
const axios = require('axios')
const cors = require('cors');

const app = express();
const port = 3003;

app.use(cors(
  { origin: true, credentials: true }));

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Permite a cualquier origen
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Función para obtener el clima
const getClima = async (ciudad) => {
  const urlAPIClima = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=ce26a0bc0211a75ef010c41fc92639d6`;
  const respuesta = await axios.get(urlAPIClima);
  console.log(respuesta.data)
  return respuesta.data;
};

// Ruta para obtener el clima de una ciudad
app.get('/:ciudad', async (req, res) => {
  const ciudad = req.params.ciudad;
  const datosClima = await getClima(ciudad);
  if (datosClima.cod !== 200) {
    return res.status(400).json({ error: 'Ciudad no encontrada' });
  }
  res.json(datosClima);
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Microservicio de clima iniciado en el puerto ${port}`);
});
