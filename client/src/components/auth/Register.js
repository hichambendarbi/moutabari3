import React, { Component, Fragment } from "react";
import propTypes from "prop-types";
import {Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
// import TextFieldGroup from "../common/TextFieldGroup";
// import AuthFieldGroup from "../common/AuthFieldGroup";
import InputGroup from "../common/InputGroup";
import styled from 'styled-components';


const Entete =styled.div`
  margin-top: -8px;    
  margin-left: -15%;
  margin-right: -15%;
  background-color: rgb(215, 36, 51);
  border-bottom: #000000 5px solid;
  border-bottom-left-radius: 50%;
  @media screen and (max-width: 640px) {
  height: 90px;
  }
  @media screen and (max-width: 330px) {
    height: 70px;
  }
  
`

const ContainerBorder= styled.section`
display: flex;
flex-direction: column;
width: 50%;
margin: auto;
overflow: hidden;
padding: 0 2rem;
margin-top: 1rem;
margin-bottom: 3rem;
border-radius: 25Px;
box-shadow: 0 1px 1px 0 red, 0 2px 2px 0 #dc3545;
text-align: center; 
@media screen and (max-width: 800px) {
  padding: 0 0rem;
margin-top: 0.5rem;
margin-bottom: 3rem;
width: 95%;
}
@media screen and (max-width: 640px) {
  padding: 0 0rem;
margin-top: 0.5rem;
margin-bottom: 3rem;
width: 95%;
}
@media screen and (max-width: 330px) {
  padding: 0 0rem;
  width: 95%;
}
`

const ContFields = styled.div`
padding: 15px 10px 0 10px;
`
const Titleh1 = styled.h1`
font-size: 30px;
font-weight: 700;
color: black;
padding: 18px 0 0 0;
@media screen and (max-width: 640px) {
  font-size: 20px;
  font-weight: 700;
}
@media screen and (max-width: 330px) {
  font-size: 15px;
  font-weight: 700;
}
`

const Parag = styled.p`
font-size: 20px;
font-weight: 500;
color: black;

@media screen and (max-width: 640px) {
  font-size: 15px;
  font-weight: 500;
}
@media screen and (max-width: 330px) {
  font-size: 10px;
  font-weight: 500;
}
`

const LinkaL = styled.a`
font-size: 15px;
font-weight: 400;

@media screen and (max-width: 640px) {
  font-size: 13px;
  font-weight: 400;
}
@media screen and (max-width: 330px) {
  font-size: 10px;
  font-weight: 400;
}
`

const ButtonLogin = styled.button`
transform: translate(-50%, -50%);
width: 100%;
margin: 25px 50% 0px 50%;
// height: 50px;
text-align: center;
color: black;
font-size: 20px;
text-transform: uppercase;
text-decoration: none;
font-family: sans-serif;
box-sizing: border-box;
background: transparent;
border: 2px solid #dc3545;
background-size: 400%;
border-radius: 10px;

:hover{
  background: linear-gradient(90deg,#ea4444,#dc3545,#b72222,#920c0c);
  color: #fff;
  border: 2px solid #FFFFFF;
  // animation: animate 8s linear infinite;
  // @keyframes animate{
  //   0%{
  //     background-position: 0%;
  //   }
  //   100%{
  //     background-position: 400%; 
  //   }
  // }
}



`



class Register extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          password: "",
          password2: "",
          errors: {}
        };
      }
    
      componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/gestion-profile-donneur-receveur");
        }
      }
    
      componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
    
      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      onSubmit = e => {
        e.preventDefault();
        const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        };
    
        this.props.registerUser(newUser, this.props.history);
      };

  render() {
    const { errors } = this.state;

    return (
      <Fragment>
<ContainerBorder >
  <Entete >
        <Titleh1 >S'inscrire</Titleh1>
        <Parag><i className="fas fa-user"></i>Creer votre compte</Parag>
  </Entete>
  <ContFields>
              
         
          <form noValidate onSubmit={this.onSubmit}>
        
              <div className="form-group">
              <InputGroup
            placeholder="Email"
            name="email"
            icon="fas fa-envelope"
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
          />
        
                  </div>
                  <div className="form-group">
                 <InputGroup
                  placeholder="Nom et prenom"
                  name="name"
                  icon="fas fa-user"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                 

                />
 
                 </div>
                 <div className="form-group">
          <InputGroup
                  placeholder="Mot de passe"
                  name="password"
                  type="password"
                  value={this.state.password}
                  icon="fas fa-lock"
                
                  onChange={this.onChange}
                  error={errors.password}
               
                />
                   </div>
                   <div className="form-group">
          <InputGroup
                  placeholder="Retapez le mot de passe"
                  icon="fas fa-lock"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                 
                  onChange={this.onChange}
                  error={errors.password2}
                
                />
 </div>
                  
                <ButtonLogin type="submit"  onSubmit={this.onSubmit} >
                Devenir membre 
                </ButtonLogin>
             
              </form>
              </ContFields>
              <div style={{display: "flex", flexDirection:"row", textAlign:"center", padding:"0px 10px 10px 10px", justifyContent: "space-around"}}>
                    <div> <LinkaL>  <Link  to="/login" style={{color:"#0062cc", textDecoration:"none"}}>Se connecter</Link> </LinkaL></div>
                    <div> <LinkaL> <Link  to="/recuperation-mot-de-passe" style={{color:"#0062cc", textDecoration:"none"}}>Mot de passe oublier</Link> </LinkaL> </div>
              </div> 
                </ContainerBorder>
        </Fragment>
    );
  }
}

Register.propTypes = {
    registerUser: propTypes.func.isRequired,
    auth: propTypes.object.isRequired,
    errors: propTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));