import express from 'express'
// Importa las rutas para empleados desde el archivo employees.routes.js
import employeesRoutes from './routes/employees.routes.js';
// Importa las rutas de índice desde el archivo index.routes.js
import indexRoutes from './routes/index.routes.js';

const app =  express()

app.use(express.json())

// Usa las rutas de índice en la aplicación Express
app.use(indexRoutes);
// Usa las rutas de empleados, todas prefijadas con '/api'
app.use('/api', employeesRoutes);

// Middleware para manejar rutas no encontradas (404)
// Este middleware se ejecutará si ninguna de las rutas definidas anteriormente coincide con la solicitud
app.use((req, res, next) => {
    // Responde con un estado 404 y un mensaje JSON
    res.status(404).json({
        message: 'endpoint not found'
    });
});

export default  app