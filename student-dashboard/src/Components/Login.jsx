import { User, Lock, GraduationCap } from "lucide-react";
import axios from 'axios';
import { useContext } from "react";
import Context from "./Context";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {

    const { email, setEmail, password, setPassword, setStudent, student } = useContext(Context);

    const Navigate=useNavigate();

    const Handle_submit = async () => {

        try {
            const res = await axios.post('http://localhost:5000/api/Getting_data', { email })
            const Token = res.data.Token;
            localStorage.setItem("Token", Token);
            const abc=typeof(res.data.student);
            setStudent([res.data.student]);
           Navigate('/dashboard')
           
        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-white-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                {/* Header */}
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-indigo-100 p-4 rounded-full mb-4">
                        <GraduationCap className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Student Portal
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Sign in to watch records
                    </p>
                </div>

                {/* Form */}
                <center className="space-y-5">

                    {/* Email */}
                    <div>
                        <h1 className="text-lg mb-2 font-medium text-gray-600 text-center">
                            Email/Gmail
                        </h1>
                        <div className="relative mt-1">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="student@university.edu"
                                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>

              

                 

                    {/* Button */}
                    <button
                        onClick={Handle_submit}
                        className="w-[100px] bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition duration-200 shadow-md"
                    >
                        Login
                    </button>
                </center>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Note : The user will only see his record
                </p>
            </div>
        </div>
    );
}

export default Login;