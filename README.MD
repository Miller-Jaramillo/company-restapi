```markdown
# Company API

Company API es una aplicación CRUD básica desarrollada con Node.js, Express y MySQL para manejar empleados. La API permite buscar, agregar, actualizar y eliminar empleados. Cada empleado tiene un ID incrementado automáticamente, nombre y salario.

## Requisitos

- Node.js v14 o superior
- MySQL
- npm

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/tu-usuario/company-api.git
   cd company-api
   ```

2. Instala las dependencias:

   ```sh
   npm install
   ```

3. Crea un archivo `.env` en el directorio raíz del proyecto con el siguiente contenido:

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=3306
   DB_DATABASE=companydb
   DB_USER=root
   DB_PASSWORD=
   ```

4. Asegúrate de tener una base de datos MySQL llamada `companydb` y una tabla `employee` con la siguiente estructura:

   ```sql
   CREATE DATABASE companydb;

   USE companydb;

   CREATE TABLE employee (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nombre VARCHAR(255) DEFAULT NULL,
       salario DECIMAL(10, 2) DEFAULT NULL
   );
   ```

5. Inicia el servidor:

   ```sh
   npm run dev
   ```

## Endpoints

### Obtener todos los empleados

- **URL**: `/api/employees`
- **Método**: `GET`
- **Respuesta**:
  ```json
  [
    {
      "id": 1,
      "nombre": "John Doe",
      "salario": 50000
    },
    {
      "id": 2,
      "nombre": "Jane Smith",
      "salario": 60000
    }
  ]
  ```

### Obtener un empleado por ID

- **URL**: `/api/employees/:id`
- **Método**: `GET`
- **Parámetros URL**: `id` (ID del empleado)
- **Respuesta**:
  ```json
  {
    "id": 1,
    "nombre": "John Doe",
    "salario": 50000
  }
  ```

### Agregar un nuevo empleado

- **URL**: `/api/employees`
- **Método**: `POST`
- **Cuerpo de la solicitud**:
  ```json
  {
    "nombre": "Nuevo Empleado",
    "salario": 55000
  }
  ```
- **Respuesta**:
  ```json
  {
    "id": 3,
    "nombre": "Nuevo Empleado",
    "salario": 55000
  }
  ```

### Actualizar un empleado por ID

- **URL**: `/api/employees/:id`
- **Método**: `PATCH`
- **Parámetros URL**: `id` (ID del empleado)
- **Cuerpo de la solicitud**:
  ```json
  {
    "nombre": "Empleado Actualizado",
    "salario": 57000
  }
  ```
- **Respuesta**:
  ```json
  {
    "id": 1,
    "nombre": "Empleado Actualizado",
    "salario": 57000
  }
  ```

### Eliminar un empleado por ID

- **URL**: `/api/employees/:id`
- **Método**: `DELETE`
- **Parámetros URL**: `id` (ID del empleado)
- **Respuesta**: `204 No Content`

## Estructura del Proyecto

```
company-api/
├── src/
│   ├── controllers/
│   │   ├── employees.controllers.js
│   │   └── index.controllers.js
│   ├── routes/
│   │   ├── employees.routes.js
│   │   └── index.routes.js
│   ├── app.js
│   ├── config.js
│   ├── db.js
│   └── index.js
├── .env
├── .env.example
├── package.json
└── README.md

```

## Créditos

Esta API se inspiró en el tutorial para crear una API REST con Node.js y MySQL ofrecido por [Fazt](https://www.youtube.com/watch?v=3dSkc-DIM74). Puedes explorar más sobre sus tutoriales y proyectos en su canal de YouTube y en su [repositorio de GitHub](https://github.com/fazt/nodejs-mysql-restapi/).


## Contacto

Si tienes alguna pregunta o sugerencia, por favor contacta a [Miller Jaramillo] a través de [millerjaramillo.mj@gmail.com].

