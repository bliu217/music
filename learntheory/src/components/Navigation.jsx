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
    <Navbar>
      <NavbarBrand>
        <p className="font-bold">MELODIFY</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="end">
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
