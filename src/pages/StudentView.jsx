import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import img3 from '../assets/student.png';
// import axios from 'axios';

function StudentView() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    enrolledCourses: [],
  });

  useEffect(() => {
    setTimeout(() => {
      setStudent({
        name: 'Dhanushka Munasinghe',
        email: 'munasinghe20731@gmail.com',
        enrolledCourses: ['Web Development', 'Data Structures', 'Machine Learning'],
      });
    }, 1000);
  }, []);

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 font-inter">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-2xl border-r border-gray-200 backdrop-blur-xl bg-opacity-80">
        <Dashboard />
      </div>

      {/* Main Panel */}
      <div className="flex-1  p-10">
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight drop-shadow-md">🌌 Student Details</h1>
          <p className="text-gray-600 mt-2 text-lg italic">"A cosmic view of student performance, simplified."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
          {/* Tile 1: Student Info */}
          <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex items-center gap-6 transform hover:scale-105 transition duration-500">
            <img className="w-28 h-28 rounded-full object-cover border-4 border-blue-400 shadow-md" src={img3} alt="Student" />
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-1">{student.name || 'Loading...'}</h2>
              <p className="text-gray-600 text-sm">Email: <span className="text-gray-800 font-semibold">{student.email || 'Loading...'}</span></p>
              <span className="mt-2 inline-block bg-green-200 text-green-800 text-xs px-4 py-1 rounded-full font-bold shadow-sm animate-pulse">🟢 ONLINE</span>
            </div>
          </div>

          {/* Tile 2: Enrolled Courses */}
          <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition duration-500">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4 border-b pb-2">🚀 Enrolled Courses</h3>
            <ul className="space-y-3 text-gray-800">
              {student.enrolledCourses.length > 0 ? (
                student.enrolledCourses.map((course, index) => (
                  <li key={index} className="bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200 px-4 py-2 rounded-lg shadow hover:shadow-lg">{course}</li>
                ))
              ) : (
                <li>Loading...</li>
              )}
            </ul>
          </div>

          {/* Tile 3: Progress Summary */}
          {/* <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition duration-500">
            <h3 className="text-2xl font-bold text-yellow-600 mb-4 border-b pb-2">📊 Galactic Progress</h3>
            <p className="text-gray-700 mb-2">Completed Modules: <strong>3 / 5</strong></p>
            <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
              <div className="bg-gradient-to-r from-green-400 to-green-700 h-4 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
            <p className="text-gray-700">Last Active: <strong>2 days ago</strong></p>
            <p className="text-gray-700">Current Grade: <strong className="text-green-700">A-</strong></p>
          </div> */}

          {/* Tile 4: Upcoming Events */}
          {/* <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition duration-500">
            <h3 className="text-2xl font-bold text-pink-600 mb-4 border-b pb-2">🪐 Upcoming Events</h3>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-2">
                <span>📝</span>
                <span><strong>Assignment:</strong> Web Dev - <span className="text-blue-600">May 20</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span>📚</span>
                <span><strong>Quiz:</strong> Machine Learning - <span className="text-blue-600">May 23</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span>🎯</span>
                <span><strong>Demo Day:</strong> Final Project - <span className="text-blue-600">May 25</span></span>
              </li>
            </ul>
            <div className="mt-6 text-right">
              <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-md transition-all">📥 Download Schedule</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default StudentView;