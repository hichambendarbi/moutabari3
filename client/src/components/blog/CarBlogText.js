import React, { Component } from 'react';
import styled from 'styled-components'

const Title = styled.h1`
font-family: inherit;
// padding: 5px
font-size: 30px;
// margin-right: 30px;
width: 100%;
@media only screen and (max-width:1000px){
    font-size:28px;
}
@media only screen and (max-width:730px){
    font-size:25px;
}

@media only screen and (max-width:710px){
    font-size:20px;
}

@media only screen and (max-width:700px){
    font-size:13px;
    font-weith: 800;
}

@media only screen and (max-width:500px){
    font-size:10px;
    font-weith: 800;
    margin: inherit;
}
@media only screen and (max-width:350px){
    font-size:8px;
    font-weith: 800;
}
@media only screen and (max-width:307px){
    font-size:7px;
    font-weith: 800;
}
`
class CarBlogText extends Component {
    render() {
        return (
            <div>
 <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner" style={{marginBottom:"0px important"}}>
    <div className="carousel-item active" style={{marginBottom:"0px important"}}>
    <Title >Ne perdez pas beaucoup plus du temps</Title>
    </div>
    <div className="carousel-item" style={{marginBottom:"0px important"}}>
    <Title >Essayer de trouver un hero de sang</Title>
    </div>
    <div className="carousel-item" style={{marginBottom:"0px important"}}>
    <Title >Partager votre pouvoir de don</Title>
    </div>
  </div>
</div>
            </div>
        )
    }
}
export default CarBlogText