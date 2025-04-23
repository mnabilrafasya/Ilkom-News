import React, { createContext, useContext } from 'react';
import logo from '/logoBEM.png';
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";


const SidebarContext = createContext();

// Komponen sidebar
export const Sidebar = ({children, expanded, setExpanded}) => {
  // const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen w-full">
        <nav className="h-full flex flex-col bg-white shadow-sm">
            <div className="p-4 pb-2 flex justify-between items-center">
                <img 
                  src={logo} 
                  alt="Logo BEM KM FASILKOM" 
                  className={`overflow-hidden transition-all ${
                    expanded ? "w-18" : "w-0"
                }`}
                />
                {expanded && (
                  <h2 className="text-red-950 text-lg font-medium ml-2 px-2 transition-all">
                     BEM KM FASILKOM
                  </h2>
                )}
                <button 
                  onClick={() => setExpanded(curr =>!curr)}
                  className="p-3 ml-3 rounded-lg bg-gray-50! hover:bg-gray-100! text-red-950!">
                    {expanded ? <ChevronFirst size={20} />: <ChevronLast size={20} />}
                </button>
            </div>

            <SidebarContext.Provider value={{expanded}}>
              <ul className="flex-1 px-3">{children}</ul>
            </SidebarContext.Provider>

            {/* <div className="flex p-3">
              <img 
                src={logo} 
                alt="" 
                className="w-12 h-12 rounded-md ml-3"
              />
              <div 
                className={`flex justify-between items-center overflow-hidden transition-all
                  ${expanded ? "w-52 ml-3" : "w-0"}
              `}
              >

              <div className="leading-4">
                <h4 className="font-semibold text-red-950">ADMIN</h4>
                <span className="text-xs text-gray-900">admin@ilkomnews.com</span>
              </div>
            </div>
          </div> */}
        </nav>
    </aside>
  );
};

// Komponen untuk item dalam sidebar
export const SidebarItem = ({icon, text, active, alert}) => {
  const {expanded} = useContext(SidebarContext);
  return(
    <li 
      className={`
        relative flex items-center py-2 px-3 my-1 ml-3 font-medium rounded-md cursor-pointer transition-colors group
        ${
          active
          ? "bg-gradient-to-tr from-red-50 to-red-50 text-red-800 ml-3"
          : "hover:bg-gray-100 text-red-950"
        }
    `}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${
        expanded ? "w-52 ml-3" : "w-0"
      }`}
      >
        {text}
      </span>
      {alert && (
        <div 
          className={`absolute right-2 w-2 h-2 rounded bg-red-950 ${expanded ? "" : "top-2"
          }`} 
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-red-100 text-red-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
};


export default Sidebar;
