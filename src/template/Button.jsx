import React from "react";
import { Button } from "react-bootstrap";

//Icone
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props) => {
  return (
    <Button variant="success" className="mt-3" type={props.type} onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} /> {props.name}
    </Button>
  );
};
