import React from "react";
import { Button } from "react-bootstrap";

export default (props) => {
  return (
    <Button variant="success" onClick={() => Submit(nome, email)}>
      Enviar
    </Button>
  );
};
