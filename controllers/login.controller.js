import { Login } from "../models/login.model.js";

const getOneUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const data = await Login.getUser(username, password);
        return res.send(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
};

export const loginMethod = {
    getOneUser,
};

// const postToken = (req,res)=>{
//     const {username,password} = req.body

// }
