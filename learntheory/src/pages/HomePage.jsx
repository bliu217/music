import React from "react";
import myImage from "../assets/images/hero_image.png";
import beginner from "../assets/images/beginner.png";
import intermediate from "../assets/images/intermediate.png";
import advanced from "../assets/images/advanced.png";

import PlanCard from "../components/PlanCard";

const HomePage = () => {
  return (
    <div className="pb-20">
      <div class="gradient-circle"> </div>
      <div className="mx-40 my-20 flex">
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="text-6xl font-bold">MELODIFY</h1>
          <div className="font-poppins mt-10 text-2xl">
            Melodify offers a fun and interactive way to learn the fundamentals
            of music. Whether you're a beginner or looking to refine your
            skills, enjoy our range of engaging exercises, real-time feedback,
            and visual aids, users can develop a deeper understanding of music
            theory at their own pace.
          </div>
        </div>
        <img src={myImage} alt="my-image" class="w-[500px] h-[500px] ml-10" />
      </div>

      <div className="justify-center mt-32">
        <h1 className="text-center font-bold text-3xl">COURSE PLANS</h1>
        <p className="text-center mt-5 italic text-lg">
          choose your learning journey
        </p>
        <div className="flex mx-40 mt-20 justify-center">
          <PlanCard
            title="Beginner"
            description="notes, keys, rhythms, intervals"
            image={beginner}
          />
          <PlanCard
            title="Intermediate"
            description="chord progressions, cadences"
            image={intermediate}
          />
          <PlanCard
            title="Advanced"
            description="counterpoint, analysis, composition"
            image={advanced}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
