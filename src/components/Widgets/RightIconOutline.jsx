import {
  BsFillChatLeftFill,
  BsFillBagCheckFill,
  BsBarChartFill,
  BsFillPeopleFill,
} from "react-icons/bs";
const RightIconOutline = () => {
  return (
    <>
      <div
        className={`flex justify-between items-center px-4 py-3 shadow-md border-l-[3px] border-l-blue rounded-lg`}
      >
        <div>
          <p className="capitalize font-[500] text-[14px] text-[#4c5258]">
            total orders
          </p>
          <h5 className={`font-[600] text-[23px] text-blue`}>264</h5>
        </div>
        <span className="w-[50px] h-[50px] bg-blue flex  justify-center items-center border border-blue rounded-full">
          <BsFillBagCheckFill className="text-white" />
        </span>
      </div>
      <div
        className={`flex justify-between items-center p-4 shadow-md border-l-[3px] border-l-green rounded-lg`}
      >
        <div>
          <p className="capitalize font-[500] text-[14px] text-[#4c5258]">
            total revenue
          </p>
          <h5 className={`font-[600] text-[23px] text-green`}>1700</h5>
        </div>
        <span className="w-[50px] h-[50px] flex bg-green  justify-center items-center border border-green rounded-full">
          <BsFillChatLeftFill className="text-white" />
        </span>
      </div>
      <div
        className={`flex justify-between items-center p-4 shadow-md border-l-[3px] border-l-pink rounded-lg`}
      >
        <div>
          <p className="capitalize font-[500] text-[14px] text-[#4c5258]">
            bounce rate
          </p>
          <h5 className={`font-[600] text-[23px] text-pink`}>26.25%</h5>
        </div>
        <span className="w-[50px] h-[50px] flex bg-pink  justify-center items-center border border-pink rounded-full">
          <BsBarChartFill className="text-white" />
        </span>
      </div>

      <div
        className={`flex justify-between items-center p-4 shadow-md border-l-[3px] border-l-orange rounded-lg`}
      >
        <div>
          <p className="capitalize font-[500] text-[14px] text-[#4c5258]">
            bounce rate
          </p>
          <h5 className={`font-[600] text-[23px] text-orange`}>26.25%</h5>
        </div>
        <span className="w-[50px] h-[50px] flex bg-orange  justify-center items-center border border-orange rounded-full">
          <BsFillPeopleFill className="text-white" />
        </span>
      </div>
    </>
  );
};

export default RightIconOutline;
