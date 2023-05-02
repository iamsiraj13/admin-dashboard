import React, { useState } from "react";

import PageLayout from "../../Layout/PageLayout";
import DounughtChart from "../../components/Charts/DounughtChart";
import LineChartSM from "../../components/Charts/LineChartSM";

const DataWidgets = () => {
  return (
    <PageLayout>
      <div className="w-[40%] relative">
        {/* <p className="absolute left-[40%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[70px] font-bold">
          40%
        </p> */}
        <DounughtChart />
      </div>

      <div>
        <LineChartSM />
      </div>
    </PageLayout>
  );
};

export default DataWidgets;
