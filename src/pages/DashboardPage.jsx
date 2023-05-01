import React from "react";
import LineChartSM from "../components/Charts/LineChartSM";

const DashboardPage = () => {
  return (
    <div className="p-4 pt-[60px] w-full">
      <div className="grid grid-cols-4 gap-4 ">
        {[1, 2, 3, 4].map(() => (
          <>
            <div className="shadow-lg px-4 rounded-md">
              <div className="flex justify-between pt-2">
                <p className="font-normal text-[14px] capitalize text-gray-light">
                  total cost
                </p>
                <p>16.55%</p>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="capitalize font-[500] text-[24px] text-gray">
                  5,540
                </h3>
                <div className="h-[100px]">
                  <LineChartSM />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
