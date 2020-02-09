import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addPost } from "../../actions/postActions";
import { getCurrentProfile } from "../../actions/profileActions";
// import { Link } from "react-router-dom";
// import Spinner from "../common/Spinner";
import styled from "styled-components";
import CarouselPost from './CarouselPost';
import SelectListGroup from "../common/SelectListGroup";
import InputGroup from "../common/InputGroup";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Flex1 = styled.div`
display: flex;
flex-direction: column;
// border: 1px solid gray;
border-radius: 3Opx;
margin-bottom: 0 10px 10px 30px;
`

// const PostFieldsFlex1 = styled.div`
// display: flex;
// flex-direction: column;
// width: 100%;
// padding: 15px 0 0 0;
// `

// const PostFieldsRow = styled.div`
// display: flex;
// flex-direction: row;
// width: 100%;
// // padding: 15px 0 0 0;
// `

const TitleProfLine = styled.div`
width: 420px;
height: 2px;
background: gray;
margin-bottom: 10px;
@media screen and (max-width: 500px) {
  width: 170px;
  margin-bottom: 5px;
}
@media screen and (max-width: 412px) {
  width: 150px;
  margin-bottom: 5px;
}

`

const ButtonPublier = styled.button`
transform: translate(-50%, -50%);
width: 50%;
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

@media screen and (max-width: 700px) {
  width: 100%;
  margin: 30px 50% 0px 50%;
}

@media screen and (max-width: 370px) {
  font-size: 12px;
  padding: 5px;
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
font-weight: 500;
@media screen and (max-width: 650px) {
  font-size: 16px;
}
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
@media screen and (max-width: 400px) {
  font-size: 9px;
}
@media screen and (max-width: 360px) {
  font-size: 7px;
}
@media screen and (max-width: 310px) {
  font-size: 5px;
}
`




