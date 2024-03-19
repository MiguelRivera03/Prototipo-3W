import './App.css'
import axios from 'axios'

import { useState, useEffect } from "react"

const App = () => {

  const [city, setCity] = useState('Tulua')
  const [cityData, setCityData] = useState()

  function getWeather() {
    fetch(`http://localhost:3003/${city}`)
      .then((response) => response.json())
      .then((data) => {
        setCityData(data)
        console.log(data)
      })
  }

  function handleCityChange(event) {
    setCity(event.target.value)
    console.log(city)
  }

  return (
    <>
      <div id="container">
        <div id='content'>
          <div id="presentation">
            <h1>Ejemplo API Gateway</h1>
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

          </div>
        </div>
      </div>
    </>
  )
}

export default App