import {
  BsWallet,
  BsCup,
  BsFillChatRightFill,
  BsTruck,
  BsBell,
  BsPencil,
  BsBook,
} from "react-icons/bs";
const RightIconOutlineTwo = () => {
  return (
    <>
      <div
        className={`flex justify-between items-center p-4 shadow-md   rounded-lg`}
      >
        <div>
          <p className="capitalize font-normal text-[14px] text-[#4c5258]">
            total orders
          </p>
          <h5 className={`  text-[23px] text-pink font-[600]`}> 542</h5>
        </div>
        <span className="  flex  justify-center items-center  ">
          <BsCup className="text-[40px] text-pink" />
        </span>
      </div>

      <div
        className={`flex justify-between items-center p-4 shadow-md   rounded-lg`}
      >
        <div>
          <p className="capitalize font-normal text-[14px] text-[#4c5258]">
            total income
          </p>
          <h5 className={`  text-[23px] text-info font-[600]`}> $875</h5>
        </div>
        <span className="  flex  justify-center items-center  ">
          <BsFillChatRightFill className="text-[40px] text-info" />
        </span>
      </div>
      <div
        className={`flex justify-between items-center p-4 shadow-md   rounded-lg`}
      >
        <div>
          <p className="capitalize font-normal text-[14px] text-[#4c5258]">
            tickets
          </p>
          <h5 className={`  text-[23px] text-beguni font-[600]`}> 155</h5>
        </div>
        <span className="  flex  justify-center items-center  ">
          <BsWallet className="text-[40px] text-beguni" />
        </span>
      </div>

      <div
        className={`flex justify-between items-center p-4 shadow-md   rounded-lg`}
      >
        <div>
          <p className="capitalize font-normal text-[14px] text-[#4c5258]">
            comments
          </p>
          <h5 className={`  text-[23px] text-blue font-[600]`}> 55</h5>
        </div>
        <span className="  flex  justify-center items-center  ">
          <BsTruck className="text-[40px] text-blue" />
        </span>
      </div>

      {/* right outline icon three  */}
      <div className="shadow-md p-4">
        <div className="border-b border-b-gray-light pb-2">
          <div className={`flex justify-between items-center    rounded-lg`}>
            <div>
              <p className="capitalize font-[500] text-[14px] text-[#4c5258]">
                notifications
              </p>
              <h5 className={`  text-[23px] text-blue font-[600]`}>155</h5>
            </div>
            <span className="  flex  justify-center items-center  ">
              <BsBell className="text-[40px] text-blue" />
            </span>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-[12px] font-normal text-[#4c5258]">
            +12.3% from last week
          </p>
        </div>
      </div>
      <div className="shadow-md p-4">
        <div className="border-b border-b-gray-light pb-2">
          <div className={`flex justify-between items-center    rounded-lg`}>
            <div>
              <p className="capitalize font-[500] text-[14px] text-[#4c5258]">
                total posts
              </p>
              <h5 className={`text-[23px] text-pink font-[600]`}>249</h5>
            </div>
            <span className="flex justify-center items-center  ">
              <BsPencil className="text-[35px] text-pink" />
            </span>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-[12px] font-normal text-[#4c5258]">
            +12.3% from last week
          </p>
        </div>
      </div>
      <div className="shadow-md p-4">
        <div className="border-b border-b-gray-light pb-2">
          <div className={`flex justify-between items-center    rounded-lg`}>
            <div>
              <p className="capitalize font-[500] text-[14px] text-[#4c5258]">
                messages
              </p>
              <h5 className={`text-[23px] text-green font-[600]`}>845</h5>
            </div>
            <span className="flex justify-center items-center  ">
              <BsPencil className="text-[35px] text-green" />
            </span>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-[12px] font-normal text-[#4c5258]">
            +12.3% from last week
          </p>
        </div>
      </div>
      <div className="shadow-md p-4">
        <div className="border-b border-b-gray-light pb-2">
          <div className={`flex justify-between items-center    rounded-lg`}>
            <div>
              <p className="capitalize font-[500] text-[14px] text-[#4c5258]">
                articles
              </p>
              <h5 className={`text-[23px] text-orange font-[600]`}>645</h5>
            </div>
            <span className="flex justify-center items-center">
              <BsBook className="text-[35px] text-orange" />
            </span>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-[12px] font-normal text-[#4c5258]">
            +12.3% from last week
          </p>
        </div>
      </div>
    </>
  );
};

export default RightIconOutlineTwo;
