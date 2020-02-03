 import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addComment } from "../../actions/postActions";
import { getCurrentProfile } from "../../actions/profileActions";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";
import styled from 'styled-components'


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

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    const { postId } = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      // avatar: user.avatar
    };
             console.log(this.state.text)
    this.props.addComment(postId, newComment);
    this.setState({ text: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    const { user } = this.props.auth;
    const { profile } = this.props.profile;


    let formContent;
    if (
      profile === null
      //  || loading
    ) {
      formContent = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        formContent = (
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <TextAreaFieldGroup
                placeholder="En reparation...sera prochainement en marche"
                name="text"
                value={this.state.text}
                // onChange={this.onChange}
                error={errors.text}
                // disabled="disabled"
                              />
            </div>
            <BtnAppo type="submit" >
              Envoyer
            </BtnAppo>
          </form>
        );
      } else {
        // User is logged in but has no profile
        formContent = (
          <div>
            <p className="lead text-muted">Salut {user.name}</p>
            <p>Pour donner prendre rendez-vous avec donner ou receveur il faut creer un profile</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Creer un profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Fixer un rendez-vous...pour faire transfuser le sang
          </div>
          <div className="card-body">{formContent}</div>
        </div>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addComment: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  postId: propTypes.string.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  profile: state.profile,
  postId: propTypes.string.isRequired
});

export default connect(
  mapStateToProps,
  { addComment, getCurrentProfile }
)(CommentForm);
