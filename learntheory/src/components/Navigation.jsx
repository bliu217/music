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
    <Navbar isBlurred={true} className="bg-transparent">
      <NavbarBrand>
        <Link href="/" className="font-bold" color="foreground">
          MELODIFY
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4 font-outfit" justify="end">
        <NavbarItem>
          <Link color="foreground" href="/learn">
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
