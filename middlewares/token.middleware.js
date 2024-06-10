import "dotenv/config";
import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;

export const validateToken = (req, res, next) => {
    const token = req.headers["authorization"] || req.query.token;

    if (!token) return res.send("Acceso denegado");

    jwt.verify(token, secretKey, (err, data) => {
        if (err) {
            return res.send("Acceso denegado, token expirado o incorrecto");
        } else {
            req.username = data;
            next();
        }
    });
};
