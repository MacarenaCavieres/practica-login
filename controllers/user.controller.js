import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

const postOneUser = async (req, res) => {
    const { username, password_ } = req.body;
    if (!username || !password_)
        return res.status(401).json({ ok: false, msg: "Todos los campos obligatorios" });

    try {
        const password = await bcrypt.hash(password_, 10);
        const newUser = {
            username,
            password,
        };

        await User.postOne(newUser);

        return res.json({
            msg: "Usuario registrado con éxito",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
};

export const userMethod = {
    postOneUser,
};
