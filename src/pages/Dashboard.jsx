import React from 'react';
import img1 from '../assets/file.png';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="w-80 h-screen bg-blue-950 flex flex-col font-outfit">
      <div className=" flex p-6 text-2xl font-bold bg-gradient-to-r from-blue-100  to-blue-500 font-[outfit] pt-8">
        Dashboard
        <img src={img1} alt="Logo" className=" absolute -mt-7 ml-42 w-20 h-20 " />
      </div>

      <nav className="flex flex-col gap-4 p-6  divide-y divide-blue-400 text-lg text-white font-[outfit]">
        <Link to="/admin-setting"  className="text-left hover:bg-gradient-to-r from-blue-100 to-blue-500 px-3 py-2 rounded block">Admin Setting</Link>
        <Link to="/student"  className="text-left hover:bg-gradient-to-r from-blue-100  to-blue-500 px-3 py-2 rounded">Student Management</Link>
        <button className="text-left hover:bg-gradient-to-r from-blue-100  to-blue-500 px-3 py-2 rounded">Course Management</button>
        <button className="text-left hover:bg-gradient-to-r from-blue-100  to-blue-500 px-3 py-2 rounded">Other 1</button>
        <button className="text-left hover:bg-gradient-to-r from-blue-100  to-blue-500 px-3 py-2 rounded">Other 2</button>
        <button className="text-left hover:bg-gradient-to-r from-blue-100  to-blue-500 px-3 py-2 rounded">Other 3</button>
      </nav>
    </div>
  );
}

export default Dashboard;
