import React from "react";
import keyboard from "../assets/images/keyboard.png";
import { Card, CardBody, CardHeader, Button, Link } from "@nextui-org/react";
import fullCircle from "../assets/misc/full.png";
import listIcon from "../assets/misc/List.png";
import partialCircle from "../assets/misc/partial.png";
import emptyCircle from "../assets/misc/empty.png";

const Before = () => {
  return (
    <div class="bg-gradient ">
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

      <div className="relative flex items-center justify-center mx-40 mt-40 py-20">
        <div>
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

        <div className="mx-60">
          <h2 className="font-bold text-4xl">OVERVIEW</h2>
          <p className="font-poppins mt-30  text-2xl z-1">
            Just embarking on your journey into the world of music theory and
            reading? Dive into the fundamentals of reading a staff and clefs,
            notes, and rests. You'll also learn the basics of rhythms like time
            signatures, measures, and dots. Get ready to unlock the language of
            music and enhance your understanding of how it all comes together!
          </p>
          <Button className="bg-bblue text-white font-outfit mb-5 mt-10 px-6 py-7 text-lg hover:bg-blue-600">
            {" "}
            <Link href="/learn" className="text-inherit">
              GET STARTED
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Before;
