import React, { Component } from "react";
import { connect } from "react-redux";
import Fragment from "render-fragment";
import AuthFieldGroup from "../common/AuthFieldGroup";
import { resetPassword } from "../../actions/authActions";
import propTypes from "prop-types";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Input = styled.div`
  max-width: 300px;
  width: 100%;
`;

const LinksIt1 = styled(Button)`
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

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordChange: "",
      newPasswordChange: "",
      confirmNewPasswordChange: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleClickOpen  = event => 
  this.setState({
     open: event.currentTarget
  
  })
  handleClose = () => this.setState({ open: false })

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    // console.log(this.props);
    // console.log(this.state);

    const resetData = {
      // id: this.auth.user.id,
      password: this.state.passwordChange,
      newPassword: this.state.newPasswordChange,
      confirmNewPassword: this.state.confirmNewPasswordChange
    };

    this.props.resetPassword(resetData);
  };

  render() {
    const { errors } = this.props;
    console.log(errors);

    const { open } = this.state;
    const PopNewPost = <div 
    style={{overflowY: "initial !important",
           overflow: "hiden",
           maxWidth:"800px"
        }}>
    <LinksIt1 variant="outlined" color="primary" onClick={this.handleClickOpen}  >
        Changer le mot de passe
    </LinksIt1>
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={this.handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      style={{overflowY: "initial !important",
             overflow: "hiden",
             textAlign: "center !important",
             alignItems: "center !important",
            }}
    >
        <Fragment>
        <h4 className="mb-5 center-mobile" style={{marginBottom:"2px"}}>Changer le mot de passe</h4>
        <form onSubmit={this.onSubmit}>
          <Input>
            <AuthFieldGroup
              placeholder="Le mot de passe actuel"
              name="passwordChange"
              icon=""
              type="password"
              value={this.state.passwordChange}
              onChange={this.onChange}
              error={errors.password}
            />

            <AuthFieldGroup
              placeholder="Le nouveau mot de passe"
              name="newPasswordChange"
              icon=""
              type="password"
              value={this.state.newPasswordChange}
              onChange={this.onChange}
              error={errors.newpassword}
            />

            <AuthFieldGroup
              placeholder="Confirmer Le nouveau mot de passe"
              name="confirmNewPasswordChange"
              icon=""
              type="password"
              value={this.state.confirmNewPasswordChange}
              onChange={this.onChange}
              error={errors.confirmNewPassword}
            />
          </Input>
          <input type="submit" value="Envoyer" className="btn btn-info" style={{background: "red", width:"150px",border:"none",borderRadius:"3px"}} />
        </form>
      </Fragment>
    </Dialog>
  </div>

    return (
      <Fragment>
        {/* <h4 className="mb-5 center-mobile">Change Your Password</h4> */}
        {/* <form onSubmit={this.onSubmit}>
          <Input>
            <AuthFieldGroup
              placeholder="Current Password"
              name="passwordChange"
              icon=""
              type="password"
              value={this.state.passwordChange}
              onChange={this.onChange}
              error={errors.password}
            />

            <AuthFieldGroup
              placeholder="New Password"
              name="newPasswordChange"
              icon=""
              type="password"
              value={this.state.newPasswordChange}
              onChange={this.onChange}
              error={errors.newpassword}
            />

            <AuthFieldGroup
              placeholder="Confirm New Password"
              name="confirmNewPasswordChange"
              icon=""
              type="password"
              value={this.state.confirmNewPasswordChange}
              onChange={this.onChange}
              error={errors.confirmNewPassword}
            />
          </Input>
          <input type="submit" value="Submit" className="btn btn-info" />
        </form> */
        
        }
        {PopNewPost}
      </Fragment>
    );
  }
}

ChangePassword.propTypes = {
  resetPassword: propTypes.func.isRequired,
  profile: propTypes.object.isRequired,
  auth: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { resetPassword }
)(ChangePassword);
