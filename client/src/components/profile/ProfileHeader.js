import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";
import styled from "styled-components";

const BoxCard = styled.div`
background: #212529 !important;
color: #dc3545!important;
`

const NameTit = styled.h1`
font-size: 40px;
FONT-WEIGHT: 800;
@media screen and (max-width: 480px)
 {
    font-size: 2rem !important;
}
@media screen and (max-width: 390px)
 {
    font-size: 1.5rem !important;
}
@media screen and (max-width: 320px) {
  font-size: 1rem !important;
}
`

class ProfileHeader extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { profile } = this.props;

      return (
      <div className="row">
    
        <div className="col-md-12" >
          <BoxCard className="card card-body bg-info text-white mb-3" >
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                {/* <img
                  className="rounded-circle"
                  src={profile.user.avatar}
                  alt=""
                /> */}
                
              </div>
            </div>
            <div className="text-center">
              <NameTit className="display-4 text-center">{profile.user.name}</NameTit>
              <p className="lead text-center">
              {profile.status}{" "}
                <span>De {profile.ville}</span>
            </p>
              {isEmpty(profile.age)  ? null : (<p>{profile.age} {"ans"}{" "}{profile.sex}{" "}{"porte"} {" "}{profile.groupsanguin}</p>) }

              <p>
                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.twitter}
                    target="_blank"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.facebook}
                    target="_blank"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.linkedin) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.linkedin}
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.youtube) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.youtube}
                    target="_blank"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                )}
              </p>
            </div>
          </BoxCard>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
