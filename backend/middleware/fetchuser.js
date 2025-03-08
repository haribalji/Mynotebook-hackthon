var jwt = require("jsonwebtoken");
// const JWT_SECERT="#";
const JWT_SECERT = process.env.JWT_SECERT;//here you need to have your key from .env file ||

const fetchuser = (req, res, next) => {
  // Getting the token from the req's header section
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  
  try {
    const data = jwt.verify(token, JWT_SECERT);
    req.user = data; // Here it returns the user ID
    next(); // Move to the next middleware function
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
