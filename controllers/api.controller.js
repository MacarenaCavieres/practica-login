import { Api } from "../models/api.model.js";

const getAllApi = async (req, res) => {
    try {
        const data = await Api.getApi();

        return res.json({
            username: req.username,
            data,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false, msg: "Error de servidor" });
    }
};

export const apiMethod = {
    getAllApi,
};
