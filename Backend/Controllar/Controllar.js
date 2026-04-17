
import jwt from 'jsonwebtoken';
import User_models from '../Models/Model.js';
import { v2 as cloudinary } from 'cloudinary';



const creating_token = (id) => {
    return jwt.sign({ id }, process.env.JWTSECRET)

}

export const Adding_user = async (req, res) => {
  
    try {

        let { name, email, rollId, semesters, fee } = req.body;

        const ses = JSON.parse(semesters);
        let feee = JSON.parse(fee);
        const image = req.file;


        /* ---------- Basic Validation ---------- */

        if (!name || !email || !rollId) {
            return res.status(400).json({
                message: "Name, email, and rollId are required",
            });
        }

        /* ---------- Duplicate Check (MongoDB) ---------- */

        const existing = await User_models.findOne({
            email
        });

        if (existing) {
            return res.status(400).json({
                message: "The user already exists",
            });
        }

        // upload to Cloudinary
        const result = await cloudinary.uploader.upload(image.path, {
            resource_type: "image",

        },);

        const photo_Url = result.secure_url;

        /* ---------- Create Student ---------- */

        const student = await User_models({
            name,
            email,
            rollId,
            photo: photo_Url,
            fee: feee,
            semesters:ses
        });

        await student.save();
        res.send("success");


    } catch (error) {
        res.json({ message: error });

    }

};

export const Getting_student_data = async (req, res) => {

    try {
        const email = req.body
        const student = await user_model.findOne(email);

        if (student) {
            const Token = creating_token(student._id);
            res.json({ student, Token })
        } else {
            return res.status(404).json({ message: "Student not found" });
        }

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const Login_student = async (req, res,) => {
    const authHeader = req.headers.authorization; // lowercase!
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1]; // "Bearer token_here"

    try {
        const decoded = jwt.verify(token, process.env.JWTSECRET); // verify token
        const id = decoded.id;

        const student_data = await user_model.findById(id);
        res.send(student_data)


    } catch (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};


export const All_Student = async (req, res) => {
    try {
        const student_data = await User_models.find();
        res.send(student_data);
    } catch (error) {

    }

}

export const Delete_Student = async (req, res) => {
    const { id } = req.body;

    try {
        const Deleting = await User_models.findByIdAndDelete(id);
        await Deleting.save()
        res.send("Student deleted");

    } catch (error) {
        res.send(error)

    }

}

export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { semesters, fee, fine } = req.body;



        const student = await User_models.findById(id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        /* ================= UPDATE SEMESTERS ================= */
        if (semesters) {
            student.semesters = semesters;

        }

        /* ================= UPDATE FEE ================= */
        if (fee) {
            student.fee = fee;
        }

        /* ================= UPDATE FINE ================= */
        if (fine !== undefined) {
            student.fine = fine;
        }

        await student.save();
        res.json({ message: "Updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};