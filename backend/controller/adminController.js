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
      });
    })
  },

  generateTask(req,res) {
    if(req.body.objectId) {
      Task.updateOne({_id: req.body.objectId}, req.body,(err,data)=> {
        if(err) {
          throw err;
        }
        res.status(200).json({
          msg: "The requested task has been Updated",
          data
        })
      });
    } else {
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
      });
    }
  },

  async allTaskInfo(req,res) {
    const sortData = req.query.sort ? JSON.parse(req.query.sort) : {};
    try {
      const task = await Task.find({}).sort({[sortData.sortKey]: sortData.sort});
      res.status(200).json({
        taskData:task
      })
    } catch (err){
      return res.status(400).json({
        error: err
      })
    }
  },

  async allDeveloperInfo(req,res) {
    const sortData = req.query.sort ? JSON.parse(req.query.sort) : {};
    try {
      const task = await User.find({}).sort({[sortData.sortKey]: sortData.sort});
      res.status(200).json({
        userData:task
      })
    } catch (err){
      return res.status(400).json({
        error: err
      })
    }
  },

  deleteTask(req,res) {
    Task.deleteOne({_id: req.query.id}, (err, data)=>{
      if(err) {
        throw err;
      }
      res.status(200).json({
        msg: "The requested task has been deleted",
        data
      })
    });
  }
}

module.exports = adminController;