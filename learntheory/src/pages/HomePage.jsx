import React from "react";
import myImage from "../assets/images/hero_image.png";
import PlanCard from "../components/PlanCard";

const HomePage = () => {
  return (
    <>
      <div className="mx-40 my-20 flex">
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="text-6xl font-bold">MELODIFY</h1>
          <div className="font-poppins mt-10 text-2xl">
            (Website name) offers a fun and interactive way to learn the
            fundamentals of music. Whether you're a beginner or looking to
            refine your skills, enjoy our range of engaging exercises, real-time
            feedback, and visual aids, users can develop a deeper understanding
            of music theory at their own pace.
          </div>
        </div>
        <img src={myImage} alt="my-image" class="w-[500px] h-[500px] ml-10" />
      </div>
    

      <div className="flex mx-20 mt-20 justify-center">
        <PlanCard title="Beginner" description="starting out!" />
        <PlanCard title="Intermediate" description="getting there!" />
        <PlanCard title="Advanced" description="professional!" />
      </div>
    </>
  );
};

export default HomePage;
