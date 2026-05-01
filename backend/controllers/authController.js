
const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = (req,res)=>{
  const {name,email,password,role} = req.body;
  const hash = bcrypt.hashSync(password,8);

  db.query("INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)",
  [name,email,hash,role], (err)=>{
    if(err) return res.send(err);
    res.send("Registered");
  });
};

exports.login = (req,res)=>{
  const {email,password} = req.body;

  db.query("SELECT * FROM users WHERE email=?",[email],(err,result)=>{
    if(result.length===0) return res.send("No user");

    const user = result[0];
    if(!bcrypt.compareSync(password,user.password))
      return res.send("Wrong password");

    const token = jwt.sign({id:user.id,role:user.role},"secret");
    res.json({token});
  });
};
