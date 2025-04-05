const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, "SECRET_KEY", (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user;
    next();
  });
};
const authorizeAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") return res.sendStatus(403);
  next();
};

module.exports = { authenticate, authorizeAdmin };
