import React from "react";
import SideBar from "../components/SideBar";
import Topic from "../components/Topic";
import Footer from "../components/Footer";
import keyboard from "../assets/images/keyboard.png";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import fullCircle from "../assets/misc/full.png";
import listIcon from "../assets/misc/List.png";
import partialCircle from "../assets/misc/partial.png";
import emptyCircle from "../assets/misc/empty.png";

const Before = () => {
  return (
    <div>
      <div className="flex flex-col bg-parc justify-center items-center">
        <div class="mt-40">
          <h1 class="font-bold text-6xl"> BEGINNER COURSE PLAN</h1>
        </div>
        <br></br>
        <img
          src={keyboard}
          alt="my-image"
          class="w-[700px] h-auto mt-10 z-1 relative"
        />
      </div>

      <div class="flex">
        <Card className="shadow-[-5px_5px_10px_0_rgba(0,0,0,0.75)] border-2 border-black">
          <CardHeader className="items-start">
            <img src={listIcon} className="w-[28px] mr-5" />
            <div className="flex-col items-start w-[250px]">
              <h1 className="font-bold text-xl">OVERVIEW</h1>
              <div>module objectives, learning goals, course topics</div>
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex items-center pt-2 border-t-2">
              <img src={fullCircle} className="scale-75 mr-5" />
              <h1 className="font-bold text-xl">INTRO TO BASICS</h1>
            </div>
            <div className="flex items-center pt-2 border-t-2">
              <img src={partialCircle} className="scale-75 mr-5" />
              <h1 className="font-bold text-xl">RHYTHM</h1>
            </div>
            <div className="flex items-center pt-2 border-t-2">
              <img src={emptyCircle} className="scale-75 mr-5" />
              <h1 className="font-bold text-xl">KEYS</h1>
            </div>
            <div className="flex items-center pt-2 border-t-2">
              <img src={emptyCircle} className="scale-75 mr-5" />
              <h1 className="font-bold text-xl">CHORDS</h1>
            </div>
            <div className="flex items-center pt-2 border-t-2">
              <img src={emptyCircle} className="scale-75 mr-5" />
              <h1 className="font-bold text-xl">INTERVALS</h1>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Before;
