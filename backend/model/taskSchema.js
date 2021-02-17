const mongoose = require('mongoose');
const schema = mongoose.Schema;

const task = new schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    //New,Assigned, Done
  },
  assigned_to: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
  },
  deadline: {
    type: Date,
  }
})

const Task = mongoose.model('Task', task);
module.exports = Task;