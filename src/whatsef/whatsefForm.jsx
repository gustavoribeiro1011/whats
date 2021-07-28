import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { Form } from "react-bootstrap"
import Grid from "./../template/grid"
import Button from "./../template/Button"

export default (props) => (

  <div class="container">
    <div class="row">
      <div class="col"></div>
      <Grid cols="12 5 4">
        <Form onSubmit={props.handleSubmit} id="Form">
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
            <Button name="Enviar via WhatsApp" type="submit" icon={faWhatsapp} />
          </Form.Group>
          <Form.Group>
            <Button name="Gravar no BD" icon={faDatabase} />
          </Form.Group>

        </Form>
        </Grid>
      <div class="col"></div>
    </div>
  </div>

)
