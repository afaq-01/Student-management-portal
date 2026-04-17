import Context from "./Components/Context";
import { useState, useEffect } from "react";
import StudentDashboard from "./Components/StudentDashboard";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import ProtectedRoute from "./Components/Protected_Routes";



const App = () => {
  const [email, setEmail] = useState('testing');
  const [password, setPassword] = useState('');
  const [student, setStudent] = useState([]);

  const values = {
    email,
    setEmail,
    password,
    setPassword,
    setStudent,
    student
  }

  const fetching_data = async (checking_token) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/login_student',
        {}, // request body (if any)
        {
          headers: {
            Authorization: `Bearer ${checking_token}`,
          },
        }
      );
      setStudent([res.data])

    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(
    () => {
      const checking_token = localStorage.getItem('Token');

      if (checking_token) {
        fetching_data(checking_token)
      }

    }, [])

  return (
    <>
      <Context.Provider value={values}>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            } />
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  )
}

export default App;