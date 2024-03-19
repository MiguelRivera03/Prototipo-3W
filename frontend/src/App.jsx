import './App.css'

import { useState, useEffect } from "react"

const App = () => {

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
            <p>Este microservicio consulta una API de <a href="https://openweathermap.org" target="_blank">openweathermap</a> y simplifica la respuesta para trabajar solo con los datos importantes.</p>
            <div>
              <select name="cities" id="cities">
                <option value="Tulua">Tuluá</option>
                <option value="Cali">Cali</option>
                <option value="Bogota">Bogotá</option>
                <option value="Medellin">Medellín</option>
              </select>
              <button id='weather-button'>Consultar</button>
            </div>
            <textarea name="weather-response" id="weather-response" cols="30" rows="10"></textarea>
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