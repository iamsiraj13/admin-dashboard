import {
  BsSearch,
  BsGrid3X3GapFill,
  BsFillChatRightFill,
  BsFillBellFill,
} from "react-icons/bs";
import avater from "../../assets/images/avatar.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="pl-4 h-[60px]  bg-[#F9FAFB] w-full flex items-center justify-between pr-4">
      <div className="w-[30%]">
        {" "}
        <form
          className="w-full flex items-center bg-white py-2 px-4 border
         border-gray-light rounded-3xl  focus:ring-1 focus:ring-red-500"
        >
          <div className="text-gray pr-4 ">
            <BsSearch />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full focus:outline-none bg-transparent leading-[1.5] text-gray"
          />
        </form>
      </div>
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

        {/* user profile  */}
        <div>
          <Link href="#">
            <div className="border-l border-l-gray-light flex gap-4 px-[10px]">
              <img
                src={avater}
                alt=""
                className="w-[42px] h-[42px] rounded-full"
              />
              <div>
                <p className="capitalize">jhon doe</p>
                <small>hr manager</small>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
