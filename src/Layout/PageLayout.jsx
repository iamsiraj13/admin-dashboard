import React from "react";
import PageBreadCrumb from "../components/PageBreadCrumb/PageBreadCrumb";

const PageLayout = ({ title, name, children }) => {
  return (
    <div className="p-4 pt-[60px]">
      <PageBreadCrumb title="widgets" name="static widgets" />
      {children}
    </div>
  );
};

export default PageLayout;