class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      ville:"",
      Situation:"",
      GrSanguin:"",
      Tele:"",
      errors: {},
      handle:"test",
      // displayPost: false,
      lab:"POSTER +",
      open: false,
      // setOpen: false
      secretTele: "",
      checked: false 
    }
    
   

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleClickOpen  = event => this.setState({ open: event.currentTarget })
  handleClose = () => this.setState({ open: false })

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
    if(this.state.checked)
    {
          console.log(this.state.secretTele)
  

    
    let  newPost ;
    if(this.props.profile.profile.handle===undefined){
      newPost = {
        text: this.state.text,
        ville:this.state.ville,
        Situation:this.state.Situation,
        GrSanguin:this.state.GrSanguin,
        Tele:this.state.Tele,
        name: user.name,
        handle: "test",
        secretTele: this.state.secretTele
        // avatar: user.avatar
      };
      // console.log(this.secretTele)
    }
    
    else{
      // this.setState({handle: this.props.profile.profile.handle});
  newPost = {
    text: this.state.text,
    ville:this.state.ville,
    Situation:this.state.Situation,
    GrSanguin:this.state.GrSanguin,
    Tele:this.state.Tele,
    name: user.name,
    handle: this.props.profile.profile.handle,
    secretTele: this.state.secretTele
    // avatar: user.avatar
  };


    }



    this.props.addPost(newPost);
    this.setState({ text: "" ,handle:"test",ville: "",Situation:"",GrSanguin:"",Tele:"",  secretTele:"" });
  }
  else
  {
    console.log(this.state.secretTele)
let  newPost ;
if(this.props.profile.profile.handle===undefined){
newPost = {
  text: this.state.text,
  ville:this.state.ville,
  Situation:this.state.Situation,
  GrSanguin:this.state.GrSanguin,
  Tele:this.state.Tele,
  name: user.name,
  handle: "test",
  secretTele: "Telephone"
  // avatar: user.avatar
};
// console.log(this.secretTele)
}

else{
// this.setState({handle: this.props.profile.profile.handle});
newPost = {
text: this.state.text,
ville:this.state.ville,
Situation:this.state.Situation,
GrSanguin:this.state.GrSanguin,
Tele:this.state.Tele,
name: user.name,
handle: this.props.profile.profile.handle,
secretTele: "Telephone"
// avatar: user.avatar
};


}



this.props.addPost(newPost);
this.setState({ text: "" ,handle:"test",ville: "",Situation:"",GrSanguin:"",Tele:"",  secretTele:"" });
}
  }

  onChange(e) {
    this.setState(
      {
         [e.target.name]: e.target.value
          // handle: "changer"
          
        })

        if(e.target.value==="Receveur" ||  e.target.value==="Donneur")
        {
        this.setState({
        displayMladiesInput: true ? e.target.value==="Receveur" :
         this.state.displayMladiesInput
      })
      
        }
        if(e.target.value==="Donneur")
        {
          this.setState({ secretTele: "Telephone" })
          this.setState({
            checked: false
          })
        }
        else 
        { 
        const now = new Date();
       var timestamp = now.getFullYear().toString(); // 2011
        // timestamp += (now.getMonth < 9 ? '0' : '') + now.getMonth().toString(); // JS months are 0-based, so +1 and pad with 0's
        // timestamp += ((now.getDate < 10) ? '0' : '') + now.getDate().toString();
        timestamp += ((now.getHours < 10) ? '0' : '') + now.getHours().toString();
        timestamp += ((now.getMinutes < 10) ? '0' : '') + now.getMinutes().toString();
        timestamp += ((now.getSeconds < 10) ? '0' : '') + now.getSeconds().toString();
        timestamp += ((now.getMilliseconds < 10) ? '0' : '') + now.getMilliseconds().toString();
          this.setState({ secretTele: timestamp })
        }
       
  }
  handleCheckboxChange = event =>{
    this.setState({
       checked: event.target.checked
    })
}
 

  render() {
    const { errors } = this.state;
    // console.log(Checkbox.propTypes)
    // const { user } = this.props.auth;
    // const { profile } = this.props.profile;
    // const { displayPost } = this.state;
    // const {lab} =this.state;

    const options = [
      { label: "Groupe sanguin", value: 0 },
      { label: "O-", value: "O-" },
      { label: "O+", value: "O+" },
      { label: "B-", value: "B-" },
      { label: "B+", value: "B+" },
      { label: "A-", value: "A-" },
      { label: "A+", value: "A+" },
      { label: "AB-", value: "AB-" },
      { label: "AB+", value: "AB+" }
    ];

    const optionsSituation = [
      { label: "Donneur ou Receveur", value: 0 },
      { label: "Donneur", value: "Donneur" },
      { label: "Receveur", value: "Receveur" }
    ];

    const optionsVille = [
      { label: "Ville", value: 0 },
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


  const { open ,displayMladiesInput} = this.state;
  let maladiesInput;

  if (displayMladiesInput) {
    maladiesInput= ( 
      <div>
      <input
       type="checkbox"
       checked={this.state.checked}
       onChange={this.handleCheckboxChange}/>
      Cachet le numero<br />
      
      </div>)
  }

  const PopNewPost = <div style={{overflowY: "initial !important", overflow: "hiden"}}>

  <Button variant="outlined" color="primary" onClick={this.handleClickOpen}   style={{background:"#ffffff", color:"black",
       border:"none", width: "120px",height:"35px",
       fontFamily:"Roboto, sans-serif",borderRadius:"25px"
       , margin: "5px 0 0 0",
        boxShadow:"box-shadow: 0 -5px 5px -5px black"}}>
       POSTER +
  </Button>
  <Dialog
  className="ForPost"
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={this.handleClose}
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
    style={{overflowY: "initial !important", overflow: "hiden"}}
  >
    <DialogTitle id="alert-dialog-slide-title" style={{padding:"16px 24px 5px 24px"}}>
    {<TitlePop>Publier pour trouver un donneur ou un receveur rapidement</TitlePop>}
    </DialogTitle>
    <TitleProfLine/>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
      {/* {formContent} */}
      <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <TextAreaFieldGroup
              placeholder="Decrire la situation pour avoir plus de resultat"
              name="text"
              value={this.state.text}
              onChange={this.onChange}
              error={errors.text}
              // style={{overflowY: "initial !important"}}
            />

          
            <div className="row mb-5">

              <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <SelectListGroup
                placeholder="Villes"
                name="ville"
                value={this.state.ville}
                onChange={this.onChange}
                options={optionsVille}
                error={errors.ville}
                /*info="Le choix du groupe sanguin est obligatoire"*/
              />
              </div>

              <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <SelectListGroup
                placeholder="Groupe Sanguins"
                name="GrSanguin"
                value={this.state.GrSanguin}
                onChange={this.onChange}
                options={options}
                error={errors.GrSanguin}
          
              />
              </div>

              <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <SelectListGroup
                placeholder="Offre Ou Demmande"
                name="Situation"
                value={this.state.Situation}
                onChange={this.onChange}
                options={optionsSituation}
                error={errors.Situation}
              />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
            
            <InputGroup
              placeholder="Telephone"
              name="Tele"
              icon="fas fa-phone"
              value={this.state.Tele}
              onChange={this.onChange}
              error={errors.Tele}
            />
                {maladiesInput}
              </div>

              {/* <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                 <Checkbox value="text"></Checkbox>
              </div> */}

              <ConButton >
              <ButtonPublier type="submit">
              Publier maintenant
              </ButtonPublier>
                {/* <button type="submit" className="btn btn-primary btn-lg btn-block text-white btn-publier"><span className="icon-search icon mr-2"></span>Donnez une vie</button> */}
              </ConButton>
            </div>
          </div>
          </form>

      </DialogContentText>
    </DialogContent>
    <DialogActions>

      <Button onClick={this.handleClose} color="primary" style={{marginTop:"5px", color: "#f50057"}}>
        Quitter
      </Button>

      {/* <Button onClick={this.handleClose} color="primary">
        Agree
      </Button> */}
    </DialogActions>
  </Dialog>
</div>

    return (
      // <div className="post-form mb-3">
      //   <div className="card card-info">
      //     <div className="card-header bg-info text-white">Say Something...</divok      //     <div className="card-body">{formContent}</div>
      //   </div>
      // </div>
  
    <Flex1>
      <div style={{width:"100%", height: "40px", background:"#D72433",display:"flex",alignItems:"center",justifyContent:"center",borderTopLeftRadius:"4px",borderTopRightRadius:"4px"}}>
      {/* <button
       style={{background:"#ffffff", color:"black",
       border:"none", width: "120px",height:"35px",
       fontFamily:"Roboto, sans-serif",borderRadius:"25px"
       , margin: "5px 0 0 0",
        boxShadow:"box-shadow: 0 -5px 5px -5px black"}}
        onClick={() => {
          this.setState(prevState => ({
            displayPost: !prevState.displayPost,
            lab :  prevState.lab==="ANULER" ? "POSTER +" : "ANULER",
          }));
        }}
        >{lab}</button> */}
        {PopNewPost}
      </div>
       <CarouselPost/>
       {/* {formContent} */}
    </Flex1>
            
     
    );
  }
}

PostForm.propTypes = {
  addPost: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { addPost, getCurrentProfile }
)(PostForm);
