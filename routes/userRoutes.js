const express = require("express");
const router = express.Router();
const { signupUser, loginUser, forgotPassword, getAllUsers, verifyOtp, resetPassword, deleteUser } = require("../controllers/userController");
const { authenticate } = require("../controllers/userController");


router.delete("/delete-user/:id", authenticate, deleteUser);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/forgot-pass", forgotPassword);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password" , resetPassword);
router.get("/get-all-users", authenticate, getAllUsers);

module.exports = router;
