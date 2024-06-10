import "dotenv/config";
import { Login } from "../models/login.model.js";
import { generateToken, verifyToken } from "../utils/token.login.js";

const secretKey = process.env.SECRET_KEY;

const getOneUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const data = await Login.getUser(username, password);

        if (typeof data === "string") return res.send(data);

        const token = generateToken(username, secretKey, "5m");

        return res.header("authorization", token).json({
            message: "Usuario autenticado",
            token,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
};

// const postToken = (req,res)=>{
//     const {username,password} = req.body

// }
export const loginMethod = {
    getOneUser,
};
