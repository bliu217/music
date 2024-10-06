import React from "react";
import {
  Card,
  CardFooter,
  Image,
  Button,
  CardBody,
  CardHeader,
} from "@nextui-org/react";

const PlanCard = ({ title, description }) => {
  return (
    <Card radius="lg" className="mr-5 justify-center text-center">
      <CardHeader className=" bg-slate-500 px-20 py-5">
        <h1 className="text-xl text-slate-100">{title}</h1>
      </CardHeader>
      <CardBody className="text-center">
        <h3>{description}</h3>
      </CardBody>
      <CardFooter className="justify-center mt-20">
        <Button className="">START</Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
