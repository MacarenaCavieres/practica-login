import "dotenv/config";
import { Login } from "../models/login.model.js";
import { generateToken } from "../utils/token.login.js";

const secretKey = process.env.SECRET_KEY;

const getOneUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await Login.getUser(username, password);

        if (typeof user === "string") return res.send(user);

        const token = generateToken(username, secretKey, "5m");

        return res.header("authorization", token).send({
            message: "Usuario autenticado",
            token,
            href: `http://localhost:3000/api/v1/products?token=${token}`,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
};

export const loginMethod = {
    getOneUser,
};
