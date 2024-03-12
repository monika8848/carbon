import HeaderComponent from "@/components/HeaderComponent";
import DashboardComponent from "@/components/DashboardComponent";
import React from "react";
import TableComponent from "@/components/TableComponent";
import ProfileForm from "@/components/ProfileForm";

const dashboard = () => {
  return (
    <>
      <HeaderComponent />

      <DashboardComponent />
      {/* <ProfileForm />
      <TableComponent /> */}
    </>
  );
};

export default dashboard;
