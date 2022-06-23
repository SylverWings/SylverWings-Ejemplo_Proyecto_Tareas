const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    status: Boolean,
    duration: String,
    userId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }]
},  {
    timestamps: true
    }
);

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;