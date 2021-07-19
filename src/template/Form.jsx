import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Logo from './../template/Logo'
import Grid from './../template/grid'

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [coment, setComent] = useState("");

  function Submit(nome, email, coment) {
    if (nome !== "" && email !== "") {
      const mobile = "+554399262702";
      const api = "https://api.whatsapp.com/";
      const sendPhone = "send?phone=" + mobile;
      const text = (
        "Nome: " +
        nome +
        " E-mail: " +
        email +
        " Comentários: " +
        coment
      ).replace(" ", "%20");

      //Submit
      window.open(api + sendPhone + "&text=" + text, "_blank");
    }
  }

  return (
    <>
      <Logo />
      <Form className="">
        <h2>Formulário de Contato</h2>
        <Grid cols='12 10 8'>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Seu nome"
            onChange={(e) => setNome(e.target.value)}
          ></Form.Control>
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
          <Form.Label>Comentários</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Comentários se houver"
            onChange={(e) => setComent(e.target.value)}
          ></Form.Control>
          <Button
            variant="success"
            onClick={() => Submit(nome, email, coment)}
            className="mt-3"
            id="button">
            <FontAwesomeIcon icon={faWhatsapp} /> Enviar via WhatsApp
          </Button>
        </Form.Group>
        </Grid>       
      </Form>

    </>
  );
};

export default Formulario;
