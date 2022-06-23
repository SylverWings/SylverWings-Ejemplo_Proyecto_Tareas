const User = require("../models/User");
const userController = {};

userController.getAll = async (req, res) => {

    try {
        const users = await User.find().select(['name', '-_id']);        
        return res.status(200).json({
            success: true,
            message: 'Get all users retrivered successfully',
            data: users
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retriving users: ',
            error: error.message
        })
    }
};

userController.getUserById = async(req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);

        if(!user){
            return res.status(404).json({
                success: true,
                message: "User not found",
                data: []
            })
        };

        return res.status(200).json({
            success: true,
            message: "User found",
            data: user
            })
    }catch (error){
        if(error?.message.includes('Cast to ObjectId failed')){
            return res.status(404).json({
                success: true,
                message: "User not found"
            })
        };
        return res.status(500).json({
            success: false,
            message: "User not found",
            data: error?.message || error
        })

    }
};

userController.update = async(req, res) => {
    try{
        const filter = {_id: req.params.id};

        if(req.body.name === "" || req.body.name == null){
            return res.status(400).json({
                success: false,
                message: "Campo name es obligatorio",                
            })
        }
        
        const update = {
            name: req.body.name, 
            // email: req.body.email, 
            // password: req.body.password
        };

        const userUpdated = await User.findOneAndUpdate(filter, update, {new: true});
        // const userUpdated = await User.findOne(filter);

        return res.status(200).json({
            success: true,
            message: "User update success",
            data: userUpdated
        });    
    }catch (error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error detected",
            data: error?.message || error
        })
    }
};

userController.delete = async(req, res)=>{
    try{
        const id = req.params._id;
        const userDeleted = await User.deleteOne(id);
        return res.status(200).json({
            success: true,
            message: "Delete user successfully",
            data: userDeleted
            })
    }catch (error){
        return res.status(500).json({
            success: false,
            message: "Error detected",
            data: error?.message || error
        })
    }

}

module.exports = userController;