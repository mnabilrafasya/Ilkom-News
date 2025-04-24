import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Userlist = () => {
  const [users, setUsers] = useState([]);

  // Hook useEffect untuk memanggil getUsers saat komponen pertama kali dimuat
  useEffect(()=>{
    getUsers();
  }, []);

   // Ambil data user dari API
  const getUsers = async () =>{
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
    setUsers(response.data);
  };

  // Menghapus pengguna berdasarkan userId
  // const deleteUser = async (userId) => {
  //   await axios.delete(`${import.meta.env.VITE_API_URL}/userId`);
  //   getUsers();
  // };

  return (
    <div>
        <h2 className="title text-red-950 font-medium text-4xl">Administrators</h2>
        <div className="overflow-x-auto w-full rounded-lg mt-8 border border-gray-200">
        <table className="min-w-full bg-white rounded-md">
            <thead className="bg-gray-50 text-gray-800 font-normal">
                <tr>
                    <th className="w-16 p-4 text-left font-medium">No</th>
                    <th className="w-1/4 p-4 text-left font-medium">Name</th>
                    <th className="w-1/3 p-4 text-left font-medium">Email</th>
                    <th className="w-28 p-4 text-left font-medium">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
            {users.map((user, index) => (
            <tr key={user.uuid}>
              <td className="p-4 text-gray-800 text-left">{index + 1}</td>
              <td className="p-4 text-gray-800 text-left">{user.name}</td>
              <td className="p-4 text-gray-800 text-left">{user.email}</td>
              <td className="p-4 text-gray-800 text-left">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                    <Link 
                        to={`/admin/users/edit/${user.uuid}`} 
                        className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white! font-medium rounded-lg transition-colors duration-200"
                    >
                        Edit
                    </Link>
                    {/* <button 
                        onClick={()=> deleteUser(user.uuid)}
                        className="px-3 py-2 bg-red-900! hover:bg-red-950! text-white font-medium rounded-lg transition-colors duration-200"
                    >
                        Delete
                    </button> */}
                </div>
              </td>
            </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default Userlist;