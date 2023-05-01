const RightIconOutlineTwo = ({ data }) => {
  return (
    <div
      className={`flex justify-between items-center p-4 shadow-md   rounded-lg`}
    >
      <div>
        <p className="capitalize font-normal text-[14px] text-[#4c5258]">
          {data.title}
        </p>
        <h5 className={`font-[500] text-[23px]`}>{data.num}</h5>
      </div>
      <span className="  flex  justify-center items-center  ">{data.icon}</span>
    </div>
  );
};

export default RightIconOutlineTwo;
