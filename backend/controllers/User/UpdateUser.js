const userModel = require("../../models/UserModel");

const updateUser = async (req, res) => {
    try {
        const sessionUser = req.userId;
        const { userId, email, name, role } = req.body;

        const payload = {
            ...(email && { email }),
            ...(name && { name }),
            ...(role && { role })
        };

        const user = await userModel.findById(sessionUser);


        const updatedUser = await userModel.findByIdAndUpdate(userId, payload, { new: true });

        res.json({
            data: updatedUser,
            message: "User Updated",
            success: true,
            error: false
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = updateUser;