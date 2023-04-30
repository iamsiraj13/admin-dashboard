const RightIconOutline = ({ data }) => {
  return (
    <div
      className={`flex justify-between items-center p-4 shadow-md border-l-[3px] rounded-lg`}
    >
      <div>
        <p className="capitalize font-normal text-[14px] text-[#4c5258]">
          {data.title}
        </p>
        <h5 className={`font-[500] text-[23px]`}>{data.num}</h5>
      </div>
      <span className="w-[50px] h-[50px] flex  justify-center items-center border rounded-full">
        {data.icon}
      </span>
    </div>
  );
};

export default RightIconOutline;
