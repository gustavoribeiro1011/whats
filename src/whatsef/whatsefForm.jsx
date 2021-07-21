import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Form, Button } from "react-bootstrap";
import Grid from "./../template/grid";

export default (props) => (
  <Form onSubmit={props.handleSubmit}>
    <Grid cols="12 10 8">
      <Form.Group>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Seu nome"
          value={props.fields}
          onChange={props.handleChange.bind(this, "name")}
        ></Form.Control>
        <Form.Text className="text-danger">{props.errors["name"]}</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="Seu e-mail"
          value={props.fields}
          onChange={props.handleChange.bind(this, "email")}
        ></Form.Control>
        <Form.Text className="text-danger">{props.errors["email"]}</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Comentários</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Comentários se houver"
          value={props.fields}
          onChange={props.handleChange.bind(this, "comments")}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Button variant="success" className="mt-3" type="submit">
          <FontAwesomeIcon icon={faWhatsapp} /> Enviar via WhatsApp
        </Button>
      </Form.Group>
    </Grid>
  </Form>
);
