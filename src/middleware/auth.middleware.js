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
export const validateRegister = (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
    next();
};

export const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    next();
};

export const isAdmin = (req, res, next) => {
    if (req.user?.isAdmin) {
        return next();
    }
    return res.status(403).json({ message: 'Access denied: Admins only' });
};
