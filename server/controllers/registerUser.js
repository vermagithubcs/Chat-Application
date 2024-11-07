const UserModel = require("../models/UserModel");
const bcryptjs = require('bcryptjs');

async function registerUser(req, res) {
    try {
        // Use object destructuring to access properties from req.body
        const { name, email, password, profile_pic } = req.body;

        // Check if a user with this email already exists
        const checkEmail = await UserModel.findOne({ email });

        if (checkEmail) {
            return res.status(400).json({
                message: "A user with this email already exists",
                error: true
            });
        }

        // Generate a salt and hash the password
        const salt = await bcryptjs.genSalt(10); // Note: Use genSalt, not getSalt
        const hashPassword = await bcryptjs.hash(password, salt);

        // Create a new user object with the hashed password
        const payload = {
            name,
            email,
            profile_pic,
            password: hashPassword
        };

        // Save the new user to the database
        const user = new UserModel(payload);
        const userSave = await user.save();

        // Return a success response
        return res.status(201).json({
            message: "User created successfully",
            data: userSave,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
}

module.exports = registerUser;
