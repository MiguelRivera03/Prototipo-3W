const express = require('express');
const request = require('request');
const axios = require('axios')
const cors = require('cors');
const app = express();
const port = 3002;


app.use(cors(
  { origin: true, credentials: true }));

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Permite a cualquier origen
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Función para obtener noticias
const getNews = async (category) => { //las categorias pueden ser -> {    general, business, entertainment, health, science, sports, technology}
  const apiKey = '9491f04f4e3241cc8d030e0b49bcf87f';
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=3&apiKey=${apiKey}`;
  const response = await axios.get(url);

  //console.log(response.data.articles.source)
  //const newsData = JSON.parse(response.data);
  //console.log(newsData)
  return response.data.articles;
};

// Ruta para obtener noticias por categoría
app.get('/:category', async (req, res) => {
  const category = req.params.category;
  console.log(category)
  console.log("entra")
  try {
    const newsData = await getNews(category);
    console.log(newsData)
    res.json(newsData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Microservicio de noticias iniciado en el puerto ${port}`);
});
