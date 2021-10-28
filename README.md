# Conexa backend API challenge
## Resume
Desarrollo de API con Node.js y Express.

## Start
Antes de ejecutar el sistema es necesario configurar el entorno del desarrollo mediante su correspondiente **archivo config.env** . Variables a configurar:

```
PORT=5050 //Puerto de ejecución

USER=santdoyle@gmail.com //Usuario para logín

PASSWORD=$2a$08$fwlr5vgRUxrYvddzEJdMBu8rJ4rnQGPOw4/BjNwPIPf3vwa4cIL3. //Password encriptado

TOKEN_KEY=Ss@%BQnwwKomJyWS9@ //Secret key para JWT

FRONT_URL=http://localhost:3000 //Origen de peticiones desde el front para configurar CORS.
```

### Run server
Para **iniciar el servidor** se debe correr el siguiente comando:

```
//run on development mode

npm run dev
```

## Endpoints

### /login
Para **iniciar sesión** y autorizar el acceso al sistema se deben enviar los siguientes datos como cuerpo de la petición, en formato JSON.

```
{
    "email": "santdoyle@gmail.com",
    "password": "YCWmXoSiU"
}
```

| Path  | Method | Description |
| ------------- | ------------- | ------- |
| /login  | POST | Autorización mediante JWT|


### /posts-lists
| Path  | Method | Description |
| ------------- | ------------- | ------- |
| /posts-lists  | GET | Retorna el listado de artículos como Array|
| /photos-list  | GET  | Retorna listado de imagenes, con límite de 10 por petición. |



## Desarrollo

El desarrollo de la API utiliza el ptraon MVC como estructura principal. 
Se utilizo la funcion Router de Express para dividir la estructura según lo necesario. 
No utiliza base de datos, en su lugar utiliza datos definidos en su archivo config.env
Utiliza JWT como método de autorización tras comprobar usuario y contraseña.


## Librerias
Las librerías utilizadas son:

- Passport
- JsonWebToken
- Axios
- Bcrypt
- Dotenv
- Cors
- Nodemon
