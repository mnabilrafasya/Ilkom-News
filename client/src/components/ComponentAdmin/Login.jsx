import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { } from "../../features/AuthSlice";
import { LoginUser, reset } from '../../features/AuthSlice';
import logo from '/logoBEM.png';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, isError, isSuccess, isLoading, message} = useSelector(
    (state) => state.auth
  );

  // Cek apakah user sdh login atau berhasil login
  useEffect(()=>{
    if(user || isSuccess){
        navigate('/admin/dashboard');
    }
    dispatch(reset());
  },[user, isSuccess, dispatch, navigate]);

  // Fungsi untuk form submit
  const Auth = (e) =>{
    e.preventDefault(); // Mencegah reload halaman saat submit form
    if (!email || !password) { // Validasi apakah input email dan password sudah diisi
      alert("Please fill all fields");
      return;
    }
    dispatch(LoginUser({ email, password })); // Kirim request login ke Redux store
  };

  return (
    <div className="fixed inset-0 bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="p-5">
            <img 
                src={logo} 
                alt="" 
                className="w-30 h-30 mx-auto"
            />
        </div>
        <form onSubmit={Auth} className="bg-white rounded-lg shadow-xl p-7 transform transition-all">
            <div className="text-center p-7">
                <h2 className="text-2xl text-red-950 font-bold mb-2">Welcome Back</h2>
                <p className="text-gray-500">Enter your username & password to login</p>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Email"
                    />
            </div>
            <div className="mb-8">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Password"
                    />
            </div>
            <div className="mb-8">
                {isError && <p className=" p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-md">{message}</p>}
            </div>
            <button 
                type="submit"
                className="w-full text-white font-bold bg-red-900! hover:bg-red-950! py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
            >
                {isLoading ? "Loading..." : "Login"}
            </button>
        </form>
      </div>
    </div>
  );
};

export default Login;