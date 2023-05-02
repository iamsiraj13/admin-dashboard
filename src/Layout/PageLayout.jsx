import React from "react";
import PageBreadCrumb from "../components/PageBreadCrumb/PageBreadCrumb";

const PageLayout = ({ title, name, children }) => {
  return (
    <div className="p-4 pt-[60px] bg-[#F7F8FA]">
      <PageBreadCrumb title={title} name={name} />
      {children}
    </div>
  );
};

export default PageLayout;
