// Importa el módulo Router desde Express
import { Router } from 'express';
// Importa las funciones del controlador de empleados desde employees.controllers.js
import { getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployee } from '../controllers/employees.controllers.js';

// Crea una instancia del enrutador de Express
const router = Router();

// Define la ruta para obtener todos los empleados
// GET /employees llama a la función getEmployees
router.get('/employees', getEmployees);

// Define la ruta para obtener un empleado por ID
// GET /employees/:id llama a la función getEmployee
router.get('/employees/:id', getEmployee);

// Define la ruta para crear un nuevo empleado
// POST /employees llama a la función createEmployees
router.post('/employees', createEmployees);

// Define la ruta para actualizar un empleado por ID
// PATCH /employees/:id llama a la función updateEmployees
router.patch('/employees/:id', updateEmployees);

// Define la ruta para eliminar un empleado por ID
// DELETE /employees/:id llama a la función deleteEmployees
router.delete('/employees/:id', deleteEmployees);

// Exporta el enrutador para que pueda ser usado en otros módulos
export default router;
