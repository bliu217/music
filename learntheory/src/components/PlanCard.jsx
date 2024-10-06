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
    <Card radius="lg" className="mr-5">
      <CardHeader className="justify-center">
        <h1 className="font-bold">{title}</h1>
      </CardHeader>
      <CardBody>
        <h3>{description}</h3>
      </CardBody>
    </Card>
  );
};

export default PlanCard;
