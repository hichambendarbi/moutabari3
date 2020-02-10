import React, { Component } from "react";
import propTypes from "prop-types";
import './barSearch.css';
import PostItem from "./PostItem";
// import PostItems from "./PostItems";
// import PostItem1 from "./PostItem1";
// import PaginationPost from './PaginationPost';
import styled from 'styled-components';


const DivSearch = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 80px;
// background: #C42020;
background: transparent;
align-items: center;
border: 10px solid transparent;
// margin-bottom: 30px;
@media only screen and (max-width:700px){
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  background: transparent;
  align-items: center;
  // border: 5px solid gray;

}
`

const DivInput = styled.div`
width: 33.5%;
height: 50px;
border: 5px solid #0B2367;
radius: 10px;
border-top-left-radius: ${props => props.btlr};
border-bottom-left-radius: ${props => props.bblr};
border-top-right-radius: ${props => props.btrr};
border-bottom-right-radius: ${props => props.bbrr};

@media only screen and (max-width:700px){
  width: 33.5%;
  height: 35px;
  border: 2px solid black;
  radius: 10px;
}

`

const SelectS = styled.select`
width: 100%;
height: 45px;
border: none;
background: transparent;
border-top-left-radius: ${props => props.btlr};
border-bottom-left-radius: ${props => props.bblr};
border-top-right-radius: ${props => props.btrr};
border-bottom-right-radius: ${props => props.bbrr};
color: black;
font-size: 20px;
padding-left: 10px;

@media only screen and (max-width:700px){
  background: transparent;
  width: 100%;
  height: 30px;
  font-size: 8px;
  color: black;
  padding-left: 5px;
}
`

const InputVille = styled.input`
width: 100%;
height: 45px;
border: none;
background: transparent;
font-size: 20px;
padding-left: 10px;
::placeholder {
  color: black;
}
@media only screen and (max-width:700px){
  width: 100%;
  height: 30px;
  border: none;
  background: transparent;
  font-size: 8px;
  padding-left: 10px;
}
`

const TitleT = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

const TitleListe=styled.h1`
text-align: center;
font-size: 30px;
padding: 0px 20Px 20px 20Px;
font-family: "Times", Times New Roman, serif;
@media only screen and (max-width:550px){
  font-size: 13px;
}
@media only screen and (max-width:400px){
  font-size: 12px;
}
@media only screen and (max-width:350px){
  font-size: 10px;
  padding: 0px 20Px 10px 20Px;
}
`

const TitleProfLine = styled.div`
width: 250px;
height: 2px;
background: gray;
margin-top: -20px;
margin-bottom: 20px;
@media only screen and (max-width:550px){
  width: 150px;
}
@media screen and (max-width: 400px) {
  width: 120px;
}
@media screen and (max-width: 320px) {
  width: 100px;
}
`

class PostFeed extends Component {
constructor(){
  super();
  this.state = {
    search: '',
    search2:'',
    search3:'',
  };
}

updateSearch(event) {
  this.setState({   
    search: event.target.value.substr(0,20)
  });
}

updateSearch2(event) {
  this.setState({
    search2: event.target.value.substr(0,20)
  });
 
}

updateSearch3(event) {
  this.setState({
    search3: event.target.value.substr(0,20)
  });
}

  render() {
    const  posts  = this.props.posts.filter(
       (post) => {
        const query = this.state.search.toLowerCase();
        const query2 = this.state.search2.toLowerCase();
        const query3 = this.state.search3.toLowerCase();
        return post.Situation.toLowerCase().indexOf(query)>=0 && post.ville.toLowerCase().indexOf(query2)>=0 && post.GrSanguin.toLowerCase().indexOf(query3)>=0;

      }
    );
  




    return <div >
       {/*      <form>
        <input type="text" placeholder="search" style={{textAlign:"center"}} value={this.state.search} onChange={this.updateSearch.bind(this)}/>
      </form>*/}
        
 <form style={{width:"100%"}}>
 {/* <h3>Chercher sur moutabari3.ma</h3> */}
<DivSearch>

                <DivInput btlr="20px" bblr="20px">
                            <SelectS name="" id="" btlr="20px" bblr="20px" value={this.state.search} onChange={this.updateSearch.bind(this)}>
                            <option value=''>Je cherche un </option>
                            <option value='Donneur'>Donneur</option>
                            <option value='Receveur'>Receveur</option>
                            </SelectS>
                </DivInput>
                <DivInput style={{borderLeft:"0px", borderRight:"0px"}}>
                < InputVille type="text" placeholder="Tout le maroc" value={this.state.search2} onChange={this.updateSearch2.bind(this)}/>
                </DivInput>
                <DivInput btrr="20px" bbrr="20px">
                            <SelectS  name="" id=""  btrr="20px" bbrr="20px" value={this.state.search3} onChange={this.updateSearch3.bind(this)}>
                            <option value=''>Groupes sanguin</option>
                            <option value='O-'>O-</option>
                            <option value='O+'>O+</option>
                            <option value='B-'>B-</option>
                            <option value='B+'>B+</option>
                            <option value='A+'>A+</option>
                            <option value='A-'>A-</option>
                            <option value='A-'>AB-</option>
                            <option value='A-'>AB+</option>
                            </SelectS>
                </DivInput>
                </DivSearch>
                <TitleT>
                  <div>
                <TitleListe className="TitleListe">Liste des donneurs et des receveurs</TitleListe>
                </div>
                <TitleProfLine></TitleProfLine>
                </TitleT>
   </form>
   
       {posts.map((post)=> <PostItem key={post._id} post={post} />)} 
         {/* <PostItem/> */}
      </div>
  }
}

PostFeed.propTypes = {
  posts: propTypes.array.isRequired
};

export default PostFeed;
