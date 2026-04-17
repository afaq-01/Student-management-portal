import express from 'express';
import { Adding_user, All_Student, Delete_Student, Getting_student_data, Login_student,updateStudent } from '../Controllar/Controllar.js';
import isAdmin from '../Admin_auth/Admin_auth.js';
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import upload from '../Config/multer.js';

const Router = express.Router();

Router.post('/adding',ClerkExpressRequireAuth(),isAdmin,upload.single("photo"), Adding_user);
Router.post('/Getting_data',Getting_student_data)
Router.post('/login_student',Login_student)
Router.get('/All_student',All_Student);
Router.post('/Delete_student',Delete_Student);
Router.post("/students/:id", updateStudent);




export default Router;
