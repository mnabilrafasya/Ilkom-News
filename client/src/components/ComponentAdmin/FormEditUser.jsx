import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

// Komponen form edit userAdmin
const FormEdituser = () => {

  // State input form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect untuk fetch data user berdasarkan ID saat komponen pertama kali dirender
  useEffect(() => {
    const getUserById = async () => {
      try {

        // Ambil data user berdasarkan ID
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  // Fungsi handle form submit
  const updateUser = async (e) => {
    e.preventDefault();
    try {

      // Kirim data form ke backend 
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });

      // Redirect setelah berhasil
      navigate("/admin/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  // Tampilan form edit user (UI)
  return (
    <div className="w-full min-h-screen flex flex-col px-10 md:px-8 max-w-none">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-red-950">Administrators</h2>
        <h3 className="text-md font-medium text-gray-800 mt-2">Edit User Admin</h3>
      </div>

      <div className="bg-white rounded-xl shadow-md w-full max-w-full p-10">
        <form className="space-y-5 w-full" onSubmit={updateUser}>
         <p className="text-center text-gray-800">{msg}</p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Password"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Confirm Password</label>
              <input
                type="password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          
          <div className="flex">
            <button
              type="submit"
              className="px-6 py-3 bg-red-900! hover:bg-red-950! text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEdituser;