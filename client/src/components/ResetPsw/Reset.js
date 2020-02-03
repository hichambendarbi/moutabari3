import React, { Component } from 'react'
import styled from 'styled-components'
import InputGroup from "../common/InputGroup";

const BoxR = styled.div`
// background: red;
width: 100%;
min-height: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Container = styled.div`
width: 50%;
height: 100%;
display: flex;
@media only screen and (max-width:500px){
    width: 100%;
}

`

const BtnAppo = styled.button`
width: 400px;
height: 40px;
border : 2px solid #343a40;
background: #dc3545;
margin-top: 10px;
padding: 5px;
text-decoration: none !important;
color: #FFFFFF;
@media only screen and (max-width:700px){
    width: 150px;
    height: auto;
    font-size: smaller;
}

@media only screen and (max-width:600px){
    width: 90px;
    height: auto;
    font-size: x-small;
}

@media only screen and (max-width: 500px)
{
    width: 80px;
    height: auto;
    font-size: xx-small;
    border : 1.5px solid #343a40;
}

@media only screen and (max-width: 350px)
{
    width: 70px;
    height: auto;
    font-size: 8px;
}
`
const Title = styled.h1`
font-size: 20px;
margin-bottom: 20px;
`
class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
        }
        
        this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
      }
      onChange(e) {
        this.setState(
          {
             [e.target.name]: e.target.value
              // handle: "changer"
              
            })
        }
    render() {
        return (
            <BoxR className="container">
           <Title>Recuperation mot de passe</Title>
            <Container>
            <InputGroup
              placeholder="Email"
              name="email"
              icon="fas fa-envelope"
              value={this.state.email}
              onChange={this.onChange}
            //   error={errors.email}
            />

            </Container>
            <BtnAppo type="submit">
                Envoyer
            </BtnAppo>
            </BoxR>
        )
    }
}

export default Reset
