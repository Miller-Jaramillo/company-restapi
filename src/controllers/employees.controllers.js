// Importa el objeto pool desde el archivo db.js para utilizar la conexión a la base de datos
import { pool } from '../db.js'

// Función para obtener todos los empleados
export const getEmployees = async (req, res) => {
   try {
       // Ejecuta la consulta para obtener todos los empleados
       const [rows] = await pool.query('SELECT * FROM employee');
       // Devuelve los empleados en formato JSON
       res.json(rows);
   } catch (error) {
       // En caso de error, responde con un estado 500 y un mensaje de error
       return res.status(500).json({
           message: 'Something goes wrong'
       });
   }
}

// Función para obtener un empleado por ID
export const getEmployee = async (req, res) => {
    try {
        // Ejecuta la consulta para obtener el empleado con el ID proporcionado en los parámetros de la solicitud
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id]);
        // Si no se encuentra el empleado, responde con un estado 404 y un mensaje de error
        if (rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        });
        // Devuelve el empleado encontrado en formato JSON
        res.json(rows[0]);
    } catch (error) {
        // En caso de error, responde con un estado 500 y un mensaje de error
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}

// Función para crear un nuevo empleado
export const createEmployees = async (req, res) => {
    const { nombre, salario } = req.body;
    try {
        // Ejecuta la consulta para insertar un nuevo empleado con los datos proporcionados en el cuerpo de la solicitud
        const [rows] = await pool.query('INSERT INTO employee(nombre, salario) VALUES (?, ?)', [nombre, salario]);
        // Devuelve el ID del nuevo empleado y los datos proporcionados en formato JSON
        res.send({
            id: rows.insertId,
            nombre,
            salario,
        });
    } catch (error) {
        // En caso de error, responde con un estado 500 y un mensaje de error
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}

// Función para actualizar un empleado existente
export const updateEmployees = async (req, res) => {
    const { id } = req.params;
    const { nombre, salario } = req.body;
    try {
        // Ejecuta la consulta para actualizar el empleado con el ID proporcionado, usando los datos del cuerpo de la solicitud
        // IFNULL se utiliza para mantener el valor actual si no se proporciona un nuevo valor
        const [result] = await pool.query('UPDATE employee SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id = ?', [nombre, salario, id]);

        // Si no se encuentra el empleado, responde con un estado 404 y un mensaje de error
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Employee not found'
        });

        // Ejecuta una consulta para obtener los datos actualizados del empleado
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
        // Devuelve los datos actualizados del empleado en formato JSON
        res.json(rows[0]);

    } catch (error) {
        // En caso de error, responde con un estado 500 y un mensaje de error
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}

// Función para eliminar un empleado
export const deleteEmployees = async (req, res) => {
    try {
        // Ejecuta la consulta para eliminar el empleado con el ID proporcionado en los parámetros de la solicitud
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);
        // Si no se encuentra el empleado, responde con un estado 404 y un mensaje de error
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Employee not found'
        });

        // Si se elimina correctamente, responde con un estado 204 (sin contenido)
        res.sendStatus(204);
    } catch (error) {
        // En caso de error, responde con un estado 500 y un mensaje de error
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}
