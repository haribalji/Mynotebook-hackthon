var jwt = require("jsonwebtoken");
// const JWT_SECERT="#";
const JWT_SECERT = process.env.JWT_SECERT;//here you need to have your key from .env file ||

const getuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data; // Set the user data (ID)
    next();
  } catch (error) {
    res.status(401).send({ error: "Invalid authentication token" });
  }
};

module.exports = getuser;
