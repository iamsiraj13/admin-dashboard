import React from "react";
import {
  BsFillBagCheckFill,
  BsCurrencyDollar,
  BsBarChartFill,
  BsPeopleFill,
} from "react-icons/bs";

const RightIconFill = () => {
  return (
    <>
      <div
        className={`flex justify-between bg-blue items-center px-4 py-4 shadow-md  rounded-lg`}
      >
        <div>
          <p className="capitalize font-[500] text-[14px] text-white">
            total orders
          </p>
          <h5 className={`font-[600] text-[23px] text-white`}>264</h5>
        </div>
        <span className="w-[50px] h-[50px] bg-[#557aff] flex  justify-center items-center border border-blue rounded-full">
          <BsFillBagCheckFill className="text-white" />
        </span>
      </div>
      <div
        className={`flex justify-between bg-green items-center px-4 py-4 shadow-md  rounded-lg`}
      >
        <div>
          <p className="capitalize font-[500] text-[14px] text-white">
            total revenue
          </p>
          <h5 className={`font-[600] text-[23px] text-white`}>$1,364</h5>
        </div>
        <span className="w-[50px] h-[50px] bg-[#38c947] flex  justify-center items-center     rounded-full">
          <BsCurrencyDollar className="text-white" />
        </span>
      </div>
      <div
        className={`flex justify-between bg-pink items-center px-4 py-4 shadow-md  rounded-lg`}
      >
        <div>
          <p className="capitalize font-[500] text-[14px] text-white">
            bounce rate
          </p>
          <h5 className={`font-[600] text-[23px] text-white`}>24.25%</h5>
        </div>
        <span className="w-[50px] h-[50px] bg-[#eb508f] flex  justify-center items-center     rounded-full">
          <BsBarChartFill className="text-white" />
        </span>
      </div>
      <div
        className={`flex justify-between bg-orange items-center px-4 py-4 shadow-md  rounded-lg`}
      >
        <div>
          <p className="capitalize font-[500] text-[14px] text-white">
            new users
          </p>
          <h5 className={`font-[600] text-[23px] text-white`}>24.25%</h5>
        </div>
        <span className="w-[50px] h-[50px] bg-[#ff7f53] flex  justify-center items-center     rounded-full">
          <BsPeopleFill className="text-white" />
        </span>
      </div>
    </>
  );
};

export default RightIconFill;
