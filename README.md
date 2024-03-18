# Prototipo de microservicios y api gateway


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

En ese archivo podemos modificar nuesta gateway para que se comunique con los diferentes microservicios, los puntos mas importantes son:

http:
    port: 3000 <--- este es el puerto en el que se ejecuta la api gateway
...
...
...
apiEndpoints: <-- aqui se deben de poner todos los endpoints que redireccionarian a los microservicios
    helloworld: <--- nombre clave para añadirlo al pipeline (explicacion mas adelante)
    host: localhost <--- el host jsjs
    path: '/hola-mundo' <--- endpoint clave, este sera el endpoint que tenemos que colocar en la api gatewa                                 y para comunicarnos con el microservicio
serviceEndpoints: <-- aqui se deben de colocar las url que tiene cada microservicio.
   helloworldServices: <--- se coloca un nombre clave para añadirlo al pipeline
     url: 'http://localhost:3001'
...
...
...
...

pipelines: <--- aqui estara la funcionalidad general del gateway, la logica
    hellowordpipeline: <--- nombre clave para diferenciarlo de otros pipelines (guarda la logica para conec                             tarse un microservicio en especifico)
        apiEndpoints:
            -helloworld <---- tomara la configuracion que se codifico en el apiEndpoints principal (el que                              esta mas arriba)
        ...
            ...
                ...
                serviceEndpoint: helloWorldServices <--- aqui redireccionara la peticion hacia el servicio                 helloWorld que configuramos anteriormente, e ira a la url que configuramos

## avance hasta el momento

Se tiene un prototipo que al enviar una peticion a la api gateway, esta sae contecta al microservicio y devuelve el mensaje que retorna el microservicio.
