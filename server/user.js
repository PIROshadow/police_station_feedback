import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    district: {type: String,required: true},
    taluka: {type: String,required: true},
    policestation: {type: String,required: true},
  },
  { timestamps: true }
);

export default model("User", UserSchema);