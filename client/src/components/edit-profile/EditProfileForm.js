import React, { Component } from "react";
import { connect } from "react-redux";
import EditProfile from "./EditProfile";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import Fragment from "render-fragment";

class EditProfileWrapper extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
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
      profileContent = <EditProfile profile={profile} />;
    }
    return <Fragment>{profileContent}</Fragment>;
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(EditProfileWrapper);
