const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try {

        const headerAuth = req.headers.authorization;

        if (!headerAuth) {
            return res.status(401).json({
                message: "Access denied. No token provided."
            });
        }
        const token = headerAuth.split(" ")[1];

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decode;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token."
        });
    }
};

module.exports = verifyToken;