import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/ComponentAdmin/Navbar';

// Komponen layout yg membungkus semua konten children
export const Layout = ({ children }) => {
    const [expanded] = useState(true);
  
    return (
        <React.Fragment>
            <div className="flex min-h-screen">
                <div className={`flex-1 transition-all duration-300 ${
                    expanded ? 'ml-18' : 'ml-18'}`}>
                    <Navbar />
                    <main className="mt-2 p-6">{children}</main>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Layout;
