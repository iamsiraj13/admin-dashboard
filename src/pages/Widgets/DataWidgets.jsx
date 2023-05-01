import React, { useState } from "react";

import PageLayout from "../../Layout/PageLayout";
import DounughtChart from "../../components/Charts/DounughtChart";
import LineChartSM from "../../components/Charts/LineChartSM";

const DataWidgets = () => {
  return (
    <PageLayout>
      <div className="w-[30%]">
        <DounughtChart />
      </div>

      <div>
        <LineChartSM />
      </div>
    </PageLayout>
  );
};

export default DataWidgets;
