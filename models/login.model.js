import { pool } from "../database/connection.js";
import bcrypt from "bcrypt";

const getUser = async (username, password) => {
    try {
        const query1 = {
            text: "select * from usuarios where username = $1",
            values: [username],
        };

        const { rows: filas } = await pool.query(query1);

        if (filas.length === 0) return "Usuario o contraseña incorrecta";

        const query = {
            text: "select password from usuarios where username = $1",
            values: [username],
        };

        const { rows } = await pool.query(query);

        const originalPassword = rows[0].password;

        const match = await bcrypt.compare(password, originalPassword);

        if (!match) return "Usuario o contraseña incorrecta";

        return filas[0];
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};

export const Login = {
    getUser,
};
