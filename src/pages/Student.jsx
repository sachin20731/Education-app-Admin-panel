import React, { useState } from 'react';
import Dashboard from './Dashboard';

function Student() {
  const [students, setStudents] = useState([
    { id: 101, name: 'Michael Scott', email: 'michael@dundermifflin.com' },
    { id: 102, name: 'Pam Beesly', email: 'pam@dundermifflin.com' },
    { id: 103, name: 'Jim Halpert', email: 'jim@dundermifflin.com' },
    { id: 101, name: 'Michael Scott', email: 'michael@dundermifflin.com' },
    { id: 102, name: 'Pam Beesly', email: 'pam@dundermifflin.com' },
    { id: 103, name: 'Jim Halpert', email: 'jim@dundermifflin.com' },
    { id: 101, name: 'Michael Scott', email: 'michael@dundermifflin.com' },
    { id: 102, name: 'Pam Beesly', email: 'pam@dundermifflin.com' },
    { id: 103, name: 'Jim Halpert', email: 'jim@dundermifflin.com' },
    { id: 101, name: 'Michael Scott', email: 'michael@dundermifflin.com' },
    { id: 102, name: 'Pam Beesly', email: 'pam@dundermifflin.com' },
    { id: 103, name: 'Jim Halpert', email: 'jim@dundermifflin.com' },
    { id: 101, name: 'Michael Scott', email: 'michael@dundermifflin.com' },
    { id: 102, name: 'Pam Beesly', email: 'pam@dundermifflin.com' },
    { id: 103, name: 'Jim Halpert', email: 'jim@dundermifflin.com' },
  ]);

  

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };



  

  return (
    <div className="flex h-screen font-[outfit]">
      <div className="w-80">
        <Dashboard />
      </div>

      <div className="flex-1 p-6 overflow-auto">
      <div>
        <h1 className="text-2xl font-bold mb-4">All Students</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mb-4 font-bold">
          Add Student +
        </button>
      </div>

        <table className="w-full table-auto border-collapse bg-white shadow rounded-lg mb-6">
          <thead className="bg-green-200">
            <tr>
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-lime-100">
                <td className="border px-4 py-2">{student.id}</td>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">
                 
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded ml-2"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

       
      </div>
    </div>
  );
}

export default Student;
