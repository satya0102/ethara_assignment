
const db = require("../config/db");

exports.createTask = (req,res)=>{
  const {title} = req.body;
  db.query("INSERT INTO tasks (title,status) VALUES (?,?)",
  [title,"Pending"], ()=> res.send("Task added"));
};

exports.getTasks = (req,res)=>{
  db.query("SELECT * FROM tasks",(err,result)=>res.json(result));
};

exports.updateTask = (req,res)=>{
  const {status} = req.body;
  db.query("UPDATE tasks SET status=? WHERE id=?",
  [status,req.params.id], ()=>res.send("Updated"));
};
