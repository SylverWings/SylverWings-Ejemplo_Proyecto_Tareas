// const jwt = require("jsonwebtoken");

const isSuperAdmin = (req, res, next) => {
    try {
        
        if(req.user_role !== "super_admin"){
            return res.status(401).json({
                success: false,
                message: "Don't have User permition"
            })
        }
        
        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Don't have User permition"
        })
    }
};

module.exports = isSuperAdmin;