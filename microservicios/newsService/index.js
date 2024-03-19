const express = require('express');
const request = require('request');
const axios = require('axios')

const app = express();
const port = 3002;

// Función para obtener noticias
const getNews = async (category) => { //las categorias pueden ser -> {    general, business, entertainment, health, science, sports, technology}
  const apiKey = '1b6ef176992c4c9380bc1def656e848f';
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
  const response = await axios.get(url);
  const newsData = JSON.parse(response.body);
  return newsData;
};

// Ruta para obtener noticias por categoría
app.get('/api/news/:category', async (req, res) => {
  const category = req.params.category;
  try {
    const newsData = await getNews(category);
    res.json(newsData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Microservicio de noticias iniciado en el puerto ${port}`);
});
