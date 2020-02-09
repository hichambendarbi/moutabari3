import React, { Component } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import styled from "styled-components";

const FlexContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 80px;
background: #f8f9fa;
border: 1px solid black;
border-radius: 3px;
padding: 5px 20px;
margin: 15px 0 0 0;
@media screen and (max-width: 450px) {
  height: 60px;
}
`

const BoxName = styled.div`
display: flex;
width: 100%;
height: 40px;
`

const TextName= styled.h1`
font-size: 30px;
color: #0B2367;
font-weight: 700;
@media screen and (max-width: 600px) {
  font-size: 25px;
}
@media screen and (max-width: 500px) {
  font-size: 22px;
}
`
const BoxInfo = styled.div`
display: flex;
flex-direction: row;
height: 40px;
justify-content: space-between;
@media screen and (max-width: 450px) {
  height: 20px;
}
`
const BoxAge = styled.div`
display: flex;
`
const InfoParag = styled.p`
font-size: 15px;
@media screen and (max-width: 600px) {
  font-size: 13px;
}
@media screen and (max-width: 500px) {
  font-size: 11px;
}
@media screen and (max-width: 450px) {
  font-size: 9px;
}
@media screen and (max-width: 380px) {
  font-size: 6px;
}
`

class ProfileItem extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }
  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0,20)
    })
  }
  render() {

    const { profile } = this.props;
    return (
      <FlexContainer>
        <BoxName>
          <TextName>
          {/* <Link to={`/profile/${profile.handle}`}>
              <img
                src={profile.user.avatar}
                alt=""
                className="rounded-circle"
              />
            </Link> */}
            {profile.user.name}
          </TextName>
        </BoxName>
        <BoxInfo>          
          <BoxAge>
          <InfoParag>
            Groupe Sanguin : {" "}
              {profile.groupsanguin}
            </InfoParag>
          </BoxAge>
          <BoxAge>
          <InfoParag>
            Age :  {isEmpty(profile.age) ? null : (
                <span>{profile.age}</span> 
              )}{" "}{"ans"}
            </InfoParag>
          </BoxAge>
          <BoxAge>
          <InfoParag>
              {profile.status}{" "}
              {isEmpty(profile.groupsanguin) ? null : (
                <span>De {profile.ville}</span>
              )}
            </InfoParag>
          </BoxAge>
          <BoxAge>
          <Link to={`/profile/${profile.handle}`} id="btn-voir-profile" >
              Voir le profile
            </Link>
          </BoxAge>

        </BoxInfo>

  
            


          {/* <div className="col-md-4 d-none d-md-block">
            <h4>Maladies</h4>
            <ul className="list-group">
            <li className="list-group-item">
            <i className="fa fa-check pr-1" />
              Maladie 1
            </li>
            <li className="list-group-item">
            <i className="fa fa-check pr-1" />
              Maladie 2
            </li>
              {profile.maladies.slice(0, 4).map((maladie, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {maladie}
                </li>
              ))}
            </ul>
          </div> */}

      </FlexContainer>
    );
  }
}

ProfileItem.propTypes = {
  profile: propTypes.object.isRequired
};

export default ProfileItem;
