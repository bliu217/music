import React from "react";
import Topics from "./Topics";
import { Link, Button } from "@nextui-org/react";

const SideBar = () => {
  return (
    <div className="fixed top-20 w-1/4 min-w-60">
      {/* <div className="border-b-1 border-t-1 border-solid border-r-1 border-black w-full relative">
        <Button
          href="/"
          color="foreground"
          disableAnimation
          className="rounded-none text-2xl absolute right-0 w-fit "
        >
          back to overview
        </Button>
      </div> */}

      <Topics />
    </div>
  );
};

export default SideBar;
