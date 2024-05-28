// Importa el objeto de aplicación de Express desde el archivo app.js
import app from './app.js';
import { PORT } from './config.js';

// Inicia el servidor en el puerto 3000
app.listen(PORT)
    // Imprime un mensaje en la consola indicando que el servidor ha iniciado
console.log('Server on running on port', PORT);







