import React, { Component } from 'react'
import styled from 'styled-components'
// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, withRouter } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
// import Logo from "../../assets/img/moutabarilogo.png";


const FlexNav = styled.div`
display: flex;
flex-direction: row;
background: #151716;
height: 60px;
// font-size: 25px;
color: #d60000;
border-bottom: 4px solid black;
// font-weight: 700;
padding: 0 15px 0 15px;
margin-bottom: 10px;
box-shadow: 0 4px 2px -2px gray;
@media screen and (max-width: 640px) {
flex-direction: column;
align-items: center;  
height: auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
}
`

const BoxLogo = styled.div`
display: flex;
flex-dirction: row;
// background: red;
flex-grow: 1;
padding: 10px 0 10px 0;
font-weight: 700;
font-size: 25px;
@media screen and (max-width: 640px) {
   
    padding: 4px 0 4px 0;
  }

  @media screen and (max-width: 330px) {
    padding: 2px 0 2px 0;
  }

`

const BoxLinks = styled.div`
display: flex;
flex-dirction: row;
// background: green;
flex-grow: 3;
// padding: 10px 0 10px 0; 
justify-content: flex-end;
align-items: center;

@media screen and (max-width: 640px) {
    // padding: 0px 3px 0px 3px;
  }
`

const BoxLink = styled.div`
// background: black;
margin-left: 30px;
// width: 150px;
text-align: right;
@media screen and (max-width: 640px) {
    margin-left: 8px;
    padding: 0px 3px 0px 3px;
  }
  @media screen and (max-width: 330px) {
    margin-left: 8px;
  }
`

const Linka = styled.a`
font-size: 20px;
font-weight: 400;
// padding: 8px 0 8px 0;
@media screen and (max-width: 640px) {
  font-size: 16px;
  }
  @media screen and (max-width: 440px) {
    font-size: 14px;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
  // @media screen and (max-width: 330px) {
  //   font-size: 10px;
  // }
  @media screen and (max-width: 300px) {
    font-size: 9px;
  }

  @media screen and (max-width: 240px) {
    font-size: 5px;
  }


`

const LinkaL = styled.a`
font-size: 20px
font-weight: 700;
// padding: 6px 0 6px 0;
@media screen and (max-width: 640px) {
  font-size: 15px;
  font-weight: 700;
}
@media screen and (max-width: 330px) {
  font-size: 13px;
  font-weight: 700;
}
@media screen and (max-width: 300px) {
  font-size: 10px;
}
`

const ButtonDrop = styled.button`
padding: 0px 5px 0px 5px;
border: 2px solid #D8250C; 
font-size: 20px;
background: transparent;
font-weight: 700;
color: #FFFFFF;
@media screen and (max-width: 640px) {
  font-size: 15px;
  // font-weight: 700;
}
@media screen and (max-width: 330px) {
  font-size: 13px;
  margin-top: 3px;
}
@media screen and (max-width: 303px) {
  font-size: 10px;
  margin-top: 5px;
  padding: 0px 3px 0px 3px;
}
`

const BoxLinkDrop = styled.div`
// background: black;
margin-left: 30px;
margin-top: 0px;
text-align: right;
@media screen and (max-width: 640px) {
    margin-left: 10px;
  }
  @media screen and (max-width: 330px) {
    margin-left: 8px;
  }
`


class NavbarT extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/blog");
      console.log("test")
    }
  }
  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/gestion-profile-donneur-receveur");
  //   }
  // }


  handleClick = event => this.setState({ anchorEl: event.currentTarget })
  handleClose = () => this.setState({ anchorEl: null })

    render() {
      const { isAuthenticated, user } = this.props.auth;

      
      const { anchorEl } = this.state
      const Drop =  <div>
      <ButtonDrop  onClick={this.handleClick} >
        Compte
      </ButtonDrop>
      {}
      { isAuthenticated ? 
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={this.handleClose}
      >
     <Link to="/gestion-profile-donneur-receveur" style={{color:"black",textDecoration:"none"}}> <MenuItem onClick={this.handleClose}>{user.name}</MenuItem> </Link> 
     <a href="#!" onClick={this.onLogoutClick} style={{color:"black",textDecoration:"none"}}>  <MenuItem onClick={this.handleClose}>Deconnecter</MenuItem> </a> 
      </Menu>
        : <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={this.handleClose}
      >
                
            
        <Link style={{color:"black",textDecoration:"none"}} to="/login">
        <MenuItem onClick={this.propshandleClose}>Se Connecter</MenuItem>
        </Link>
        <Link style={{color:"black",textDecoration:"none"}} to="/register">
        <MenuItem onClick={this.handleClose}>S'insrire</MenuItem>
        </Link>
        
      </Menu>
         } 

    </div>
        return (<div>
                    <FlexNav>
                            <BoxLogo>
                            <LinkaL ><Link to="/blog" style={{color:"rgb(215,36,51)",textDecoration:"none"}}>
                               Moutabari3.com
                            </Link></LinkaL>
                            </BoxLogo>
                        <BoxLinks>
                        <BoxLink ><Linka><Link to="/Apropos-Moutabari3" style={{color:"#FFFFFF",textDecoration:"none"}}>À propos</Link></Linka></BoxLink>
                           <BoxLink ><Linka><Link to="/demandes-dons-sang" style={{color:"#FFFFFF",textDecoration:"none"}}>Posts</Link></Linka></BoxLink>
                           <BoxLink><Linka><Link to="/profiles" style={{color:"#FFFFFF",textDecoration:"none"}}>Profils</Link></Linka></BoxLink> 
                           <BoxLinkDrop><Linka>{Drop}</Linka></BoxLinkDrop>
                        </BoxLinks>
                        
                    </FlexNav>
                    <div className="parent3" itemscope itemtype="http://schema.org/BesoinSang">
      <div className="title1" style={{textAlign:"center"}} itemprop="cause de besoin de sang">
                <h1 className="text1" itemprop="les besoin en sang">
                <ul className="ani"> 
                    <li>L</li>
                    <li>E</li>
                    <li>S</li>&nbsp;
                    <li>B</li>
                    <li>E</li>
                    <li>S</li>
                    <li>O</li>
                    <li>I</li>
                    <li>N</li>&nbsp;
                    <li>E</li>
                    <li>N</li>&nbsp;
                    <li>S</li>
                    <li>A</li>
                    <li>N</li>
                    <li>G</li>

                </ul>
                </h1>
                {/* <h5>Sur moutabari3.ma</h5> */}
            </div>

            <div className="title2" style={{textAlign:"center"}}>
                <h1 className="text2" itemprop="Les cas d'urgences et les maladies chroniques">Les cas d'urgences et les maladies chroniques</h1>
            </div>
      </div>
                    </div>
        )
    }
}

NavbarT.propTypes = {
  logoutUser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps, 
  { logoutUser, clearCurrentProfile }
)(withRouter(NavbarT));


