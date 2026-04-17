import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: "No token provided" });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWTSECRET);

        req.user = decoded; // contains { id }

        next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
