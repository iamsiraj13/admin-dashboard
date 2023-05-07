// eslint-disable-next-line react/prop-types
import {
  BsFillChatLeftFill,
  BsFillPeopleFill,
  BsFillHddFill,
  BsFillArchiveFill,
  BsFillFlagFill,
  BsFillPieChartFill,
} from "react-icons/bs";
const CurcularCard = () => {
  return (
    <>
      {" "}
      <div className=" bg-white shadow-md w-full h-full flex flex-col justify-center items-center py-6 gap-2 rounded-lg">
        {/* eslint-disable-next-line react/prop-types */}
        <div
          className={` w-[50px] h-[50px] flex justify-center items-center bg-[#e1e7ff] rounded-full`}
        >
          <span className={` text-[#3461ff] text-[18px]`}>
            <BsFillChatLeftFill />
          </span>
        </div>
        <h4 className={`font-[500] text-[28px]`}>25</h4>
        <p className="font-normal capitalize text-[14px] text-[#4c5258]">
          message
        </p>
      </div>
      <div className=" bg-white shadow-md w-full h-full flex flex-col justify-center items-center py-6 gap-2 rounded-lg">
        {/* eslint-disable-next-line react/prop-types */}
        <div
          className={` w-[50px] h-[50px] flex justify-center items-center bg-[#fbe0e0] rounded-full`}
        >
          <span className={` text-[#e72e2e] text-[18px]`}>
            <BsFillHddFill />
          </span>
        </div>
        <h4 className={`font-[500] text-[28px]`}>35</h4>
        <p className="font-normal capitalize text-[14px] text-[#4c5258]">
          storage
        </p>
      </div>
      <div className=" bg-white shadow-md w-full h-full flex flex-col justify-center items-center py-6 gap-2 rounded-lg">
        {/* eslint-disable-next-line react/prop-types */}
        <div
          className={` w-[50px] h-[50px] flex justify-center items-center bg-[#dcf5de] rounded-full`}
        >
          <span className={` text-[#12bf24] text-[18px]`}>
            <BsFillPeopleFill />
          </span>
        </div>
        <h4 className={`font-[500] text-[28px]`}>16</h4>
        <p className="font-normal capitalize text-[14px] text-[#4c5258]">
          members
        </p>
      </div>
      <div className=" bg-white shadow-md w-full h-full flex flex-col justify-center items-center py-6 gap-2 rounded-lg">
        {/* eslint-disable-next-line react/prop-types */}
        <div
          className={` w-[50px] h-[50px] flex justify-center items-center bg-[#e0f5ff] rounded-full`}
        >
          <span className={` text-[#32bfff] text-[18px]`}>
            <BsFillArchiveFill />
          </span>
        </div>
        <h4 className={`font-[500] text-[28px]`}>16</h4>
        <p className="font-normal capitalize text-[14px] text-[#4c5258]">
          members
        </p>
      </div>
      <div className=" bg-white shadow-md w-full h-full flex flex-col justify-center items-center py-6 gap-2 rounded-lg">
        {/* eslint-disable-next-line react/prop-types */}
        <div
          className={` w-[50px] h-[50px] flex justify-center items-center bg-[#ede0ff] rounded-full`}
        >
          <span className={` text-[#8932ff] text-[18px]`}>
            <BsFillFlagFill />
          </span>
        </div>
        <h4 className={`font-[500] text-[28px]`}>22</h4>
        <p className="font-normal capitalize text-[14px] text-[#4c5258]">
          new task
        </p>
      </div>
      <div className=" bg-white shadow-md w-full h-full flex flex-col justify-center items-center py-6 gap-2 rounded-lg">
        {/* eslint-disable-next-line react/prop-types */}
        <div
          className={` w-[50px] h-[50px] flex justify-center items-center bg-[#ffe8e0] rounded-full`}
        >
          <span className={` text-[#ff6632] text-[18px]`}>
            <BsFillPieChartFill />
          </span>
        </div>
        <h4 className={`font-[500] text-[28px]`}>45</h4>
        <p className="font-normal capitalize text-[14px] text-[#4c5258]">
          projects
        </p>
      </div>
    </>
  );
};

export default CurcularCard;
