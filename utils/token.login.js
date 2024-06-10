import jwt from "jsonwebtoken";

export const generateToken = (user, secretKey, expiresIn) => {
    return jwt.sign(
        {
            user,
        },
        secretKey,
        {
            expiresIn,
        }
    );
};
