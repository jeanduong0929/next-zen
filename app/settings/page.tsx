import React from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const SettingsPage = () => {
  return (
    <>
      <Navbar />
      <div className=" max-w-screen-lg w-11/12 mx-auto py-5">
        <Sidebar />
      </div>
    </>
  );
};

export default SettingsPage;
