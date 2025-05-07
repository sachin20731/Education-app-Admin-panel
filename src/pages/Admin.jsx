import React from 'react';
import Dashboard from './Dashboard';

function Admin() {
  // Dummy data – replace this with real data from backend later
  const admins = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  ];

  const handleDelete = (id) => {
    console.log('Delete admin with ID:', id);
    // Add delete logic here
  };

  const handleUpdate = (id) => {
    console.log('Update admin with ID:', id);
    // Add update logic here
  };

  return (
    <div className="flex h-screen font-[outfit]">
      <div className="w-80">
        <Dashboard />
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">All Admins</h1>

        <table className="w-full table-auto border-collapse bg-white shadow rounded-lg">
          <thead className="bg-blue-200">
            <tr>
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id} className="hover:bg-amber-100">
                <td className="border px-4 py-2">{admin.id}</td>
                <td className="border px-4 py-2">{admin.name}</td>
                <td className="border px-4 py-2">{admin.email}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleUpdate(admin.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(admin.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
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

export default Admin;
