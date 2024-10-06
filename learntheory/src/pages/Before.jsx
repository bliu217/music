import React from "react";
import SideBar from "../components/SideBar";
import Topic from "../components/Topic";
import Footer from "../components/Footer";
import keyboard from "../assets/images/keyboard.png";
import { Card, CardHeade } from "@nextui-org/react";



const Before = () => {
  return (
    <div>

    <div className="flex flex-col bg-parc justify-center items-center">
        <div class = "mt-40"><h1 class = "font-bold text-6xl"> BEGINNER COURSE PLAN</h1></div>
        <br></br>
        <img
          src={keyboard}
          alt="my-image"
          class="w-[700px] h-auto mt-10 z-1 relative"
          
        />
    </div>
    
    <div class = "flex">
        {/* <Card
            radius="lg"
            className="border-solid border-2 border-black w-fit shadow-mid-blue relative"
          >
            <CardHeader className="p-10 border-b-2 border-black">
              <div className="relative">
                <img src={noteLedger} className="h-[120px]" />
                <img
                  src={whole}
                  className="absolute left-[70px] top-[40px] h-[28px]"
                />
              </div>
            </CardHeader>
            <CardBody>
              <h3 className="font-bold text-xl mb-3">WHOLE NOTE</h3>
              <ul className="list-disc list-inside px-5 w-[250px]">
                <li>longest note duration</li>
                <li>resembles an open note head with no stem</li>
                <li>lasts 4 beats</li>
              </ul>
            </CardBody>
          </Card> */}
    </div>

    </div>
  );
};

export default Before;
