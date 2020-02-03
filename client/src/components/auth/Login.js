import React, { Component,Fragment } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import InputGroup from "../common/InputGroup";
import styled from 'styled-components'


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
  font-size: 12px;
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



class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/demandes-dons-sang");
    }
  } 

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/demandes-dons-sang");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    document.title ="Moutabari3 | Connecter sur moutabari3"; 
document.getElementsByTagName("META")[2].content="Le don de sang nous rasembles sur moutabari3";
    return (
      <Fragment>
<ContainerBorder >
  <Entete >
        <Titleh1 >Se connecter</Titleh1>
        <Parag><i className="fas fa-sign-in-alt"></i> Connecter sur moutabari3</Parag>
  </Entete>
  <ContFields>
              <form className="form" noValidate onSubmit={this.onSubmit}>
          <div className="form-group"  >
          <InputGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  icon="fas fa-envelope"
                  onChange={this.onChange}
                  error={errors.email}
                  id="test1"
                 
                  // info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                />
                          {/* <small className="form-text"
            >Ce site utilise Gravatar pour les profiles image, utilise les images de l'email
            </small
          > */}
                 </div>
                 <div className="form-group" >
          <InputGroup
                  placeholder="Mot de passe"
                  name="password"
                  type="password"
                  value={this.state.password}
                  icon="fas fa-lock"
                  onChange={this.onChange}
                  error={errors.password}
                  id="test1"
                />
                   </div>
                <ButtonLogin type="submit"  onSubmit={this.onSubmit} >
                      Connecter 
                </ButtonLogin>
             
              </form>
              </ContFields>
              <div style={{display: "flex", flexDirection:"row", textAlign:"center", padding:"0px 10px 10px 10px", justifyContent: "space-around"}}>
                    <div> <LinkaL>  <Link  to="/register" style={{color:"#0062cc", textDecoration:"none"}}>Creer votre compte</Link> </LinkaL></div>
                    <div> <LinkaL> <Link  to="/recuperation-mot-de-passe" style={{color:"#0062cc", textDecoration:"none"}}>Mot de passe oublier</Link> </LinkaL> </div>
              </div> 
                </ContainerBorder>
        </Fragment>
    );
  }
}

Login.propTypes = {
  loginUser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);