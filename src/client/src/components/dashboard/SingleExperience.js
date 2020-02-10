import React, { Component } from "react";
import moment from "moment";
import styled from "styled-components";
import { connect } from "react-redux";
import Fragment from "render-fragment";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { withRouter } from "react-router-dom";
import SelectListGroup from "../common/SelectListGroup";
// import CarouselPost from './CarouselPost';   
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


import {
  updateExperience,
  getCurrentProfile
} from "../../actions/profileActions";
import propTypes from "prop-types";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Form = styled.form`
  margin-bottom: 1rem;
  // margin-top: 1rem;
  border-top: 1px solid #007bff;
  border-bottom: 1px solid #007bff;
  // padding-top: 1rem;
     background: #f8f9fa;
  padding: 0 0 10px 0;
`;


const BoxFieldsDetails = styled.div`
    display: flex;
    flex-direction: row;
    // background: red;
    text-align: center;
    justify-content: space-evenly;
    width: 100%;
    height: 30px;
`

const FieldsDetails = styled.div`
display: flex;
// border: 10Px solid black;
width: inherit;
text-align: center;
justify-content: center;
align-items: center;
width: 100%;
// background: #dc3545a6;
// @media screen and (max-width: 800px) {
//   font-size: 15px;
// }
// @media screen and (max-width: 690px) {
//   font-size: 14px;
// }

@media screen and (max-width: 650px) {
  font-size: 15px;
}

@media screen and (max-width: 610px) {
  font-size: 13px;
}

@media screen and (max-width: 530px) {
  font-size: 12px;
}

// @media screen and (max-width: 450px) {
//   font-size: 12px;
// }
@media screen and (max-width: 492px) {
  font-size: 11px;

}

@media screen and (max-width: 480px) {
  font-size: 9px;
}
@media screen and (max-width: 425px) {
  font-size: 9px;
}

@media screen and (max-width: 410px) {
  font-size: 8px;
}
@media screen and (max-width: 360px) {
  font-size: 6px !important;
}

`



const ButtonPublier = styled.button`
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
border: 2px solid rgb(205, 34, 102);
background-size: 400%;
border-radius: 10px;

:hover{
  background: linear-gradient(90deg,#ea4444,#dc3545,#b72222,#920c0c);
  color: #fff;
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

const ConButton = styled.div`
width: 100%
// background: red;
padding: 0 15px 0 15px;
`

const TitlePop = styled.h5`
font-size: 20px;
color: black;
text-align: center;
@media screen and (max-width: 500px) {
  font-size: 15px;
}
@media screen and (max-width: 460px) {
  font-size: 12px;
}
@media screen and (max-width: 420px) {
  font-size: 10px;
}
@media screen and (max-width: 400px) {
  font-size: 9px;
}
`

const LireDescrip = styled(Button)`
color: blue !important;
background: transparent !important;   
@media screen and (max-width: 580px) {
  font-size: 13px !important;
}

@media screen and (max-width: 545px) {
  font-size: 11px !important;
}

@media screen and (max-width: 470px) {
  font-size: 9px !important;
}

// @media screen and (max-width: 420px) {
//   font-size: 9px !important;
// }

@media screen and (max-width: 416px) {
  font-size: 8px !important;
}

@media screen and (max-width: 400px) {
  font-size: 7px !important;
}

@media screen and (max-width: 360px) {
  font-size: 5px !important;
}
`;


const BtnModSup = styled(Button)`

@media screen and (max-width: 580px) {
  font-size: 13px !important;
  width: 100px !important;
  height: 30px !important;
}

@media screen and (max-width: 545px) {
  font-size: 12px !important;
}

@media screen and (max-width: 470px) {
  font-size: 11px !important;
  width: 95px !important;
  height: 28px !important;
}

// @media screen and (max-width: 420px) {
//   font-size: 9px !important;
// }

@media screen and (max-width: 400px) {
  font-size: 10px !important;
  width: 95px !important;
  height: 28px !important;
}

