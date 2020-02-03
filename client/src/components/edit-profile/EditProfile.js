import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import propTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";
import styled from "styled-components";


const Retour = styled(Link)`
width: 200px;
height: 30px;
border : 2px solid #343a40;
background: #dc3545;
margin-top: 10px;
padding: 5px;
text-decoration: none !important;
color: #FFFFFF;
@media only screen and (max-width:700px){
    width: 150px;
    height: 25px;
    font-size: smaller;
}

@media only screen and (max-width:600px){
    width: 90px;
    height: 20px;
    font-size: x-small;
}

@media only screen and (max-width: 500px)
{
    width: 80px;
    height: 18px;
    font-size: xx-small;
    border : 1.5px solid #343a40;
}

@media only screen and (max-width: 350px)
{
    width: 70px;
    height: 15px;
    font-size: 8px;
}

`


const ContainerTit = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px 0 0 0;

@media screen and (max-width: 700px) {  
 margin: 0;
}

`
const TitleProf = styled.h3`
font-size: 25px;
color: gray;
text-align: center;

@media screen and (max-width: 775px) {  
  font-size: 12px;
}
`

const TitleProfLine = styled.div`
width: 320px;
height: 2px;
background: gray;
@media screen and (max-width: 412px) {
  width: 150px;
  margin-bottom: 2px;
}
`

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      displayMladiesInput: false,
      handle: "",
      age: "",
      ville: "",
      groupsanguin: "",
      status: "",
      sex:"",
      maldies: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };
  }

  componentDidMount() {
    const { profile } = this.props.profile;

    // Bring maladies array back to CSV
    if (profile) {
      const maladiesCSV = profile.maladies.join(",");

      if (profile.social) {
        profile.twitter = !isEmpty(profile.social.twitter)
          ? profile.social.twitter
          : "";
        profile.facebook = !isEmpty(profile.social.facebook)
          ? profile.social.facebook
          : "";
        profile.linkedin = !isEmpty(profile.social.linkedin)
          ? profile.social.linkedin
          : "";
        profile.youtube = !isEmpty(profile.social.youtube)
          ? profile.social.youtube
          : "";
        profile.instagram = !isEmpty(profile.social.instagram)
          ? profile.social.instagram
          : "";
      }

      this.setState({
        handle: profile.handle,
        ville: profile.ville,
        age: profile.age,
        groupsanguin: profile.groupsanguin,
        status: profile.status,
        sex:profile.sex,
        maladies: maladiesCSV,
        displayMladiesInput: !this.state.displayMladiesInput ? profile.status==="Receveur" : this.state.displayMladiesInput,
        bio: profile.bio,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        youtube: profile.youtube,
        instagram: profile.instagram
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const profile = this.state;
    const maladiesCSV = profile.maladies;

    this.setState({
      handle: this.state.handle,
      ville: this.state.ville,
      age: this.state.age,
      groupsanguin: this.state.groupsanguin,
      status: this.state.status,
      sex: this.state.sex,
      maladies: maladiesCSV,
 
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    });

    const profileData = {
      handle: this.state.handle,
      ville: this.state.ville,
      age: this.state.age,
      groupsanguin: this.state.groupsanguin,
      status: this.state.status,
      sex: this.state.sex,
      maladies: this.state.maladies,
     
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    profileData.handle = profileData.handle ? profileData.handle : "";
    profileData.twitter = profileData.twitter ? profileData.twitter : "";
    profileData.facebook = profileData.facebook ? profileData.facebook : "";
    profileData.linkedin = profileData.linkedin ? profileData.linkedin : "";
    profileData.youtube = profileData.youtube ? profileData.youtube : "";
    profileData.instagram = profileData.instagram ? profileData.instagram : "";

    this.props.createProfile(profileData, this.props.history);
  };

  onChange = e => {
    this.setState(
      {
         [e.target.name]: e.target.value,
        //  displayMladiesInput: true ? e.target.value==="Receveur" : {displayMladiesInput: false}
        });
              if(e.target.value==="Receveur" ||  e.target.value==="Donneur")
            {
            this.setState({
            displayMladiesInput: true ? e.target.value==="Receveur" :
             this.state.displayMladiesInput
          })
            }
  };


  // onChange(e) {
  //   this.setState(
  //     {
  //        [e.target.name]: e.target.value,
  //     }) 
  //     if(e.target.value==="Receveur" ||  e.target.value==="Donneur")
  //           {
  //           this.setState({
  //           displayMladiesInput: true ? e.target.value==="Receveur" :
  //            this.state.displayMladiesInput
  //         })
  //           }
  //     }

  render() {
    const { displaySocialInputs,displayMladiesInput } = this.state;
    const { errors } = this.props;

    let maladiesInput;

    if (displayMladiesInput) {
      maladiesInput= ( 
       <TextFieldGroup
        placeholder="* maladies, causes de besoin sang "
        name="maladies"
        value={this.state.maladies}
        onChange={this.onChange}
        error={errors.maladies}
        info="S'ilt vous plait utuliser virgule pour separer les maladies (ex.
          anatomie,cardiaque,cancer"
      />)
    }

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <InputGroup
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    const optionsSex = [
      { label: "* Sex", value: 0 },
      { label: "Homme", value: "Homme" },
      { label: "Femme", value: "Femme" }
    ];

    // Options Statut (Etat de profile)
    const options = [
      { label: "* Selectionner votre Etat", value: 0 },
      { label: "Donneur", value: "Donneur" },
      { label: "Receveur", value: "Receveur" }
    ];

        // Options Statut (Etat de profile)
        const optionsville = [
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


        // Options Age (Age)
        const optionsage = [
          { label: "* Quel est votre age", value: 0 },
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
          { label: "4", value: "4" },
          { label: "5", value: "5" },
          { label: "6", value: "6" },
          { label: "7", value: "7" },
          { label: "8", value: "8" },
          { label: "9", value: "9" },
          { label: "10", value: "10" },
          { label: "11", value: "11" },
          { label: "12", value: "12" },
          { label: "13", value: "13" },
          { label: "14", value: "14" },
          { label: "15", value: "15" },
          { label: "16", value: "16" },
          { label: "17", value: "17" },
          { label: "18", value: "18" },
          { label: "19", value: "19" },
          { label: "20", value: "20" },
          { label: "21", value: "21" },
          { label: "22", value: "22" },
          { label: "23", value: "23" },
          { label: "24", value: "24" },
          { label: "25", value: "25" },
          { label: "26", value: "26" },
          { label: "27", value: "27" },
          { label: "28", value: "28" },
          { label: "29", value: "29" },
          { label: "30", value: "30" },
          { label: "31", value: "31" },
          { label: "32", value: "32" },
          { label: "33", value: "33" },
          { label: "34", value: "34" },
          { label: "35", value: "35" },
          { label: "36", value: "36" },
          { label: "37", value: "37" },
          { label: "38", value: "38" },
          { label: "39", value: "39" },
          { label: "40", value: "40" },
          { label: "41", value: "41" },
          { label: "42", value: "42" },
          { label: "43", value: "43" },
          { label: "44", value: "44" },
          { label: "43", value: "43" },
          { label: "44", value: "44" },
          { label: "45", value: "45" },
          { label: "46", value: "46" },
          { label: "47", value: "47" },
          { label: "48", value: "48" },
          { label: "49", value: "49" },
          { label: "50", value: "50" },
          { label: "51", value: "51" },
          { label: "52", value: "52" },
          { label: "53", value: "53" },
          { label: "54", value: "54" },
          { label: "55", value: "55" },
          { label: "56", value: "56" },
          { label: "57", value: "57" },
          { label: "55", value: "55" },
          { label: "56", value: "56" },
          { label: "57", value: "57" },
          { label: "58", value: "58" },
          { label: "59", value: "59" },
          { label: "60", value: "60" },
          { label: "61", value: "61" },
          { label: "62", value: "62" },
          { label: "63", value: "63" },
          { label: "64", value: "64" },
          { label: "65", value: "65" },
          { label: "66", value: "66" },
          { label: "67", value: "67" },
          { label: "68", value: "68" },
          { label: "69", value: "69" },
          { label: "70", value: "70" },
          { label: "71", value: "71" },
          { label: "72", value: "72" },
          { label: "73", value: "73" },
          { label: "74", value: "74" },
          { label: "75", value: "75" },
          { label: "76", value: "76" },
          { label: "77", value: "77" },

        ];

                // Options Groupe Sanguin (Age)
                const optionsgroupsanguin = [
                  { label: "* Selectionner votre groupe sanguin", value: 0 },
                  { label: "0+", value: "O+" },
                  { label: "O-", value: "O-" },
                  { label: "B-", value: "B-" },
                  { label: "B+", value: "B+" },
                  { label: "A+", value: "A+" },
                  { label: "A-", value: "A-" },
                  { label: "AB-", value: "AB-" },
                  { label: "AB+", value: "AB+" }
                ];

    

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">

            <ContainerTit>
                  {/* <TitleProfLine></TitleProfLine> */}
              <TitleProf>Modification de profile moutabari3</TitleProf>
              <TitleProfLine></TitleProfLine>
            </ContainerTit>
              <div style={{marginBottom:"20px"}}>
              <Retour to="/gestion-profile-donneur-receveur" >
               Retour
              </Retour>
              </div>
              {/* <small className="d-block pb-3">* = Chanp requis</small> */}
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Nom utulisateur"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="Une poignée unique pour l'URL de votre profil. Votre nom complet, nom de departement, surnom"
                />
                <SelectListGroup
                  placeholder="Etat"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={options}
                  error={errors.status}
                  info=""
                />
                  {maladiesInput}
                <SelectListGroup
                  placeholder="Etat"
                  name="groupsanguin"
                  value={this.state.groupsanguin}
                  onChange={this.onChange}
                  options={optionsgroupsanguin}
                  error={errors.groupsanguin}
                  info=""
                />

                <SelectListGroup
                  placeholder="Ville"
                  name="ville"
                  value={this.state.ville}
                  onChange={this.onChange}
                  options={optionsville}
                  error={errors.ville}
                  info="Les gens vous contacteront en fonction de votre ville"
                />

                 <SelectListGroup
                  placeholder="Age"
                  name="age"
                  value={this.state.age}
                  onChange={this.onChange}
                  options={optionsage}
                  error={errors.age}
                  info="L'age de profile"
                />

               <SelectListGroup
                  placeholder="sex"
                  name="sex"
                  value={this.state.sex}
                  onChange={this.onChange}
                  options={optionsSex}
                  error={errors.sex}
                  info=""
                />



                <TextAreaFieldGroup
                  placeholder="Courte description"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Donner une idee generale sur votre situation ou votre motivation"
                />
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                    style={{width:"100%",borderRadius:"3px"}}
                  >
                    Ajouter vos liens des reseaux souciaux
                  </button>
                  <span className="text-muted">C'est un champ optionnel</span>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Modifier"
                  className="btn btn-info btn-block mt-4"
                  style={{width:"100%",
                  borderRadius:"3px",
                  background:"#dc3545",
                  border:"none"
                 }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  createProfile: propTypes.func.isRequired,
  profile: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(EditProfile));
