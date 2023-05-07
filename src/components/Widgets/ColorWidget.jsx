// eslint-disable-next-line react/prop-types
import {
  BsFillChatLeftFill,
  BsFillPeopleFill,
  BsFillHddFill,
  BsFillArchiveFill,
  BsFillFlagFill,
  BsFillPieChartFill,
} from "react-icons/bs";
const ColorWidget = () => {
  return (
    <>
      <div
        className={` 
          bg-[#3361ff]
          shadow-lg w-full h-full flex flex-col justify-center items-center py-8 gap-2 rounded-lg`}
      >
        <div>
          <span
            className={`text-[#021AS5] bg-[#547aff] text-[18px] w-[50px] h-[50px] flex justify-center items-center rounded-full`}
          >
            {" "}
            <BsFillChatLeftFill className="text-white" />
          </span>
        </div>
        <h4 className={` font-[500]   text-[28px] text-white`}>23</h4>
        <p className="font-normal capitalize text-[14px] text-white">message</p>
      </div>
      <div
        className={` 
          bg-[#e72e2e]
          shadow-lg w-full h-full flex flex-col justify-center items-center py-8 gap-2 rounded-lg`}
      >
        <div>
          <span
            className={`text-[#021AS5] bg-[#eb5050] text-[18px] w-[50px] h-[50px] flex justify-center items-center rounded-full`}
          >
            {" "}
            <BsFillHddFill className="text-white" />
          </span>
        </div>
        <h4 className={` font-[500]   text-[28px] text-white`}>35</h4>
        <p className="font-normal capitalize text-[14px] text-white">storage</p>
      </div>
      <div
        className={` 
          bg-[#12bf24]
          shadow-lg w-full h-full flex flex-col justify-center items-center py-8 gap-2 rounded-lg`}
      >
        <div>
          <span
            className={`text-[#021AS5] bg-[#38c947] text-[18px] w-[50px] h-[50px] flex justify-center items-center rounded-full`}
          >
            {" "}
            <BsFillPeopleFill className="text-white" />
          </span>
        </div>
        <h4 className={` font-[500]   text-[28px] text-white`}>18</h4>
        <p className="font-normal capitalize text-[14px] text-white">members</p>
      </div>
      <div
        className={` 
          bg-[#212529]
          shadow-lg w-full h-full flex flex-col justify-center items-center py-8 gap-2 rounded-lg`}
      >
        <div>
          <span
            className={`text-[#021AS5] bg-[#45484b] text-[18px] w-[50px] h-[50px] flex justify-center items-center rounded-full`}
          >
            {" "}
            <BsFillArchiveFill className="text-white" />
          </span>
        </div>
        <h4 className={` font-[500]   text-[28px] text-white`}>22</h4>
        <p className="font-normal capitalize text-[14px] text-white">files</p>
      </div>
      <div
        className={` 
          bg-[#8932ff]
          shadow-lg w-full h-full flex flex-col justify-center items-center py-8 gap-2 rounded-lg`}
      >
        <div>
          <span
            className={`text-[#021AS5] bg-[#9c53ff] text-[18px] w-[50px] h-[50px] flex justify-center items-center rounded-full`}
          >
            {" "}
            <BsFillFlagFill className="text-white" />
          </span>
        </div>
        <h4 className={` font-[500]   text-[28px] text-white`}>22</h4>
        <p className="font-normal capitalize text-[14px] text-white">
          new task
        </p>
      </div>
      <div
        className={` 
          bg-[#ff6632]
          shadow-lg w-full h-full flex flex-col justify-center items-center py-8 gap-2 rounded-lg`}
      >
        <div>
          <span
            className={`text-[#ff7f53] bg-[#ff7f53] text-[18px] w-[50px] h-[50px] flex justify-center items-center rounded-full`}
          >
            {" "}
            <BsFillPieChartFill className="text-white" />
          </span>
        </div>
        <h4 className={` font-[500]   text-[28px] text-white`}>45</h4>
        <p className="font-normal capitalize text-[14px] text-white">
          projects
        </p>
      </div>
    </>
  );
};

export default ColorWidget;
