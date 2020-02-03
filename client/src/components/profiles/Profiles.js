import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getProfiles } from "../../actions/profileActions";
import ProfileItem from "./ProfileItem";
import styled from "styled-components";
import "./barCss.css";
const AllProfileContainer=styled.div`
display: flex;
flex-direction: column;
margin: 20px 10px 0 10px;
align-items: center;
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
width: 420px;
height: 2px;
background: gray;
@media screen and (max-width: 412px) {
  width: 150px;
  margin-bottom: 2px;
}
`

const ContainerCarsPro = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 190px;
background: #D72433;
justify-content: center;
height: 160px;
// margin: 100px 0;
@media screen and (max-width: 775px) {  
  height: 160px;
}
@media screen and (max-width: 500px) {
  height: 160px;
}
@media screen and (max-width: 500px) {
  height: 160px;
}
@media screen and (max-width: 412px) {
  height: 150px;
}
`

const CardsProfiles = styled.div`
display: flex;
flex-direction: column;
width: 33.3%;
// background: red;
// height: 160px;
margin: 2px;

`

const TitleCardsProfile = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: transparent;
width: 100%;

@media screen and (max-width: 500px) {
  height: 30px;
}
`

const TitleText = styled.h4`
font-weight: 700;
@media screen and (max-width: 1000px) {
  font-size: 1rem;
}

@media screen and (max-width: 775px) {
  font-size: 0.8rem;
}

@media screen and (max-width: 500px) {
  font-size: 0.7rem;
}

@media screen and (max-width: 500px) {
  font-size: 0.6rem;
}

@media screen and (max-width: 420px) {
  font-size: 0.5rem;
  font-weight: 700;
}

@media screen and (max-width: 380px) {
  font-size: 8px;
  font-weight: 700;
}
`

const CardsText = styled.div`
// display: flex;
// align-items: center;
// background: #ffffff;
// width: 100%;
// height: 250px;

    display: flex;
    justify-content: center;
    background: #ffffff;
    width: 100%;
    padding: 7Px;
    text-align: center;
    height: 140px;
    @media screen and (max-width: 1000px) {
      font-size: 14px;
    }
    @media screen and (max-width: 800px) {
      font-size: 13px;
    }
    @media screen and (max-width: 775px) {
      font-size: 12px;
      height: 130px;
    }
    @media screen and (max-width: 770px) {
      font-size: 11px;
    }
    @media screen and (max-width: 540px) {
      font-size: 10px;
    }
    @media screen and (max-width: 460px) {
      font-size: 9px;
      height: 125px;
    }
    @media screen and (max-width: 412px) {
      font-size: 8px;
      height: 110px;
    }
    @media screen and (max-width: 380px) {
      font-size: 7px;
    }
`
const FlexEntete = styled.div`
display: flex;
flex-direction: row;
width:100%;
justify-content: space-between;
margin: 25px 0 0 0;
@media screen and (max-width: 1100px) {
  flex-direction: column;
  margin: 10px;
}
@media screen and (max-width: 700px) {
  margin: 10px;
}
`
const SearchBar = styled.div`
display: flex;
`
// const TitlePro = styled.h1`

// `

class Profiles extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }
  componentDidMount() {
    this.props.getProfiles();
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0,20)
    });
  }

  render() {
    document.title ="profiles de donneurs et de receveurs régulières sur moutabari3"; 
    document.getElementsByTagName("META")[2].content="les donneurs regulieres et les receveurs sont creer un profile pour optimiser leurs chance de faire transfuser le sang";
       const {profiles, loading} = this.props.profile;
      console.log(profiles)
      let Test;
      if (profiles === null || loading) {
        console.log("Spinner")
      }else{
        Test = this.props.profile.profiles.filter(
      (profile) => {
       const query = this.state.search.toLowerCase();
       return profile.status.toLowerCase().indexOf(query)>=0 || profile.groupsanguin.toLowerCase().indexOf(query)>=0 || profile.ville.toLowerCase().indexOf(query)>=0
       || profile.user.name.toLowerCase().indexOf(query)>=0 ;
                     }
                       );
                      }
let profileItems;
    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = Test.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>Aucun profile exister...</h4>;
      }
    }
 

  //   profileItems = this.props.posts.filter(
  //     (profile) => {
  //      const query = this.state.search.toLowerCase();
  //      return profile.Situation.toLowerCase().indexOf(query)>=0;
  //    }
  //  );




    return (
     <AllProfileContainer>

<ContainerCarsPro>
                <CardsProfiles>
                  <TitleCardsProfile><TitleText>Le profile moutabari3</TitleText></TitleCardsProfile>
                  <CardsText>
                  C'est comme une carte d'identité
                  à travers laquelle le titulaire du
                  compte donne une idée générale de son état
                  afin d'obtenir de bons
                  résultats dans la recherche d'un donneur ou receveur
                  </CardsText>
                  </CardsProfiles>
                <CardsProfiles>
                  <TitleCardsProfile><TitleText>Le profile receveur</TitleText></TitleCardsProfile>
                  <CardsText>
                  Le receveur peut mettre en place un programme
                   de besoin de sang et des informations personnelles pour 
                   augmenter la chance d'avoir des donneurs sang rapidement et régulièrement
                  </CardsText>
                </CardsProfiles>
                <CardsProfiles>
                  <TitleCardsProfile><TitleText>Le profile donneur</TitleText></TitleCardsProfile>
                  <CardsText>
                  pour être un donneur régulier il suffit de
                  créer un profile et de mettre en ligne un programme
                  de don de 6 fois par an 
                  De nombreuses receveurs vous contacteront
                  </CardsText>
                </CardsProfiles>
</ContainerCarsPro>
          <FlexEntete className="test">
            <ContainerTit>
                  {/* <TitleProfLine></TitleProfLine> */}
              <TitleProf>Donneurs et receveurs ayant créé un profile</TitleProf>
              <TitleProfLine></TitleProfLine>
            </ContainerTit>
               <SearchBar>
            <form style={{width:"100%"}}>
            <div style={{padding:"10px"}}>
            <div class="container h-100">
            <div class="d-flex justify-content-center h-100">
            <div class="searchbar">
            <input class="search_input" type="text" name="" placeholder="Search..." onChange={this.updateSearch.bind(this)}/>
             <a href="#!" class="search_icon"><i class="fas fa-search"></i></a>
            </div>
            </div>
            </div>
            </div>
            </form>
              </SearchBar>
</FlexEntete>
    {profileItems}
</AllProfileContainer>
    );
  }
}

Profiles.proptypes = {
  getProfiles: propTypes.func.isRequired,
  profile: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);





