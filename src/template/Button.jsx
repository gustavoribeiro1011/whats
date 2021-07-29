import React from "react";
import { Button } from "react-bootstrap";

//Icone
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props) => {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" className="mt-3" size="lg" type={props.type} onClick={props.onClick}>
        <FontAwesomeIcon icon={props.icon} /> {props.name}
      </Button>
    </div>
  );
};
