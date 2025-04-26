// App.jsx
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";

// Admin Components
import Navbar from './components/ComponentAdmin/Navbar';
import Dashboard from "./pages/PagesAdmin/Dashboard";
import Login from "./components/ComponentAdmin/Login";
import Users from "./pages/PagesAdmin/Users";
import Berita from "./pages/PagesAdmin/Berita";
import EditUser from "./pages/PagesAdmin/EditUser";
import AddBerita from "./pages/PagesAdmin/AddBerita";
import EditBerita from "./pages/PagesAdmin/EditBerita";
import {Sidebar, SidebarItem } from './components/ComponentAdmin/Sidebar';
import {
  Library,
  CircleUserRound ,
  LayoutDashboard,
} from "lucide-react";

// Homepage Components
import HomePage from "./pages//HomePage/HomePage";
// import Admin from "./pages/Admin";
import InfoAkademik from "./pages/InfoAkademik/InfoAkademik";
import "./App.css"; // Import CSS file for global styles
import ScrollToTop from "./components/ComponentUtama/ScrollToTop";


function App() {
  return (
    <Router>
      {/* Navbar di sini jika mau global */}
      {/* <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav> */}
      <ScrollToTop /> {/* Komponen untuk scroll ke atas saat navigasi */}
      {/* Routing: hanya satu komponen ditampilkan berdasarkan path */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/info-akademik/:category/:uuid" element={<InfoAkademik />} />

        {/* Route untuk page login Dashboard*/}
        <Route path="/admin" element={<Login />} />

        {/* Route dengan layout AdminLayout (punya sidebar & navbar) */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/form-ilkom" element={<Berita />} />
          <Route path="/admin/form-ilkom/add" element={<AddBerita />} />
          <Route path="/admin/form-ilkom/edit/:id" element={<EditBerita />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/users/edit/:id" element={<EditUser />} />
        </Route>
        {/* Tambahkan route lain di sini */}
      </Routes>
    </Router>
  );
} 

// Komponen layout untuk page admin 
const AdminLayout = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="flex min-h-screen">
      <div className="fixed left-0 top-0 h-full z-100">
        <Sidebar expanded={expanded} setExpanded={setExpanded}>
          <NavLink to="/admin/dashboard">
            {({ isActive }) => (
              <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" alert active={isActive} />
            )}
          </NavLink>
          <NavLink to="/admin/form-ilkom">
            {({ isActive }) => (
              <SidebarItem icon={<Library size={20} />} text="Form Ilkom" active={isActive} />
            )}
          </NavLink>
          <NavLink to="/admin/users">
            {({ isActive }) => (
              <SidebarItem icon={<CircleUserRound size={20} />} text="Administrators" active={isActive} />
            )}
          </NavLink>
        </Sidebar>
      </div>
      
      <div className={`flex-1 transition-all duration-300 ${expanded ? 'ml-64' : 'ml-20'}`}>
        <Navbar />
        <div className="mt-16 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
