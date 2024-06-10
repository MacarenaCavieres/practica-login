import { pool } from "../database/connection.js";
import bcrypt from "bcrypt";

const getUser = async (username, password) => {
    try {
        const query = {
            text: "select password from usuarios where username = $1",
            values: [username],
        };

        const { rows } = await pool.query(query);
        const originalPassword = rows[0].password;

        const match = await bcrypt.compare(password, originalPassword);

        if (!match) {
            return "Contraseña no coincide";
        } else {
            return "contraseñas coinciden";
        }
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};

export const Login = {
    getUser,
};
