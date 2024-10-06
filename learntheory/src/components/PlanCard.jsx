import React from "react";
import {
  Card,
  CardFooter,
  Image,
  Button,
  CardBody,
  CardHeader,
} from "@nextui-org/react";

const PlanCard = ({ title, description, image }) => {
  return (
    <Card
      radius="lg"
      className="transition ease-in-out delay-150 border-solid border-2 border-black justify-center text-center flex-1 min-w-[200px] mx-10 shadow-mid-blue hover:border-yellow-300 duration-300"
    >
      <CardHeader className="flex flex-col bg-parch py-5 justify-center pb-20">
        <h1 className="text-xl font-bold">{title}</h1>
        <img src={image} className="w-auto h-28 mt-10" />
      </CardHeader>
      <CardBody className="text-center border-t-2 border-black">
        <h3>{description}</h3>
      </CardBody>
      <CardFooter className="justify-center">
        <Button className="bg-bblue text-white font-outfit mb-5">
          LEARN MORE
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
