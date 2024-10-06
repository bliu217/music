import logo from "../assets/images/logo.png";
import React from "react";

const Footer = () => {
  return <div class=" mt-40 border-t-1 border-t-black justify-between flex items-center"> 
  <img src={logo} alt="my-image" class="w-50 h-auto ml-20 mt-10 z-1" />
  <p class = "text-right mr-20 mt-10 font-poppins text-lg"> melodify@gmail.com <br></br>instagram <br></br>
    linkedin
  </p>
  </div>
};

export default Footer;
