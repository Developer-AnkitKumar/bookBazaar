import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

export const verifyToken = (req, res, next) => {
    const token = req.cookies?.jwt || req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized: No token' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid or expired token' });

        req.user = user;
        next();
    });
};  
export const isAdmin = (req, res, next) => {
    if (req.user?.isAdmin) {
        return next();
    }
    return res.status(403).json({ message: 'Access denied: Admins only' });
};
