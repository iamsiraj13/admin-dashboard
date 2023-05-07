import {
  BsWallet,
  BsCup,
  BsFillChatRightFill,
  BsTruck,
  BsBell,
  BsPencil,
  BsBook,
} from "react-icons/bs";

const RightIconFillTwo = () => {
  return (
    <>
      <div
        className={`flex justify-between items-center p-4 shadow-md  bg-red rounded-lg`}
      >
        <div>
          <p className="capitalize font-normal text-[14px] text-white">
            total orders
          </p>
          <h5 className={`  text-[23px] text-white font-[600]`}> 542</h5>
        </div>
        <span className="  flex  justify-center items-center  ">
          <BsCup className="text-[40px] text-white" />
        </span>
      </div>

      <div
        className={`flex justify-between bg-info items-center p-4 shadow-md   rounded-lg`}
      >
        <div>
          <p className="capitalize font-[500] text-[14px] text-white">
            total income
          </p>
          <h5 className={`  text-[23px] text-white font-[600]`}> $875</h5>
        </div>
        <span className="  flex  justify-center items-center  ">
          <BsFillChatRightFill className="text-[40px] text-white" />
        </span>
      </div>
      <div
        className={`flex justify-between items-center bg-beguni  p-4 shadow-md   rounded-lg`}
      >
        <div>
          <p className="capitalize font-[500] text-[14px] text-white">
            tickets
          </p>
          <h5 className={`  text-[23px] text-white font-[600]`}> 155</h5>
        </div>
        <span className="  flex  justify-center items-center  ">
          <BsWallet className="text-[40px] text-white" />
        </span>
      </div>

      <div
        className={`flex justify-between  bg-blue items-center p-4 shadow-md   rounded-lg`}
      >
        <div>
          <p className="capitalize font-[500] text-[14px] text-white">
            comments
          </p>
          <h5 className={`  text-[23px] text-white font-[600]`}> 55</h5>
        </div>
        <span className="  flex  justify-center items-center">
          <BsTruck className="text-[40px] text-white" />
        </span>
      </div>

      {/* right outline icon three  */}
      <div className="shadow-md p-4 bg-blue rounded-md">
        <div className="border-b border-b-gray-light pb-2">
          <div className={`flex justify-between items-center    rounded-lg`}>
            <div>
              <p className="capitalize font-[500] text-[14px] text-white">
                notifications
              </p>
              <h5 className={`  text-[23px] text-white font-[600]`}>155</h5>
            </div>
            <span className="  flex  justify-center items-center  ">
              <BsBell className="text-[40px] text-white" />
            </span>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-[12px] font-normal text-white">
            +12.3% from last week
          </p>
        </div>
      </div>
      <div className="shadow-md bg-orange rounded-md p-4">
        <div className="border-b border-b-gray-light pb-2">
          <div className={`flex justify-between items-center    rounded-lg`}>
            <div>
              <p className="capitalize font-[500] text-[14px] text-white">
                total posts
              </p>
              <h5 className={`text-[23px] text-white font-[600]`}>249</h5>
            </div>
            <span className="flex justify-center items-center  ">
              <BsPencil className="text-[35px] text-white" />
            </span>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-[12px] font-normal text-white">
            +12.3% from last week
          </p>
        </div>
      </div>
      <div className="shadow-md p-4 bg-green rounded-md">
        <div className="border-b border-b-gray-light pb-2">
          <div className={`flex justify-between items-center rounded-lg`}>
            <div>
              <p className="capitalize font-[500] text-[14px] text-white">
                messages
              </p>
              <h5 className={`text-[23px] text-white font-[600]`}>845</h5>
            </div>
            <span className="flex justify-center items-center  ">
              <BsPencil className="text-[35px] text-white" />
            </span>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-[12px] font-normal text-white">
            +12.3% from last week
          </p>
        </div>
      </div>
      <div className="shadow-md p-4 bg-beguni rounded-md">
        <div className="border-b border-b-gray-light pb-2">
          <div className={`flex justify-between items-center    rounded-lg`}>
            <div>
              <p className="capitalize font-[500] text-[14px] text-white">
                articles
              </p>
              <h5 className={`text-[23px] text-white font-[600]`}>645</h5>
            </div>
            <span className="flex justify-center items-center">
              <BsBook className="text-[35px] text-white" />
            </span>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-[12px] font-normal text-white">
            +12.3% from last week
          </p>
        </div>
      </div>
    </>
  );
};

export default RightIconFillTwo;
