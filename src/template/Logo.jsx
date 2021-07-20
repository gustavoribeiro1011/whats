import React from "react";
import Image from "react-bootstrap/Image";
import imgLogo from "./../assets/images/example.png";

export default (props) => {
  return <Image src={imgLogo} fluid alt="Logo" width="733px" id="logo" />;
};
