import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import styled from "styled-components";
// import ProfileGithub from "./ProfileGithub";
import Spinner from "../common/Spinner";
import { getProfileByHandle } from "../../actions/profileActions";

const Retour = styled(Link)`

width:30% !important;
text-align:center;
border-radius: 3px !important;
color: #FFFFFF;
background: #343a40;
padding: 10px;

@media screen and (max-width: 550px) {
  font-size: 13px !important;
  height: auto;
}

@media screen and (max-width: 470px) {
  font-size: 11px !important;
  height: auto;
}

@media screen and (max-width: 420px) {
  font-size: 9px !important;
  height: auto;
}

@media screen and (max-width: 350px) {
  font-size: 6px !important;
  height: auto;
}

`;

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push("/not-found");
    }
  }

  render() {

    const { profile, loading } = this.props.profile;
    let profileContent;
    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
                <div style={{marginBottom: "10px"}}>
                <Retour to="/profiles">
                Retour aux profiles
                </Retour>
                </div>
            </div>
            <div className="col-md-6" />
          </div>
          <ProfileHeader profile={profile} />
          <ProfileAbout profile={profile} />
          <ProfileCreds
            education={profile.education}
            experience={profile.experience}
            profile={profile}
          />
          {/* {profile.githubusername ? (
            <ProfileGithub username={profile.githubusername} />
          ) : null} */}
        </div>
      );
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getProfileByHandle: propTypes.func.isRequired,
  profile: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
