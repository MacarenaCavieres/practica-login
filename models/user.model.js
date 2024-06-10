import { pool } from "../database/connection.js";

const postOne = async ({ username, password }) => {
    const query = {
        text: "insert into usuarios(username,password) values ($1, $2) returning *;",
        values: [username, password],
    };
    const { rows } = await pool.query(query);

    return rows[0];
};

export const User = {
    postOne,
};
