import React from "react";
import SideBar from "../components/SideBar";
import Topic from "../components/Topic";

const LearnPage = () => {
  return (
    <div className="flex bg-parch">
      <SideBar />
      <div className="w-1/4"></div>
      <Topic />
    </div>
  );
};

export default LearnPage;
