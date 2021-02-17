const User = require('../model/userSchema');
const Task = require('../model/taskSchema');
const jwt = require('jsonwebtoken');
const Bcrypt = require("bcrypt");

const adminController = {
  login(req,res) {
    User.findOne({email: req.body.email}, (err, user)=> {
      if(err || !user) {
        return res.status(401).json({
          error: "User not fount"
        });
      }
      if(!Bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).json({
          error: "User not fount 12"
        });
      }
      const token = jwt.sign({id : user._id}, 'supersecret', {expiresIn: 86400});
      res.status(200).json({
        message: "Login is done !!!",
        token: token,
        data: user,
      }); 
    })
  },

  signUp(req,res) {
    req.body.password = Bcrypt.hashSync(req.body.password, 10);
    const newUser = new User(req.body);
    newUser.save((err, data)=>{
      if(err) {
        return res.status(400).json({
          error: err
        })
      }
      res.status(200).json({
        msg: 'New user is reginstered successfully!!!. Please login to continue.'
      })
    })
  },

  generateTask(req,res) {
    console.log(req.body);
    const newTask = new Task(req.body);
    newTask.save((err, data)=>{
      if(err) {
        return res.status(400).json({
          error: err
        })
      }
      res.status(200).json({
        msg: 'New Task is reginstered successfully!!!.'
      })
    })
  },

  taskInfo(req,res) {
    req.body.created_at = new Date(req.body.created_at);
    req.body.deadline = new Date(req.body.created_at);
    const newTask = new Task(req.body);
    newTask.save((err, data)=>{
      if(err) {
        return res.status(400).json({
          error: err
        })
      }
      res.status(200).json({
        msg: 'New task is reginstered successfully!!!.'
      })
    })
  }
}

module.exports = adminController;