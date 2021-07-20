import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Form, Button } from "react-bootstrap";
import Grid from "./../template/grid";
import Submit from "./../main/Submit";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [coment, setComent] = useState("");

  return (
    <>
      <Form>
        <Grid cols="12 10 8">
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Seu nome"
              onChange={(e) => setNome(e.target.value)}
            ></Form.Control>
            <Form.Text className="text-danger">
              Esse campo é obrigatório
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Comentários</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Comentários se houver"
              onChange={(e) => setComent(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Button
              variant="success"
              onClick={() => Submit(nome, email, coment)}
              className="mt-3"
              id="button"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Enviar via WhatsApp
            </Button>
          </Form.Group>
        </Grid>
      </Form>
    </>
  );
};

export default Formulario;
