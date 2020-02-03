import React, { Component } from "react";
import Moment from "react-moment";
import styled from "styled-components";

const TextTitle = styled.h3`
color: #0B2367!important;
font-size: 20px;
`
const CounterText = styled.h3`
color: green!important;
font-size: 50px;
font-weight: 800;
`
const Test = styled.h6`
font-size: 20px;
color: red;
`

const DescriptionText = styled.div`
font-size: 15px;
display: flex;
`

class ProfileCreds extends Component {
  render() {
    const { experience, profile} = this.props;
    let items;

    let Counter=0;
    
    items=profile.experience.map(
         (test)=> 
            test.current
      )
  

      for(let i=0; i<items.length;i++)
      {
        if(items[i]===true)
        {
          Counter++;
        }
      }
     


        // Liste des maladies
        // const maladies = profile.maladies.map((maladie, index) => (
        //   <div key={index} className="p-3">
        //     <i className="fa fa-check" /> {maladie}
        //   </div>
        // ));

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        {/* <h4>{exp.company}</h4> */}
        <p><strong>Date de rendez-vous: </strong><Moment format="YYYY/MM/DD">{exp.from}</Moment> 
        </p>
        <p>
          {exp.description === "" ? null : (
            <span>
             <strong>Description: </strong> <DescriptionText>{exp.description}</DescriptionText> 
            </span>
          )}
        </p>
        {!exp.current
                  ?  <Test><strong>État: </strong>- Pas encore</Test>
                  :   <Test style={{color:"green"}}><strong>État: </strong>--- Sang transfusé</Test>}
      </li>
    ));


    return (
      <div className="row">
        <div className="col-md-6">
        {profile.status==="Donneur" ? 
      <TextTitle className="text-center text-info">Programme et historique de dons</TextTitle>
      : <TextTitle className="text-center text-info">Programme et historique de transfusions</TextTitle>
      }
          
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            profile.status==="Donneur" ? 
            <p className="text-center">Aucune don faite</p>
            : <p className="text-center">Aucune transfusion faite</p>
          
           
          )}
        </div>

        <div className="col-md-6">
        {profile.status==="Donneur" ? 
         <TextTitle className="text-center text-info">Nombre de dons</TextTitle>
         : <TextTitle className="text-center text-info">Nombre transfusions faites</TextTitle>
        }
         <CounterText className="text-center text-info" style={{color: "green !important"}}> {Counter} </CounterText>
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
