import React from 'react';
import { useSelector } from 'react-redux';

export const Welcome = () => {

   // Mengambil data 'user' dari state.auth yang ada di Redux store
  const {user} = useSelector((state) => state.auth);
  return (
    <div>
        <h2 className="title text-red-950 font-bold text-4xl">Dashboard</h2>
        <h2 className="subtitle text-gray-900 font-medium mt-4">Welcome Back <strong>{user && user.name}</strong></h2>
    </div>
  );
};

export default Welcome;
