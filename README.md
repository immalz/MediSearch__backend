
# MediFacil__backend

Este es el API REST de la aplicacion MediFacil.


## Caracteristicas
* Recibe peticiones del cliente y devuelve los datos solicitados.

## Instalación

Clona el proyecto
```bash
git clone https://github.com/immalz/MediSearch__backend.git
```

Instalar dependencias npm dentro de la carpeta del proyecto
```bash
cd angular-shop
npm install
```

Asegúrate de tener `node y mongoDB` instalado. Trataré de mantener este proyecto actualizado con la última versión de cada uno.
```bash
https://nodejs.org/es/download/
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
```

El servidor necesita de 2 variables de entorno, cree un archivo ".env" en la raiz de la aplicación.
```bash
PORT: 4000
DB_CONNECT: mongodb://localhost/MediSearch
```

Comience la aplicación
```bash
npm run dev
```

Ahora abra una nueva pestaña en **localhost:4000**.


### Servidor de desarrollo
Ejecute `npm run dev` para un servidor de desarrollo. Navegue a `http://localhost:4000/`. La aplicación se volverá a cargar automáticamente si cambia alguno de los archivos fuente debido a la libreria de Nodemon.


### Construir

Ejecuta `npm run build` para compilar el proyecto a una version de producción. Los archivos de producción se almacenarán en el directorio `build/`.



### Correr el Sistema

Ejecuta `npm start` para correr el proyecto ya compilado.
