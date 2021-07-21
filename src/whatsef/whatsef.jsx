import React, { Component } from "react";

import PageHeader from "./../template/pageHeader";
import Logo from "./../template/Logo";
import WhatsefForm from "./whatsefForm";

export default class Whatsef extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    };
    this.handleError = this.handleError.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      //se "name" nao existir
      formIsValid = false; // formulario nao é valido
      errors["name"] = "Campo obrigatório"; //grava a msg de erro
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Campo obrigatório";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Digite um e-mail válido";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  handleError(error, e) {
    let errors = this.state.fields;
    errors[error] = e.target.value;
    this.setState({ errors });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Formulário enviado");
      //chamar a api do whatsapp
    }
  }

  render() {
    return (
      <div>
        <Logo />
        <PageHeader name="@" />
        <WhatsefForm
          handleSubmit={this.handleSubmit.bind(this)}
          handleChange={this.handleChange
            .bind("name")
            .bind("email")
            .bind("coments")}
          fields={this.state.handleSubmit}
          errors={this.state.errors}
          // errors={this.handleError.bind("name")}
        />
      </div>
    );
  }
}
