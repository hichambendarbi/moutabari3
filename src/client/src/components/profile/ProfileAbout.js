import React, { Component } from "react";
import propTypes from "prop-types";
import isEmpty from "../../validation/is-empty";
import Fragment from "render-fragment";
import styled from "styled-components";

const TextTitle = styled.h3`
color: #0B2367!important;
FONT-SIZE: 25px;
@media screen and (max-width: 790px) {
  FONT-SIZE: 20px;
}
@media screen and (max-width: 530px) {
  FONT-SIZE: 15px;
}
@media screen and (max-width: 430px) {
  FONT-SIZE: 12px;
}
@media screen and (max-width: 370px) {
  FONT-SIZE: 10px;
}
@media screen and (max-width: 330px) {
  FONT-SIZE: 8px;
}
`

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
  //   let firstName;
  // if(profile.user.name!==null){
  //  firstName = profile.user.name.trim().split(" ")[0];
  // }
   

    // Liste des maladies
    const maladies = profile.maladies.map((maladie, index) => (
      <div key={index} className="p-3"  style={{textAlign:"center"}}>
        <i className="fa fa-check" /> {maladie}
      </div>
    ));

    return (
      <div className="row" style={{marginTop:"10Px"}}>
        <div className="col-md-12">
        <div>
      
        </div>
          <div className="card card-body bg-light mb-3">
            {isEmpty(profile.bio) ? (
              <Fragment />
            ) : (
              <Fragment>
                {profile.status==="Donneur" ? 
                                <TextTitle className="text-center text-info">
                                {/* {firstName} */}
                                Biographie ou la motivation de profile Donneur 
                              </TextTitle>
                :
                <TextTitle className="text-center text-info">
                {/* {firstName} */}
                Biographie ou la motivation de profile Receveur 
              </TextTitle>
                }

                <p className="lead" style={{textAlign:"center"}}>
                  <span>{profile.bio}</span>
                </p>
                <hr />
              </Fragment>
            )}

            <TextTitle className="text-center text-info" >
Maladies ou causes du besoin de sang</TextTitle>
            <div className="row"  style={{justifyContent:"center"}}>
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {maladies}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
ProfileAbout.propTypes = {
  profile: propTypes.object.isRequired
};
export default ProfileAbout;