@media screen and (max-width: 360px) {
  font-size: 5px !important;
  width: 50px !important;
  height: 20px !important;
}
`;


class SingleExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ville: "",
      // title: "",
      // location: "",
      from: "",
      // to: "",
      current: "",
      description: "",
      errors: {},
      // disabled: false,
      editMode: false,
      villeEdit: "",
      // titleEdit: "",
      // locationEdit: "",
      fromEdit: "",
      // toEdit: "",
      currentEdit: "",
      descriptionEdit: "",
      id: 0,
      open: false
    };
  }

  componentDidMount() {
      this.setState({
      ville: this.props.exp.ville,
      // title: this.props.exp.title,
      // location: this.props.exp.location,
      from: this.props.exp.from,
      // to: this.props.exp.to,
      current: this.props.exp.current,
      description: this.props.exp.description,
      id: this.props.exp._id
    });
  }

  handleClickOpen  = event => 
  this.setState({
     open: event.currentTarget,
     descriptionEdit: this.state.description,
     villeEdit: this.state.ville,
     // titleEdit: this.state.title,
     // locationEdit: this.state.location,
     fromEdit: this.state.from,
     // toEdit: this.state.to,
     currentEdit: this.state.current,
    //  descriptionEdit: this.state.description
  
  })
  handleClose = () => this.setState({ open: false })

  onDeleteClick = id => {
    this.props.onDeleteClick(id);
  };

  onEditClick = id => {
    this.setState({
      // editMode: !this.state.editMode,
      villeEdit: this.state.ville,
      // titleEdit: this.state.title,
      // locationEdit: this.state.location,
      fromEdit: this.state.from,
      // toEdit: this.state.to,
      currentEdit: this.state.current,
      descriptionEdit: this.state.description
    });
  };
  onCancelClick = id => {
    this.setState({
      // editMode: !this.state.editMode,
      ville: this.state.villeEdit,
      // title: this.state.titleEdit,
      // location: this.state.locationEdit,
      from: this.state.fromEdit,
      // to: this.state.toEdit,
      current: this.state.currentEdit,
      description: this.state.descriptionEdit
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCheck = e => {
    this.setState({
      current: !this.state.current
    });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  onUpdate = id => {
    const { exp, updateExperience } = this.props;

    this.setState({
      // editMode: !this.state.editMode,
      villeEdit: this.state.ville,
      // titleEdit: this.state.title,
      // locationEdit: this.state.location,
      fromEdit: this.state.from,
      // toEdit: this.state.to,
      currentEdit: this.state.current,
      descriptionEdit: this.state.description,
      errors: {}
    });

    const expData = {
      ville: this.state.ville,
      // title: this.state.title,
      // location: this.state.location,
      from: this.state.from,
      // to: this.state.to,
      current: this.state.current,
      description: this.state.description,
      id: id
    };

    updateExperience(expData, exp._id);
  };

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.errors[nextProps.exp._id] !== "undefined") {
      if (Object.keys(nextProps.errors[nextProps.exp._id]).length === 0) {
        this.setState({
          editMode: false
        });
      } else {
        this.setState({
          editMode: true
        });
        this.setState({
          errors: {
            ville: nextProps.errors[nextProps.exp._id].ville,
            // title: nextProps.errors[nextProps.exp._id].title,
            // location: nextProps.errors[nextProps.exp._id].location,
            from: nextProps.errors[nextProps.exp._id].from,
            // to: nextProps.errors[nextProps.exp._id].to,
            current: nextProps.errors[nextProps.exp._id].current,
            description: nextProps.errors[nextProps.exp._id].description,
            id: nextProps.errors[nextProps.exp._id].id
          }
        });
      }
    }
  }

  render() {
    const { exp } = this.props;
    const { errors } = this.state;

    const optionsVille = [
      { label: "Tout le maroc", value: 0 },
      { label: "Agadir", value: "Agadir" },
      { label: "Al hoceima", value: "Al hoceima" },
      { label: "Aoussered", value: "Aoussered" },
      { label: "Assilah", value: "Assilah" },
      { label: "Azrou", value: "Azrou" },
      { label: "Azemour", value: "Azemour" },
      { label: "Beni Mellal", value: "Beni Mellal" },
      { label: "Benslimane", value: "Benslimane" },
      { label: "Beni Mellal", value: "Beni Mellal" },
      { label: "Benslimane", value: "Benslimane" },
      { label: "Berkane", value: "Berkane" },
      { label: "Ben Ahmed", value: "Ben Ahmed" },
      { label: "Berrechid", value: "Berrechid" },
      { label: "Boujdour", value: "Boujdour" },
      { label: "Bouskoura", value: "Bouskoura" },
      { label: "Bouznika", value: "Bouznika" },
      { label: "Casablanca", value: "Casablanca" },
      { label: "Chafchaouen", value: "Chafchaouen" },
      { label: "Dakhla", value: "Dakhla" },
      { label: "El Hajeb", value: "El Hajeb" },
      { label: "El jadida", value: "El jadida" },
      { label: "Errachidia", value: "Errachidia" },
      { label: "Essaouira", value: "Essaouira" },
      { label: "Essmara", value: "Essmara" },
      { label: "Fès", value: "Fès" },
      { label: "Guelmim", value: "Guelmim" },
      { label: "Guercif", value: "Guercif" },
      { label: "Ifrane", value: "Ifrane" },
      { label: "Kénitra", value: "Kénitra" },
      { label: "Khenifra", value: "Khenifra" },
      { label: "khmissat", value: "khmissat" },
      { label: "Khouribga", value: "Khouribga" },
      { label: "ksar el kebir", value: "ksar el kebir" },
      { label: "Laayoune", value: "Laayoune" },
      { label: "Larache", value: "Larache" },
      { label: "Marrakech", value: "Marrakech" },
      { label: "Martil", value: "Martil" },
      { label: "Meknès", value: "Meknès" },
      { label: "Melilia", value: "Melilia" },
      { label: "Midelt", value: "Midelt" },
      { label: "Mohammedia", value: "Mohammedia" },
      { label: "Nador", value: "Nador" },
      { label: "Oualidia", value: "Oualidia" },
      { label: "Ouarzazate", value: "Ouarzazate" },
      { label: "Ouazzane", value: "Ouazzane" },
      { label: "Oujda", value: "Oujda" },
      { label: "Rabat", value: "Rabat" },
      { label: "Safi", value: "Safi" },
      { label: "Saidia", value: "Saidia" },
      { label: "Salé", value: "Salé" },
      { label: "Sebta", value: "Sebta" },
      { label: "Sefrou", value: "Sefrou" },
      { label: "Settat", value: "Settat" },
      { label: "Sidi Bennour", value: "Sidi Bennour" },
      { label: "Sidi ifni", value: "Sidi ifni" },
      { label: "Sidi kacem", value: "Sidi kacem" },
      { label: "Sidi Rahal", value: "Sidi Rahal" },
      { label: "Sidi Slimane", value: "Sidi Slimane" },
      { label: "Tamensourte", value: "Tamensourte" },
      { label: "Tamesna", value: "Tamesna" },
      { label: "Tanger", value: "Tanger" },
      { label: "Tantan", value: "Tantan" },
      { label: "Tarfaya", value: "Tarfaya" },
      { label: "Taroudant", value: "Taroudant" },
      { label: "Taza", value: "Taza" },
      { label: "Temara", value: "Temara" },
      { label: "Tetouan", value: "Tetouan" },
      { label: "Tifelt", value: "Tifelt" },
      { label: "Tinghir", value: "Tinghir" },
      { label: "Tiznit", value: "Tiznit" },
      ];

    // const actionButtons = (
    //   <div className="space center">
    //     {!editMode ? (
    //       <Fragment>
    //         <button
    //           className="btn btn-info"
    //           onClick={this.onEditClick.bind(this, exp._id)}
    //         >
    //           Edit
    //         </button>{" "}
    //         <button
    //           className="btn btn-danger"
    //           onClick={this.onDeleteClick.bind(this, exp._id)}
    //         >
    //           Delete
    //         </button>
    //       </Fragment>
    //     ) : (
    //       <Fragment>
    //         <button
    //           className="btn btn-info"
    //           onClick={this.onUpdate.bind(this, exp._id)}
    //         >
    //           Submit
    //         </button>
    //         <button
    //           className="btn btn-danger"
    //           onClick={this.onCancelClick.bind(this, exp._id)}
    //         >
    //           Cancel
    //         </button>
    //       </Fragment>
    //     )}
    //   </div>
    // );


    const { open } = this.state;
    const PopNewPost = <div style={{overflowY: "initial !important", overflow: "hiden"}}>
    <BtnModSup variant="outlined" color="primary" onClick={this.handleClickOpen}  style={{background:"#ffffff", color:"black",
         border:"2px solid #DC3545", width: "120px",height:"35px",
         fontFamily:"Roboto, sans-serif",borderRadius:"25px"
         , margin: "5px 2px 0 2px",
          boxShadow:"box-shadow: 0 -5px 5px -5px black"}}>
        Modifier
    </BtnModSup>
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={this.handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      style={{overflowY: "initial !important", overflow: "hiden"}}
    >
      <DialogTitle id="alert-dialog-slide-title">{<TitlePop>Marquer transfuser ou modifier</TitlePop>}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
        {/* {formContent} */}
        <form onSubmit={this.onSubmit} >
            <div className="form-group">
            <FieldsDetails>
            <TextFieldGroup
                  name="from"
                  type="date"
                  placeholder="Date"
                  value={moment.utc(this.state.from).format("YYYY-MM-DD")}
                  onChange={this.onChange}
                  error={errors.from}
                  style={{width:"100%"}}
                />
            </FieldsDetails>


                <FieldsDetails>
              <SelectListGroup
              placeholder="Ville"
              name="ville"
              value={this.state.ville}
              onChange={this.onChange}
              options={optionsVille}
              error={errors.ville}
              style={{width:"100%"}}
                 />
          </FieldsDetails>


             <TextAreaFieldGroup
                placeholder="Job Description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                error={errors.description}
                info="Tell us about the position"
              />

                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheck}
                    id="current"
                  />
                  <label className="form-check-label" onClick={this.onCheck}>
                     Sang transfuser
                  </label>
                </div>
  
            
              <div className="row mb-5">
                <ConButton >
                <ButtonPublier type="submit" onClick={this.onUpdate.bind(this, exp._id)}>
                   Modifier Maintenant
                </ButtonPublier>
                  {/* <button type="submit" className="btn btn-primary btn-lg btn-block text-white btn-publier"><span className="icon-search icon mr-2"></span>Donnez une vie</button> */}
                </ConButton>
              </div>
            </div>
            </form>
  
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={this.handleClose} color="primary">
          Annuller
        </Button>
        {/* <Button onClick={this.handleClose} color="primary">
          Agree
        </Button> */}
      </DialogActions>
    </Dialog>
  </div>


const useStyles = makeStyles(theme => ({
  typography: {
    margin: theme.spacing(2),
  },
}));


const  PopoverPopupState =()=> {
  const classes = useStyles();
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <LireDescrip {...bindTrigger(popupState)} >
           Lire description... 
          </LireDescrip>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.typography}>{this.state.description}</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

    return (
      <Form onSubmit={this.onSubmit}>
        {/* <ExperienceDetails className="evenly-space column-tablet"> */}

        < BoxFieldsDetails>

        <FieldsDetails>
            
            {
              <Fragment>
                {moment.utc(this.state.from).format("MM/DD/YYYY")} {" "}
                {!this.state.current
                  ? "- Pas encore"
                  : "- Sang transfuser"}
              </Fragment>
          
            }
          </FieldsDetails>
      
          <FieldsDetails>
            {
              this.state.ville
          }
          </FieldsDetails>
          {/* <div className="space center">
            <div className="bold show-tablet">Title</div>
            {!editMode ? (
              this.state.title
            ) : (
              <TextFieldGroup
                placeholder="* Job Title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                error={errors.title}
              />
            )}
          </div> */}

          {/* <div className="space center">
            <div className="bold show-tablet">Location</div>
            {!editMode ? (
              this.state.location
            ) : (
              <TextFieldGroup
                placeholder="Location"
                name="location"
                value={this.state.location}
                onChange={this.onChange}
                error={errors.location}
              />
            )}
          </div> */}
          <FieldsDetails>
          <PopoverPopupState/>
            {/* {
              this.state.description
            } */}
          </FieldsDetails>
         
        </ BoxFieldsDetails>
        {/* {actionButtons} */}
        <div style={{display:"flex", flexDirection:"row",justifyContent:"center"}}>
        {PopNewPost}
        <div>
        <BtnModSup variant="outlined" color="primary" onClick={this.onDeleteClick.bind(this, exp._id)}   style={{background:"#ffffff", color:"black",
         border:"2px solid #DC3545", width: "120px",height:"35px",
         fontFamily:"Roboto, sans-serif",borderRadius:"25px"
         , margin: "5px 2px 0 2px",
          boxShadow:"box-shadow: 0 -5px 5px -5px black"
          }} >
         Supprimer
       </BtnModSup>
       </div>
       </div>
      </Form>
    );
  }
}

SingleExperience.propTypes = {
  updateExperience: propTypes.func.isRequired,
  experience: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  experience: state.exp,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { updateExperience, getCurrentProfile }
)(withRouter(SingleExperience));
 