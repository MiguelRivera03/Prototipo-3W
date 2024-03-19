import './App.css'
import axios from 'axios'

import { useState, useEffect } from "react"

const App = () => {

  const [city, setCity] = useState('Tulua')
  const [cityData, setCityData] = useState()

  function getWeather() {
    fetch(`http://localhost:3000/clima/${city}`)
      .then((response) => response.json())
      .then((data) => {
        setCityData(data)
        console.log(data)
      })
  }

  const [news, setnews] = useState('general')
  const [newsData, setNewsData] = useState()

  function getnews() {
    fetch(`http://localhost:3000/noticias/${news}`)
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data)
        console.log(data)
      })
  }

  const [saludo, setSaludo] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/mensajeBienvenida')
      .then(response => response.json())
      .then(data => {
        setSaludo(data)
        console.log(data)
      })
      .catch(error => console.error('Error fetching saludo :', error));
  }, []);


  function handleCityChange(event) {
    setCity(event.target.value)
    console.log(city)
  }

  function handleCategoryChange(event) {
    setnews(event.target.value)
    console.log(news)
  }

  return (
    <>
      <div id="container">
        <div id='content'>
          <div id="presentation">
            <h1>{saludo.msg}</h1>
            <p>Aplicación que cuenta con 2 microservicios que corren en <code>node</code> junto con la librería <code>express</code>. Para implementar el <strong>API Gateway</strong>, se usó la librería de código abierto <code>express-gateway</code>, permitiendo configurar de manera declarativa carasterísticas como el enrutamiento de solicitudes, entre otras.</p>
          </div>
          <div id="ms1" className='ms'>
            <h2>Microservicio 1</h2>
            <p>Este microservicio consulta una API de <a href="https://openweathermap.org" target="_blank">openweathermap</a> con información relevante del clima y la ubicación de la ciudad en el momento.</p>
            <div>
              <select name="cities" id="cities" onChange={(event) => handleCityChange(event)}>
                <option value="Tulua">Tuluá</option>
                <option value="Cali">Cali</option>
                <option value="Bogota">Bogotá</option>
                <option value="Medellin">Medellín</option>
              </select>
              <button id='weather-button' onClick={getWeather}>Consultar</button>
            </div>
            {cityData &&
              <ul name="weather-response" id="weather-response">
                <li>
                  <strong>City:</strong> {cityData.name}
                </li>
                <li>
                  <strong>Latitude:</strong> {cityData.coord.lat}
                </li>
                <li>
                  <strong>Longitude:</strong> {cityData.coord.lon}
                </li>
                <li>
                  <strong>Weather condition:</strong> {cityData.weather[0].description[0].toUpperCase()}{cityData.weather[0].description.substr(1)}
                </li>
              </ul>
            }
          </div>
          <div id='separator'></div>
          <div id="ms2" className='ms'>
            <h2>Microservicio 2</h2>
            <p>Este microservicio consulta una API de <a href="https://newsapi.org" target="_blank">newsapi</a> y trae noticias relevantes dependiendo de la categoria que se escoja</p>
            <div>
              <select name="category" id="cities" onChange={(event) => handleCategoryChange(event)}>
                <option value="general">General</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnologia</option>
              </select>
              <button id='weather-button' onClick={getnews}>Consultar</button>
            </div>
            <div style={{ maxHeight: '600px', overflowY: 'auto' , marginTop: '10px' }}>
            {newsData && newsData.map((news, index) => (
              <ul key={index} name="weather-response" id="weather-response">
                <li>
                  <strong>Source:</strong> {news.source.name ? news.source.name : "Not available"}
                </li>
                <li>
                  <strong>Published at:</strong> {news.publishedAt ? news.publishedAt : "Not available"}
                </li>
                <li>
                  <strong>Author:</strong> {news.author ? news.author : "Not available"}
                </li>
                <li>
                  <strong>Title:</strong> {news.title ? news.title : "Not available"}
                </li>
                <li>
                  <strong>Description:</strong> {news.description ? news.description : "Not available"}
                </li>
                <li>
                  {news.urlToImage ? <img src={news.urlToImage} className="small-image" alt="Image" /> : "Image not available"}
                </li>
              </ul>
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App