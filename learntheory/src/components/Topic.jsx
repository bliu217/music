import {
  Card,
  CardBody,
  CardHeader,
  CheckboxGroup,
  Checkbox,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import React from "react";
import ledger from "../assets/scorebuilder/ledger.png";
import fourFour from "../assets/scorebuilder/4_4.png";
import treble from "../assets/scorebuilder/treble.png";
import half from "../assets/scorebuilder/halfNote.png";
import quarter from "../assets/scorebuilder/quarterNote.png";
import whole from "../assets/scorebuilder/wholeNote.png";
import eight from "../assets/scorebuilder/eighthNotes.png";
import measure from "../assets/scorebuilder/measureLine.png";
import eightS from "../assets/scorebuilder/eighthNote.png";
import noteLedger from "../assets/scorebuilder/noteCardLedger.png";

const Topic = () => {
  const [selectedValue, setSelected] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [formSubmitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    if (selectedValue == "4") {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="flex-1 p-16 h-full bg-parch">
      <h1 className="font-bold text-5xl">BASICS</h1>
      <div className="italic text-3xl text-dark-blue">notes</div>
      <Card
        radius="lg"
        className="border-solid border-2 border-black w-fit shadow-mid-blue relative my-20"
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
      <div className="font-poppins font-bold text-xl/7 w-[800px] p-10 border-t-2 border-b-2 border-gray-800">
        Music notes are the symbols used to represent sounds in music. Each note
        indicates a specific pitch (how high or low the sound is) and duration
        (how long the sound lasts). The basic notes include A, B, C, D, E, F,
        and G, which repeat in higher or lower octaves.
      </div>
      <h3 className="font-bold text-3xl my-20">DIFFERENT NOTES</h3>

      <div className="my-10 mx-20">
        <div className="grid grid-rows-2 grid-cols-2 gap-x-0 gap-y-8 bg-parch w-[600px] justify-items-center">
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
          <Card
            radius="lg"
            className="border-solid border-2 border-black w-fit shadow-mid-blue relative"
          >
            <CardHeader className="p-10 border-b-2 border-black">
              <div className="relative">
                <img src={noteLedger} className="h-[120px]" />
                <img
                  src={half}
                  className="absolute left-[52px] -top-[10px] h-[80px]"
                />
              </div>
            </CardHeader>
            <CardBody>
              <h3 className="font-bold text-xl mb-3">HALF NOTE</h3>
              <ul className="list-disc list-inside px-5 w-[250px]">
                <li>half the value of a whole note</li>
                <li>open note head with a stem</li>
              </ul>
            </CardBody>
          </Card>
          <Card
            radius="lg"
            className="border-solid border-2 border-black w-fit shadow-mid-blue relative"
          >
            <CardHeader className="p-10 border-b-2 border-black">
              <div className="relative">
                <img src={noteLedger} className="h-[120px]" />
                <img
                  src={quarter}
                  className="absolute left-[52px] -top-[10px] h-[77px]"
                />
              </div>
            </CardHeader>
            <CardBody>
              <h3 className="font-bold text-xl mb-3">QUARTER NOTE</h3>
              <ul className="list-disc list-inside px-5 w-[250px]">
                <li>filled note head with a stem</li>
                <li>4 quarter notes = 1 whole note</li>
              </ul>
            </CardBody>
          </Card>
          <Card
            radius="lg"
            className="border-solid border-2 border-black w-fit shadow-mid-blue relative"
          >
            <CardHeader className="p-10 border-b-2 border-black">
              <div className="relative">
                <img src={noteLedger} className="h-[120px]" />
                <img
                  src={eightS}
                  className="absolute left-[58px] -top-[10px] h-[130px]"
                />
              </div>
            </CardHeader>
            <CardBody>
              <h3 className="font-bold text-xl mb-3">EIGHTH NOTE</h3>
              <ul className="list-disc list-inside px-5 w-[250px]">
                <li>filled note head with a stem and flag</li>
                <li>2 eighth notes = 1 quarter note</li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="mt-24">
        <h1 className="text-dark-blue text-3xl font-bold mb-10">LOCK IT IN!</h1>
        <div className="w-[600px]">
          <Card className="shadow-none bg-transparent border-solid border-2 border-black p-5">
            <CardHeader>
              <h3>How many beats does a whole note last?</h3>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-3">
                <CheckboxGroup
                  value={selectedValue}
                  onValueChange={setSelected}
                >
                  <Checkbox value="1">1 beat</Checkbox>
                  <Checkbox value="2">2 beat</Checkbox>
                  <Checkbox value="3">3 beat</Checkbox>
                  <Checkbox value="4">4 beat</Checkbox>
                </CheckboxGroup>
                <Button
                  className="bg-bblue text-white font-bold my-5"
                  onPress={handleSubmit}
                >
                  SUBMIT
                </Button>
                <div
                  className={`${isCorrect ? "text-lime-700" : "text-red-500"}`}
                >
                  {formSubmitted ? (isCorrect ? "Correct!" : "Incorrect.") : ""}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Topic;
