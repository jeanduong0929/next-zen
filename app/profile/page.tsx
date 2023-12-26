import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className=" max-w-screen-lg w-11/12 mx-auto py-5">
        <Sidebar />
      </div>
    </>
  );
};

export default ProfilePage;
