const jwt = require("jsonwebtoken");
const JWT_SECRET = "12345";

const verifyJwt = (req, res, next) => {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    return res.status(401).json({ message: "No token provided" });
  }
  const token = authorization.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ message: "Invalid or expired token" });
    req.user = decoded.user;
    next();
  });
};
module.exports = verifyJwt;
