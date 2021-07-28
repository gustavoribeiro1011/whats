import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {SignOut} from './../main/app'
export default () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">WhatsApp EasyForm</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={SignOut}>Sair</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}