import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { addExperience, getCurrentProfile } from "../../actions/profileActions";
import SelectListGroup from "../common/SelectListGroup";
import styled from "styled-components";

const Retour = styled(Link)`
width: 200px;
height: 30px;
border : 2px solid #343a40;
background: #dc3545;
margin-top: 10px;
margin-bottom: 10px;
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

const TitleAddExp = styled.h1`
font-size: 30px;
font-weight: 700;
letter-spacing: 5px;
color: #0062cc;
@media only screen and (max-width: 700px)
{
  font-size: 1.5rem !important;
  letter-spacing: 3px;
}
@media only screen and (max-width: 500px)
{
  font-size: 1rem !important;
  letter-spacing: 1px;
}
`

const SousDateTitle = styled.h2`
font-size: 20px;
color: red;
letter-spacing: 3px;
@media only screen and (max-width: 700px)
{
  font-size: 1rem !important;
  letter-spacing: 2px;
}
@media only screen and (max-width: 500px)
{
  font-size: 0.8rem !important;
  letter-spacing: 1px;
}
`

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ville: "",
      // title: "",
      // location: "",
      from: "",
      // to: "",
      current: false,
      description: "",
      errors: {},
      // disabled: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const expData = {
      ville: this.state.ville,
      // title: this.state.title,
      // location: this.state.location,
      from: this.state.from,
      // to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addExperience(expData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      // disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  

  render() {

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
    
    const { errors } = this.state;

    return (
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">

              <TitleAddExp className="display-4 text-center">Ajouter une date de transfusion</TitleAddExp>
              <SousDateTitle className="lead text-center">
                Cette date ca va ajouter a votre calendrier
              </SousDateTitle>
<div style={{marginBottom: "20px"}}>
<Retour to="/gestion-profile-donneur-receveur">
                Retour
              </Retour>
</div>
    
              <form onSubmit={this.onSubmit}>
                {/* <TextFieldGroup
                  placeholder="* Ville"
                  name="ville"
                  value={this.state.ville}
                  onChange={this.onChange}
                  error={errors.ville}
                /> */}
 
              <SelectListGroup
                placeholder="Villes"
                name="ville"
                value={this.state.ville}
                onChange={this.onChange}
                options={optionsVille}
                error={errors.ville}
                /*info="Le choix du groupe sanguin est obligatoire"*/
              />


                {/* <TextFieldGroup
                  placeholder="* Job Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                /> */}
                <h6>Date de don</h6>
                <TextFieldGroup
                  name="from"
                  type="date"
                  value={this.state.from}
                  onChange={this.onChange}
                  error={errors.from} 
                />
                {/* <h6>To</h6>
                <TextFieldGroup
                  name="to"
                  type="date"
                  value={this.state.to}
                  onChange={this.onChange}
                  error={errors.to}
                  disabled={this.state.disabled ? "disabled" : ""}
                /> */}
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
                  <label htmlFor="current" className="form-check-label" style={{marginBottom:"10px"}}>
                    Sang Transfuser
                  </label>
                </div>
                <h6>Description</h6>
                <TextAreaFieldGroup
                  placeholder="Description de date"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="Decrivez la date de transfusion"
                />
                <input
                  type="submit"
                  value="Ajouter"
                  className="btn btn-info btn-block mt-4"
                  style={{width:"100%",borderRadius:"3px",background:"#DC3545"}}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddExperience.propTypes = {
  addExperience: propTypes.func.isRequired,
  profile: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addExperience, getCurrentProfile }
)(withRouter(AddExperience));
