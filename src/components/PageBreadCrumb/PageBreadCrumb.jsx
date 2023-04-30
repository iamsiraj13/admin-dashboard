import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const PageBreadCrumb = ({ name, title }) => {
  const [dromMenu, setDropmenu] = useState(false);
  const toggleDromMenu = () => {
    setDropmenu(!dromMenu);
  };
  return (
    <div className="hidden sm:flex gap-4 items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="pr-3 text-gray font-normal text-[20px] capitalize  border-r ">
          {title && title}
        </div>
        <div>
          <nav>
            <ol className="flex items-center gap-2">
              <li>
                <Link className="text-blue">
                  <CiHome />
                </Link>
              </li>
              <li className="flex items-center gap-2 font-normal text-[#6c757d] text-[16px capitalize">
                <span>
                  <FiChevronRight />
                </span>
                {name && name}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="relative">
        <button
          className="flex items-center capitalize font-normal bg-blue-600 text-white rounded-lg py-[7px] px-3 text-[16px] gap-2 bg-blue hover:bg-blue"
          onClick={toggleDromMenu}
          onBlur={() => setDropmenu(false)}
        >
          setting{" "}
          <span className="text-[18px] font-bold ">
            <MdArrowDropDown />
          </span>
        </button>
        {dromMenu && (
          <div className="absolute transition-all duration-300 block shadow-xl min-w-[200px] py-4 right-0 bg-white">
            <ul className="w-full flex flex-col gap-2 capitalize text-[16px] font-normal text-gray">
              <li className="px-4 hover:bg-slate-200 py-1">action</li>
              <li className="px-4 hover:bg-slate-200 py-1">another action</li>
              <li className="px-4 hover:bg-slate-200 py-1">
                something else here{" "}
              </li>
              <li className="px-4 hover:bg-slate-200 py-1">action</li>
              <li className="px-4 hover:bg-slate-200 py-1">separeted link</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageBreadCrumb;
