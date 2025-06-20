import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: {type: String, required: true, unique: true}
})

const User = mongoose.model("User", userSchema);

export default User;
