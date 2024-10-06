import React from "react";
import SideBar from "../components/SideBar";
import Topic from "../components/Topic";

const LearnPage = () => {
  return (
    <div className="flex bg-parch">
      <SideBar />
      <div className="w-72"></div>
      <Topic />
    </div>
  );
};

export default LearnPage;
