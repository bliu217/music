import React from "react";
import myImage from "../assets/images/hero_image.png";
import logo from "../assets/images/logo.png";
import beginner from "../assets/images/beginner.png";
import intermediate from "../assets/images/intermediate.png";
import advanced from "../assets/images/advanced.png";
import Footer from "../components/Footer";
import { Button, Link } from "@nextui-org/react";

import PlanCard from "../components/PlanCard";

const HomePage = () => {
  return (
    <div className="pb-20">
      <div class="gradient-circlel"> </div>

      <div class="relative flex items-center mx-40 my-20 z-1">
        <div>
          <h1 class="text-6xl font-bold">MELODIFY</h1>
          <h2 class="text-3xl italic text-gray-600"> music theory made easy</h2>
          <p className="font-poppins mt-10 text-2xl z-1">
            Melodify offers a fun and interactive way to learn the fundamentals
            of music. Whether you're a beginner or looking to refine your
            skills, enjoy our range of engaging exercises, real-time feedback,
            and visual aids, users can develop a deeper understanding of music
            theory at their own pace.
          </p>
          <Button className="bg-bblue text-white font-outfit mb-5 mt-10 px-6 py-7 text-lg hover:bg-blue-600">
            {" "}
            <Link href="/learn" className="text-inherit">
              GET STARTED
            </Link>
          </Button>
        </div>
        <img
          src={myImage}
          alt="my-image"
          class="w-[500px] h-[500px] ml-10 z-1"
        />
      </div>

      <div className="justify-center mt-64">
        <h1 className="text-center font-bold text-3xl">COURSE PLANS</h1>
        <p className="text-center mt-5 italic text-lg">
          choose your learning journey
        </p>
        <div class="gradient-circler"> </div>
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

      {/* <div class=" mt-40 border-t-1 border-t-black justify-between flex items-center">
        <img src={logo} alt="my-image" class="w-50 h-auto ml-20 mt-10 z-1" />
        <p class="text-right mr-20 mt-10 font-poppins text-lg">
          {" "}
          melodify@gmail.com <br></br>instagram <br></br>
          linkedin
        </p>
      </div> */}
    </div>
  );
};

export default HomePage;
