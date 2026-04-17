import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
 {
  name:String,
  rollId:String,
  email:String,
  fee:Object,
  semesters:Array,
  photo:String,
  fine:Number
 }
);

const User_models = mongoose.model("Student", subjectSchema);

export default User_models;