import React, { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
// import ProfileActions from "./ProfileActions";
import Experience from "./Experience";

import ChangePassword from "./ChangePassword";
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import "./PassW.css"

const ConatainerPage = styled.div`
display: flex;
flex-direction: column;
margin: 0px 20px 0 20px;
background: #152535;
border-radius: 3px;
`
const BoxTitle = styled.div`
display: flex;
background: transparent;
width: 100%;
justify-content: center;
margin-top: 10px;

`
const TitleAdmin= styled.h1`
font-size: 23px;
color: #dc3545;
font-weight: 700;
@media screen and (max-width: 850px) {
  font-size: 18px;
}
@media screen and (max-width: 670px) {
  font-size: 16px;
}

@media screen and (max-width: 570px) {
  font-size: 14px;
}

@media screen and (max-width: 450px) {
  font-size: 12px;
}

@media screen and (max-width: 400px) {
  font-size: 10px;
}
@media screen and (max-width: 350px) {
  font-size: 8px;
}
@media screen and (max-width: 270px) {
  font-size: 5px;
}
`

// const Button = styled.button`
//   margin-top: 3rem;
// `;
const BoxLinks = styled.div`
display: flex;
flex-direction: row;
width: 100%;
text-align: center;
justify-content: center;
`
const LinksIt = styled(Link)`
width: 25%;
height: 25%;
border: 2px solid #f8f9fa;
background: #ff000000;
margin: 10px;
border-radius: 3px;
color: bisque;
text-decoration: none !important;

@media screen and (max-width: 690px) {
  font-size: 13px;
}

@media screen and (max-width: 520px) {
  font-size: 11px;
  border: 1px solid #f8f9fa;

}

@media screen and (max-width: 450px) {
  font-size: 10px;
  border: 1px solid #f8f9fa;
}

@media screen and (max-width: 420px) {
  font-size: 9px;
  border: 1px solid #f8f9fa;
}

@media screen and (max-width: 390px) {
  font-size: 6px;
  padding: 4px;
  border: 1px solid #f8f9fa;
}

// @media screen and (max-width: 330px) {
//   font-size: 6px;
//   padding: 4px;
//   border: 1px solid #f8f9fa;
// }

@media screen and (max-width: 285px) {
  font-size: 5px;
  padding: 4px;
  border: 1px solid #f8f9fa;
}
`;

const ConatainerPage2 = styled.div`
display: flex;
flex-direction: column;
margin: 0px 20px 0 20px;
// background: #152535;
border-radius: 3px;
`
const Box1 = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
margin-bottom: -15px;
`

// const LinksIt1 = styled(Link)`
// text-decoration: none !important;
// @media screen and (max-width: 470px) {
//   font-size: 10px;
// }

// @media screen and (max-width: 420px) {
//   font-size: 9px;
// }

// @media screen and (max-width: 350px) {
//   font-size: 6px;
// }

// @media screen and (max-width: 260px) {
//   font-size: 5px;
// }
// `;

const LinksIt2 = styled(Button)`
background: rgb(255, 255, 255);
    color: #2B63CD !important;
    font-family: Roboto, sans-serif;
    border: none !important;
   
@media screen and (max-width: 550px) {
  font-size: 13px !important;
}

@media screen and (max-width: 470px) {
  font-size: 11px !important;
}

@media screen and (max-width: 420px) {
  font-size: 9px !important;
}

@media screen and (max-width: 350px) {
  font-size: 6px !important;
}
`;

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick = e => {
    this.props.deleteAccount();
  };



  // onDeleteClick = id => {
  //   this.props.onDeleteClick(id);
  // };
  
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    
    
        // console.log(profile.profile.handle)
   
    // Oncklick() {
    //   window.location=`/profile/${profile.handle}`;
  const Oncklick = () => {
      window.location=`/profile/${profile.handle}`;
      // history.push('/gestion-profile-donneur-receveur');
    }
    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
      <ConatainerPage>
        <BoxTitle>
          <TitleAdmin>Gestion de profile et de programme de transfusion</TitleAdmin>
        </BoxTitle>
        
        <BoxLinks>
           <LinksIt to="/Modification-profile">Modifier le profile</LinksIt>
           <LinksIt to="/ajouter-experience-transfusion-sang">Gerer la calendier</LinksIt>
           <LinksIt to="#!" onClick={this.onDeleteClick}>Supprimer le compte</LinksIt>
           {/* <LinksIt to="#!" onClick={this.onDeleteClick}>Supprimer mon compte</LinksIt> */}
           {/* */}
        </BoxLinks>
        
      </ConatainerPage>
          <ConatainerPage2>
            <Box1>
            <p className="lead text-muted center-mobile">
              <LinksIt2 onClick={Oncklick}>{user.name}</LinksIt2>
            </p>

            <p className="lead text-muted center-mobile">
                   <ChangePassword />
              {/* <LinksIt1 to="#!" onClick={this.onDeleteClick}>Supprimer votre compte</LinksIt1> */}
            </p>
            </Box1>
            {/* <ProfileActions /> */}
            <Experience experience={profile.experience} />
          
            {/* <ChangePassword /> */}
            {/* <Button onClick={this.onDeleteClick} className="btn btn-danger">
              Supprimer mon compte
            </Button> */}
          </ConatainerPage2>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
                  <ConatainerPage>
        <BoxTitle>
          <TitleAdmin>Gestion de profile et de programme de transfusion</TitleAdmin>
        </BoxTitle>
        
        <BoxLinks>
           <LinksIt to="/gestion-profile-donneur-receveur">Modifier le profile</LinksIt>
           <LinksIt to="/gestion-profile-donneur-receveur">Gerer la calendier</LinksIt>
           <LinksIt to="/gestion-profile-donneur-receveur" onClick={this.onDeleteClick}>Supprimer le compte</LinksIt>
           {/* <LinksIt to="#!" onClick={this.onDeleteClick}>Supprimer mon compte</LinksIt> */}
           {/* */}
        </BoxLinks>
        
      </ConatainerPage>
          <div style={{margin:"10px 0 0 20px"}}>
            <p className="lead text-muted">Salut {user.name}</p>
            <p>Vous n'avez pas encore creer ton profile </p>
            <Link to="/créer-profile-donneur-receveur" className="btn btn-lg btn-info" style={{background:"#DC3545",
            width:"200px",border:"none",borderRadius:"5px",height:"auto"}}>
              Creer ton profile
            </Link>
          </div>
          </div>
        );
      }
    }

    return (
      <div>
           {dashboardContent}  
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: propTypes.func.isRequired,
  deleteAccount: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  profile: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
