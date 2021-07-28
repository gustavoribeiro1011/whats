import { React, useRef, useState, Component } from "react"

//Import Template
import PageHeader from "./../template/pageHeader"
import Logo from "./../template/Logo"
import WhatsefForm from "./whatsefForm"
import NavBar from "../template/NavBar"

//Import Css
import './custom.css'

import {sendMessage} from './../main/app'





export default class Whatsef extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleValidation() {
    let fields = this.state.fields
    let errors = {}
    let formIsValid = true

    //Name
    if (!fields["name"]) {
      //se "name" nao existir
      formIsValid = false // formulario nao é valido
      errors["name"] = "Campo obrigatório" //grava a msg de erro
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false
      errors["email"] = "Campo obrigatório"
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@")
      let lastDotPos = fields["email"].lastIndexOf(".")

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false
        errors["email"] = "Digite um e-mail válido"
      }
    }

    if (!fields["comments"]) {
      fields["comments"] = ""
    }

    this.setState({ errors: errors })
    return formIsValid
  }

  handleChange(field, e) {
    let fields = this.state.fields
    fields[field] = e.target.value
    this.setState({ fields })
  }

   
  redirect() {
    //Form
    let name = this.state.fields["name"];
    let email = this.state.fields["email"];
    let comments = this.state.fields["comments"];

    sendMessage(name,email,comments)

    //Api
    let mobile = "+55043996262702";

    //Message
    let title = "Demonstração de Formulário de Contato";

    let text = (
      title +
      "%0A%0A" +
      "Nome: " +
      name +
      "%0A" +
      "E-mail: " +
      email +
      "%0A" +
      "Comentários: " +
      comments
    ).replace(" ", "%20");

    //Redirect to WhatsApp
    window.open(
      "https://api.whatsapp.com/send?phone=" + mobile + "&text=" + text,
      "_blank"
    );
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.handleValidation()) {
      //alert("Formulário enviado")
      //chamar a api do whatsapp
      this.redirect()
    }
  }

  Message(props) {
    const { text } = props.message
    return <p>{text}</p>
  }


  render() {
    return (  <>      
      <NavBar />
           <div id="App">
           <Logo />
            <PageHeader name="Formulário de Contato" />
            <WhatsefForm
              handleSubmit={this.handleSubmit.bind(this)}
              handleChange={this.handleChange
                .bind("name")
                .bind("email")
                .bind("comments")}
              fields={this.state.handleSubmit}
              errors={this.state.errors}
            // errors={this.handleError.bind("name")}
            />
           </div>
           </>
    )
  }
}
