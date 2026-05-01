
const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
  const token = req.headers["authorization"];
  if(!token) return res.send("No token");

  jwt.verify(token,"secret",(err,decoded)=>{
    if(err) return res.send("Invalid token");
    req.user = decoded;
    next();
  });
};
