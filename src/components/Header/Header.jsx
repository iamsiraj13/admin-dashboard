import {
  BsSearch,
  BsGrid3X3GapFill,
  BsFillChatRightFill,
  BsFillBellFill,
  BsFillBasket2Fill,
} from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import avater from "../../assets/images/avatar.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = ({ setShow }) => {
  const [grid, setGrid] = useState(false);
  const [message, setMessage] = useState(false);
  const [notify, setNotify] = useState(false);

  const gridToggle = () => {
    setGrid(!grid);
  };

  return (
    <div className="pl-4 h-[50px]  bg-[#F9FAFB] w-full flex items-center border-b border-main  justify-between pr-4">
      <div className="lg:hidden" onClick={() => setShow(true)}>
        <AiOutlineMenu />
      </div>
      <div className="w-[30%] hidden md:block">
        {" "}
        <form
          className="w-full flex items-center bg-white py-1 px-2 border
         border-main rounded-3xl  focus:ring-1 focus:ring-red-500"
        >
          <div className="text-main pr-2 text-[12px]">
            <BsSearch />
          </div>
          <input
            type="text"
            placeholder="Type here to search"
            className="w-full focus:outline-none text-[12px] bg-transparent leading-[1.5] text-gray"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="sm:hidden">
          <BsSearch />
        </div>
        <div className="relative cursor-pointer">
          <BsGrid3X3GapFill onClick={gridToggle} className="text-[12px]" />
          {grid && (
            <div
              className="animate__animated   animate__fadeIn  w-screen absolute sm:w-[360px] bg-white top-[38px] right-0 left-[-145px] sm:left-auto shadow-[0_0.5rem_1rem_rgba(0,0,0,.15)] px-4 py-4 rounded-lg"
              onBlur={() => setGrid(false)}
            >
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                  <>
                    <div className=" flex flex-col items-center hover:bg-[#ccc] p-4 rounded-lg">
                      <span className="w-[50px] h-[50px] flex items-center justify-center  rounded-full text-white bg-gradient-to-b from-[#7928ca] to-[#ff0080]">
                        <BsFillBasket2Fill />
                      </span>
                      <p className="capitalize mt-1">orders</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <BsFillChatRightFill className="text-[12px]" />
          <span className="absolute -top-[10px] -right-[7px] font-semibold bg-[#F50D0D] text-white text-[9px] w-[12px] h-[12px] flex  items-center justify-center rounded-full">
            2
          </span>
        </div>
        <div className="relative mr-3">
          <BsFillBellFill className="text-[12px]" />
          <span className="absolute -top-[10px] -right-[7px] font-semibold bg-[#F50D0D] text-white text-[9px] w-[12px] h-[12px] flex  items-center justify-center rounded-full">
            2
          </span>
        </div>

        {/* user profile  */}
        <div>
          <Link href="#">
            <div className="border-l border-l-main flex items-center gap-3 px-[10px]">
              <img
                src={avater}
                alt=""
                className="w-[35px] h-[35px] rounded-full"
              />
              <div className="hidden md:block lg:flex lg:flex-col lg:justify-center lg:gap-2">
                <p className="capitalize text-[14px] mt-1 mb-0">jhon doe</p>
                <small className="text-[10px] mt-[-10px]">hr manager</small>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
