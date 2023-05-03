import Header from "../components/Header/Header";
import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import SidebarMobile from "../components/Sidebar/SidebarMobile";

const MasterLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/*================ start wrapper =============== */}
      <div className="wrapper">
        {/*================  start top header  ================ */}
        <header
          className={`transition-all duration-500 shadow-my mb-[60px] z-50 bg-white fixed left-0 right-0 top-0  ${
            isOpen ? " lg:ml-[70px]" : "lg:ml-[260px]"
          }`}
        >
          <Header setShow={setShow} />
        </header>
        {/*================  end top header  ================ */}

        {/*================  start sidebar ================ */}

        <aside
          onBlur={() => setShow(false)}
          className={`z-[999] hidden lg:block
              shadow-my sidebar-wrapper fixed top-0  bg-[#F7F8FA] left-0 min-h-screen h-full transform transition-all duration-500 overflow-y-scroll  scrollbar-thin  scrollbar-thumb-gray-light scrollbar-track-gray-100 ${
                isOpen ? " md:w-[70px]  " : " md:w-[260px]"
              } `}
        >
          <Sidebar
            toggleSidebar={toggleSidebar}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </aside>
        <aside
          className={`z-[999]   lg:hidden   ${
            show === true ? "translate-x-0" : " translate-x-[-100%]"
          }
              shadow-my sidebar-wrapper fixed top-0  bg-[#F7F8FA] left-0 min-h-screen h-full transform transition-all duration-500 overflow-y-scroll  scrollbar-thin  scrollbar-thumb-gray-light scrollbar-track-gray-100  `}
        >
          <SidebarMobile setShow={setShow} />
        </aside>
        {/*================  end sidebar ================ */}
        <main
          className={` transition-all duration-500 p-2 sm:p-4  ${
            isOpen ? " lg:ml-[70px]" : "lg:ml-[260px]"
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
