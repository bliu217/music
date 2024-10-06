import { Card } from "@nextui-org/react";
import React from "react";
import ledger from "../assets/scorebuilder/ledger.png";
import fourFour from "../assets/scorebuilder/4_4.png";
import treble from "../assets/scorebuilder/treble.png";
import half from "../assets/scorebuilder/halfNote.png";
import quarter from "../assets/scorebuilder/quarterNote.png";
import whole from "../assets/scorebuilder/wholeNote.png";
import eight from "../assets/scorebuilder/eighthNotes.png";
import measure from "../assets/scorebuilder/measureLine.png";

const Topic = () => {
  return (
    <div className="flex-1 p-16 h-screen">
      <h1 className="font-bold text-5xl">RHYTHM</h1>
      <div className="italic text-3xl text-dark-blue pb-24">notes</div>
      <Card
        radius="lg"
        className="border-solid border-2 border-black w-fit shadow-mid-blue relative"
      >
        <div className="">
          <img
            src={ledger}
            className="p-16 w-[800px] h-auto z-20 object-cover"
          />
          <img
            src={treble}
            className="absolute top-[50px] left-[50px] z-0 h-[130px]"
          />
          <img
            src={fourFour}
            className="absolute top-[58px] left-[120px] z-0 h-[110px]"
          />
          <img
            src={whole}
            className="absolute top-[117px] left-[180px] z-0 h-[28px]"
          />
          <img
            src={measure}
            className="absolute top-[65px] left-[230px] z-0 h-[89px]"
          />

          <img
            src={half}
            className="absolute top-[70px] left-[220px] z-0 h-[75px]"
          />
          <img
            src={half}
            className="absolute top-[70px] left-[270px] z-0 h-[75px]"
          />

          <img
            src={measure}
            className="absolute top-[65px] left-[340px] z-0 h-[89px]"
          />

          <img
            src={quarter}
            className="absolute top-[68px] left-[330px] z-0 h-[75px]"
          />
          <img
            src={quarter}
            className="absolute top-[68px] left-[380px] z-0 h-[75px]"
          />

          <img
            src={eight}
            className="absolute top-[68px] left-[445px] z-0 h-[75px]"
          />

          <img
            src={measure}
            className="absolute top-[65px] left-[670px] z-0 h-[89px]"
          />
        </div>
      </Card>
    </div>
  );
};

export default Topic;
