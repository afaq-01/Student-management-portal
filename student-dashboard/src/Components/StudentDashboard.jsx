import React, { useContext } from "react";
import Context from "./Context";

/*const semesters = [
  {
    sem: "Semester 1",
    subjects: [
      { name: "Maths", marks: 78 },
      { name: "Physics", marks: 45 },
      { name: "Chemistry", marks: 67 },
      { name: "English", marks: 81 },
      { name: "Programming", marks: 55 },
    ],
  },
  {
    sem: "Semester 2",
    subjects: [
      { name: "Maths II", marks: 62 },
      { name: "Electronics", marks: 49 },
      { name: "EVS", marks: 71 },
      { name: "OOPS", marks: 84 },
      { name: "Statistics", marks: 58 },
    ],
  },
  {
    sem: "Semester 3",
    subjects: [
      { name: "DSA", marks: 88 },
      { name: "DBMS", marks: 76 },
      { name: "OS", marks: 42 },
      { name: "Java", marks: 69 },
      { name: "Maths III", marks: 51 },
    ],
  },
  {
    sem: "Semester 4",
    subjects: [
      { name: "CN", marks: 73 },
      { name: "SE", marks: 64 },
      { name: "Python", marks: 91 },
      { name: "AI Basics", marks: 48 },
      { name: "UI/UX", marks: 79 },
    ],
  },
  {
    sem: "Semester 5",
    subjects: [
      { name: "ML", marks: 82 },
      { name: "Cloud", marks: 55 },
      { name: "IOT", marks: 46 },
      { name: "Web Dev", marks: 88 },
      { name: "Elective I", marks: 67 },
    ],
  },
  {
    sem: "Semester 6",
    subjects: [
      { name: "Big Data", marks: 74 },
      { name: "Blockchain", marks: 59 },
      { name: "Cyber Sec", marks: 44 },
      { name: "DevOps", marks: 81 },
      { name: "Elective II", marks: 63 },
    ],
  },
  {
    sem: "Semester 7",
    subjects: [
      { name: "AI", marks: 90 },
      { name: "ML Ops", marks: 68 },
      { name: "Research", marks: 72 },
      { name: "Project I", marks: 85 },
      { name: "Elective III", marks: 49 },
    ],
  },
  {
    sem: "Semester 8",
    subjects: [
      { name: "Internship", marks: 92 },
      { name: "Project II", marks: 88 },
      { name: "Seminar", marks: 79 },
      { name: "Ethics", marks: 61 },
      { name: "Elective IV", marks: 53 },
    ],
  },
];
*/
const StudentDashboard = () => {

  const { student } = useContext(Context);
  const semesters = student[0]?.semesters || [];
  const fee = student[0]?.fee || [];
  const fine = student[0]?.fine || []
  const name = student[0]?.name || []

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100">

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Student Dashboard
          </h1>
          <p className="text-gray-600">Welcome back, {name} 👋</p>
        </div>

        {/* Profile + Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
          {/* Profile */}
          <div className="bg-linear-to-br from-red-300 to-purple-100  rounded-2xl shadow-lg p-6 text-center">
            <img
              src="/student.png"
              alt="student"
              className="w-32 h-32 mx-auto rounded-full "
            />
            <h2 className="mt-4 text-xl font-semibold">{name}</h2>
            <p className="text-gray-500">Computer Science</p>
          </div>

          {/* Academic */}
          <div className="bg-linear-to-br from-purple-300 to-purple-100 rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold mb-4">Academic Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Last Semester GPA</span>
                <span className="font-semibold">8.4</span>
              </div>
              <div className="flex justify-between">
                <span>CGPA</span>
                <span className="font-semibold text-green-600">8.62</span>
              </div>
            </div>
          </div>

          {/* Fee */}
          <div className="bg-linear-to-br from-yellow-300 to-purple-100  rounded-2xl shadow-lg p-4 lg:col-span-2">
            <h3 className="font-semibold mb-2">Fee Status</h3>
            <div className="grid grid-cols-2 gap-2">
              {
                fee.semester_1 ? <h1 className="">Semester-1 : Paid</h1> :
                  null
              }
              {
                fee.semester_2 ? <h1 className="">Semester-2 : Paid</h1> :
                  null
              } {
                fee.semester_3 ? <h1>Semester-3 : Paid</h1> :
                  null
              } {
                fee.semester_4 ? <h1>Semester-4 : Paid</h1> :
                  null
              } {
                fee.semester_5 ? <h1>Semester-5 : Paid</h1> :
                  null
              } {
                fee.semester_6 ? <h1>Semester-6 : Paid</h1> :
                  null
              } {
                fee.semester_7 ? <h1>Semester-7 : Paid</h1> :
                  null
              }
               {
                fee.semester_8 ? <h1>Semester-8 : Paid</h1> :
                  null
              }
             


              <p className="text-red-500">Fine : {fine}</p>
            </div>
            <button className="mt-5 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
              Pay Fee
            </button>
          </div>
        </div>

        {/* Semester Records */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Previous Semester Records
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {semesters.map((semester, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-blue-300 to-pink-100  rounded-2xl shadow-lg p-5"
              >
                <h3 className="font-semibold text-indigo-600 mb-4">
                  {semester.name}
                </h3>

                <div className="space-y-2">
                  {semester.subjects.map((sub, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-sm"
                    >
                      <span>{sub.name}</span>
                      <span
                        className={`font-semibold ${sub.marks < 50
                          ? "text-red-500"
                          : "text-green-600"
                          }`}
                      >
                        {sub.marks}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className=" to-purple-100 px-6 pb-6">
        <div className="bg-linear-to-br from-purple-300 to-purple-100  rounded-2xl shadow-md px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Student Portal. All rights reserved.
          </p>

          <div className=" flex gap-4 mt-2 md:mt-0">
            <p>Build By : Afaq Ahmad Khan</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentDashboard;
