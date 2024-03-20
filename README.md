# Prototipo de microservicios y api gateway

***
Aplicacion web con arquitectura de microservicios y api Gateway para la consulta de noticias y clima de ciudades utilizando openweathermap API y newsapi API.

## Las dependencias que se utilizaron por el momento:

1. npm install express
2. npm install -g express-gateway
3. npm install -g nodemon

## para ejecutar  del proyecto

1. Se debe de iniciar individualmente los microservicios, es decir una terminal para cada uno
    por el momento se tiene que se inician con npm start (ya se tiene nodemon)
2. Se debe iniciar la api gateway, una terminal solo para esta (la gateway se inicia con npm start)

3. Tanto los microservicios como la api tienen hot-reload.

## Como funciona la dependencia express-gateway

Esta dependencia nos permite utilizar una estructura de api, en la cual podemos añadir autenticaciones, politicas, proxy, etc. El archivo principal de esta configuracion es el gateway.config.yml.

En ese arcivo podemos configurar nuestra api gateway, añadiendo los endpoints de cada microservicio.

