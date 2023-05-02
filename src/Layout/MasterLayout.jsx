import Header from "../components/Header/Header";
import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/*================ start wrapper =============== */}
      <div className="wrapper">
        {/*================  start top header  ================ */}
        <header
          className={` transition-all duration-500 shadow-my mb-[60px] z-50 bg-white fixed left-0 right-0 top-0  ${
            isOpen ? " ml-[70px]" : "ml-[260px]"
          }`}
        >
          <Header />
        </header>
        {/*================  end top header  ================ */}

        {/*================  start sidebar ================ */}

        <aside
          className={`shadow-my sidebar-wrapper fixed top-0  bg-[#F7F8FA] left-0 h-screen transform transition-all duration-500 overflow-y-scroll  scrollbar-thin  scrollbar-thumb-gray-light scrollbar-track-gray-100 ${
            isOpen ? " w-[70px]" : " w-[260px]"
          } `}
        >
          <Sidebar
            toggleSidebar={toggleSidebar}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </aside>
        {/*================  end sidebar ================ */}
        <main
          className={` transition-all duration-500 p-4  ${
            isOpen ? " ml-[70px]" : "ml-[260px]"
          }`}
        >
          <Outlet />
        </main>
      </div>
      {/*================ end wrapper =============== */}
    </>
  );
};

export default MasterLayout;
