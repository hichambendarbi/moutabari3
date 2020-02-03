import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { deleteExperience } from "../../actions/profileActions";
import SingleExperience from "./SingleExperience";
import styled from "styled-components";

const CalendarDetails = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

const BoxFieldsDetails = styled.div`
    display: flex;
    flex-direction: row;
    background: #e9ecefa1;
    text-align: center;
    justify-content: space-evenly;
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
    @media screen and (max-width: 520px) {
      height: 30px;
    }
    @media screen and (max-width: 350px) {
      height: 26px;
    }

`

const FieldsDetails = styled.div`
display: flex;
border: 2Px solid #23619e;
width: inherit;
text-align: center;
justify-content: center;
align-items: center;
// background: #17a2b8;

@media screen and (max-width: 690px) {
  font-size: 15px;
}

@media screen and (max-width: 520px) {
  font-size: 13px;

}

@media screen and (max-width: 450px) {
  font-size: 12px;

}

@media screen and (max-width: 420px) {
  font-size: 11px;

}

@media screen and (max-width: 390px) {
  font-size: 8px;

}
@media screen and (max-width: 285px) {
  font-size: 7px;

}
`

const FieldsDetailsVille = styled.div`
display: flex;
border-top: 2Px solid #23619e;
border-bottom: 2Px solid #23619e;
width: inherit;
text-align: center;
justify-content: center;
align-items: center;
// background: #17a2b8;
@media screen and (max-width: 690px) {
  font-size: 15px;
}

@media screen and (max-width: 520px) {
  font-size: 13px;

}

@media screen and (max-width: 450px) {
  font-size: 12px;

}

@media screen and (max-width: 420px) {
  font-size: 11px;

}

@media screen and (max-width: 390px) {
  font-size: 8px;

}
@media screen and (max-width: 285px) {
  font-size: 7px;

}
`




class Experience extends Component {
  onDeleteClick = id => {
    this.props.deleteExperience(id);
  };

  onEditClick = id => {
    this.props.editExperience(id);
  };

  render() {
    const experience = this.props.experience
      .sort(function(a, b) {
        return +new Date(a.from) - +new Date(b.from);
      })
      .reverse()
      .map(exp => (
        <SingleExperience
          exp={exp}
          key={exp._id}
          onDeleteClick={this.onDeleteClick}
        />
      ));



      // const Tit = ({
      //   text
      // }) => {
      //   return (
      //       <h4 className="mb-5 center-mobile" >{text}</h4>
      //   );
      // }
      
    return (
      <CalendarDetails>
      <BoxFieldsDetails>
          <FieldsDetails>Date</FieldsDetails>
          <FieldsDetailsVille>Ville</FieldsDetailsVille>
          <FieldsDetails>Description</FieldsDetails>
      </BoxFieldsDetails>
      {experience}
     </CalendarDetails>
    //  <div>
    //      <h4 className="mb-5 center-mobile" >Calendrier des prochaines don que vous avez planifier</h4>
    //     <div className="evenly-space bold hide-when-tablet">
    //       <div className="space center">Ville</div>
    //       <div className="space center">Date</div>
    //       <div className="space center">Description</div>
    //     </div>
    //     {experience}
    //   </div>
    );
  }
}

deleteExperience.propTypes = {
  deleteExperience: propTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
