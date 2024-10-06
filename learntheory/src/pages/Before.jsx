import React from "react";
import SideBar from "../components/SideBar";
import Topic from "../components/Topic";
import Footer from "../components/Footer";
import keyboard from "../assets/images/keyboard.png";
import { Card, CardHeader, CardBody, Button, Link } from "@nextui-org/react";
import ledger from "../assets/scorebuilder/ledger.png";
import noteLedger from "../assets/scorebuilder/noteCardLedger.png";
import whole from "../assets/scorebuilder/wholeNote.png";


const Before = () => {
  return (
    <div class = "bg-gradient ">

    <div className="flex flex-col bg-parc justify-center items-center">
        <div class = "mt-40"><h1 class = "font-bold text-6xl"> BEGINNER COURSE PLAN</h1></div>
        <br></br>
        <img
          src={keyboard}
          alt="my-image"
          class="w-[700px] h-auto mt-10 z-1 relative"
          
        />
    </div>
    
    <div className="relative flex items-center justify-center mx-40 mt-40 py-20">

        <div>
        <Card
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
          </Card>
        </div>

        <div className="mx-60">
            <h2 className="font-bold text-4xl">OVERVIEW</h2>
            <p className="font-poppins mt-30  text-2xl z-1">
            Just embarking on your journey into the world of music theory and reading? Dive into the fundamentals of reading a staff and clefs, notes, and rests. You'll also learn the basics of rhythms like time signatures, measures, and dots. Get ready to unlock the language of music and enhance your understanding of how it all comes together!
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
