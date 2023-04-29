import React from "react";

import {
  BsSearch,
  BsGrid3X3GapFill,
  BsFillChatRightFill,
  BsFillBellFill,
} from "react-icons/bs";
const Header = () => {
  return (
    <div className="pl-4 h-[60px]   w-full flex items-center justify-between pr-4">
      <form className="w-[30%] flex items-center bg-[#F9FAFB] py-2 px-4 rounded-3xl ">
        <div className="text-gray pr-4 ">
          <BsSearch />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-[30%] focus:outline-none leading-[1.5] text-gray"
        />
      </form>
      <div className="flex items-center gap-6">
        <div>
          <BsGrid3X3GapFill />
        </div>
        <div className="relative">
          <BsFillChatRightFill />
          <span className="absolute -top-[10px] -right-[8px] font-semibold bg-[#F50D0D] text-white text-[12px] w-[15px] h-[15px] flex  items-center justify-center rounded-full">
            2
          </span>
        </div>
        <div className="relative">
          <BsFillBellFill />
          <span className="absolute -top-[10px] -right-[8px] font-semibold bg-[#F50D0D] text-white text-[12px] w-[15px] h-[15px] flex  items-center justify-center rounded-full">
            2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
