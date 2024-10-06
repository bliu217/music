import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const Navigation = () => {
  return (
    <Navbar isBlurred={false} className="bg-transparent">
      <NavbarBrand>
        <h3 className="font-bold">MELODIFY</h3>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4 font-outfit" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            LEARN
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            PRACTICE
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            SANDBOX
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
