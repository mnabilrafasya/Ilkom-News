import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogOut, reset } from '../../features/AuthSlice';

// Komponen navbar
export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // Fungsi untuk logout
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/admin");
  }

  return (
    <div>
        <nav className="fixed top-0 left-0 right-0 bg-white z-50">
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-end h-18 items-center">
                    <div className="flex items-center">
                        <button 
                            onClick={logout}
                            className="rounded-lg bg-gray-100! text-red-950 transition-all"
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;
