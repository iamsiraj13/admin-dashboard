import React from "react";

import PageLayout from "../../Layout/PageLayout";
import DounughtChart from "../../components/Charts/DounughtChart";

const DataWidgets = () => {
  return (
    <PageLayout>
      <div className="w-[30%]">
        <DounughtChart />
      </div>
    </PageLayout>
  );
};

export default DataWidgets;
