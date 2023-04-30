// eslint-disable-next-line react/prop-types
const ColorWidget = ({ data }) => {
  return (
    <>
      {" "}
      <div
        className={` 
          bg-[${data.iconBg}]
          shadow-lg w-full h-full flex flex-col justify-center items-center py-8 gap-2`}
      >
        {/* eslint-disable-next-line react/prop-types */}
        <div className={`bg-[${data?.iconBg}]`}>
          <span className={`text-[#021AS5] text-[18px]`}>{data.icon}</span>
        </div>
        <h4
          className={`text-[${data?.iconColor}] font-[500]   text-[28px] text-gray`}
        >
          {data.num}
        </h4>
        <p className="font-normal capitalize text-[14px] text-[#4c5258]">
          {data.title}
        </p>
      </div>
    </>
  );
};

export default ColorWidget;
