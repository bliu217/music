import React from "react";
import Topics from "./Topics";
import { Link, Button } from "@nextui-org/react";

const SideBar = () => {
  return (
    <div className="fixed top-18 w-72 min-w-60 flex flex-col">
      <div className="border-solid border-r-1 border-black w-full items-center py-2">
        <Button
          href="/"
          color="foreground"
          disableAnimation
          className="rounded-none text-xl w-fit pl-14 py-4"
        >
          back to overview
        </Button>
      </div>

      <Topics />
    </div>
  );
};

export default SideBar;
