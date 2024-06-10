import jwt from "jsonwebtoken";

export const generateToken = (user, secretKey, expiresIn) => {
    return jwt.sign(
        {
            data: user,
        },
        secretKey,
        { expiresIn }
    );
};
