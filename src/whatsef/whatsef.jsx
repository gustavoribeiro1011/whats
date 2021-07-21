import React, { Component } from "react";

import PageHeader from "./../template/pageHeader";
import Logo from "./../template/Logo";
import WhatsefForm from "./whatsefForm";


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

  handleChange(field, e){    		
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
    console.log(fields)
  }

  handleSubmit(){
  
    
  }
  
  render() {
    
    return (
      <div>
        <Logo />
        <PageHeader name="Formulário" />
        <WhatsefForm 
        handleSubmit={this.handleSubmit.bind(this)} 
        handleChange={this.handleChange.bind("name")}      
        handleChange={this.handleChange.bind("email")}    
        handleChange={this.handleChange.bind("comments")}  
        fields={this.state.handleSubmit}
         />
      </div>
    )
  }
}

