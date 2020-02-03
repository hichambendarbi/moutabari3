import React, { Component } from 'react'
import styled from 'styled-components'
//  import  ScreenF from '../../assets/img/Screenshot_20190517-163727.png';
//  import  ScreenI from '../../assets/img/868.jpg';
import CarouselBlog from './CarouselBlog';
import CarBlogText from './CarBlogText'
import  Confirm from '../../assets/img/confirm.svg';
import  RoundError from '../../assets/img/alert.svg';
// import ImgL from '../../assets/img/blood-d.jpg';
import PhoneF from '../../assets/img/PhoneF.JPG';


const ObjectifD = styled.div `
    color: black;
    text-align: center;
    height: 100%;
    // background-color: #C42020;
    margin: 0 40px;
    display: flex;
    flex-direction: column;
    justify-contents:center;
    
    font-family: inherit;
    @media only screen and (max-width:1000px){
        color: black;
        text-align: center;
        height: 100%;
        // background-color: #C42020;
        margin: 0 40px;
        display: flex;
        flex-direction: column;
        justify-contents:center;
        font-family: inherit;
    }
    @media only screen and (max-width:700px){
        display: flex;
        flex-direction: column;
        justify-contents:center;
        font-family: inherit;
        align-items:center;
        height: 100%;
    }
    // @media only screen and (max-width:600px){
    //     flex-direction: column-reverse;
    // }
`

const TitleObjectif = styled.div`
display: flex;
flex-direction: row;
height: 55px;
width: 100%;
background-color:  rgb(215, 36, 51);
margin:0;
justify-content: space-between;
align-items: center;
padding: 0 20Px;
@media only screen and (max-width:1000px){
    font-size: 5px;
    }
@media only screen and (max-width:700px){
    width: 400px;
}
@media only screen and (max-width:500px){
    width: 100%;
    height: 40px;
}
@media only screen and (max-width:415px){
    padding: 0 10Px;
}
@media only screen and (max-width:370px){
    padding: 0 8Px;
    height: 30px;
}

// @media only screen and (max-width:350px){
//     height: 25px;
//     padding: 0 5Px;
// }
// @media only screen and (max-width:307px){
//     height: 20px;
//     padding: 0 3Px;
// }
// @media only screen and (max-width:600px){
//  display: none;
// }

`
const CarouselScreen = styled.div`
height: 100%;
width: 25%;
background-color: none;
@media only screen and (max-width:1000px){
    height: 100%;
    width: 25%;
    -webkit-box-pack: center;
    -webkit-justify-contents: center;
    -ms-flex-pack: center;
    justify-contents: center;
    font-family: inherit;
    background-color: none;
}
@media only screen and (max-width:700px){

    height: 100%;
    width: 100%;
    /* margin: 0 10px; */
    -webkit-box-pack: center;
    -webkit-justify-contents: center;
    -ms-flex-pack: center;
    justify-contents: center;
    font-family: inherit;
}

`
const TextMotivation = styled.div`
display: flex;
flex-direction: row;
height: 100%;
width: 100%;
// background-color: gray;
@media only screen and (max-width:1000px){
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
}

@media only screen and (max-width:700px){
    display: flex;
    flex-direction: column;
    width: 100%;
}
`

const Flexb = styled.div`
height: 100%;
display: flex;
flex-direction: row;
margin-top: 15px;
@media only screen and (max-width:700px){
    display: flex;
    flex-direction: column;
    margin-top: 8px;
}
`

const BoxTI =styled.div`
width: 50%;
height: 100%;
// background-color: green;
margin-left: 30px;
text-align: left;

@media only screen and (max-width:700px){
    width: 100%;
    height: 100%;
    // background-color: green;
    margin-left: 0px;
    text-align: left;
}
`

const BoxTP =styled.div`
width: 50%;
height: 100%;
margin-left: 10px;
text-align: left;
// background-color: yellow;
@media only screen and (max-width:700px){
    width: 100%;
    height: 100%;
    // background-color: green;
    margin-left: 0px;
    text-align: left;
}
`
const TitleL = styled.h1`
// padding: 8px;
color: #212529;
font-weith: 900;
font-family: inherit;
// padding: 5px;
font-size: 30px;
// margin-right: 30px;
width: 50%;
margin-bottom: 0px;
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

const TitleD = styled.h3`
color:  #C42020;
font-size: 30px;
margin-top: 15px;
@media only screen and (max-width:1000px){
    font-size:20px;
    margin-top: 14px;
}
@media only screen and (max-width:900px){
    font-size:15px;
    margin-top: 13px;
}
@media only screen and (max-width:800px){
    font-size:13px;
    margin-top: 11px;
}
@media only screen and (max-width:700px){
    font-size:15px;
}
`

const SousTitle= styled.span`

// color: #4AA2B8;
color: black;
font-size: 15px;
margin-top: 20px;

@media only screen and (max-width:1000px){
    color: black;
    font-size:13px;
    margin-top: 18px;
}
@media only screen and (max-width:950px){
    color: black;
    font-size:11px;
    margin-top: 16px;
}
@media only screen and (max-width:900px){
    color: black;
    font-size:10px;
    margin-top: 15px;
}
@media only screen and (max-width:800px){
    color: black;
    font-size:8px;
    margin-top: 15px;
}
@media only screen and (max-width:700px){
    font-size:8px;
}
`

const Line = styled.span`
width: 112px;
height: 7px;
border-bottom: 3px solid  #C42020;
position: absolute;
`

const DivCont = styled.div`
marginTop:20Px;
display:flex;
flex-direction:column;
@media only screen and (max-width:700px){
    display:flex;
    flex-direction:column;
    font-size:9px;
    marginTop:10px;
}
`

const ButtonPoster =styled.button `
border-radius: 3px;
background-color: #232829;
border: 2px solid black;
// padding: 0 4px 0 4px;
font-size: 20px;
color: #FFFFFF;
cursor:pointer;
text-align: center;
padding: 5px
@media only screen and (max-width:1000px){
    font-size:20px;
    padding: 0 2px 0 2px;
  
}
@media only screen and (max-width:700px){
    font-size: 10px;
    padding: 5Px;
}
@media only screen and (max-width:465px){
    font-size: 9px;
    padding: 3Px;
    }
    @media only screen and (max-width:370px){
        font-size: 8px;
    }
    @media only screen and (max-width:307px){
        font-size: 7px;
    }
`

const FlexBoxAbout = styled.div`
display: flex;
flex-direction: row;
width: 100%:
margin: 0 10px 0 10px;
margin-top: 30px;
border: 3px solid #f8f9fa;
padding: 2px;
// background: red;
// height: 300px;
margin-top: 10Px;
@media only screen and (max-width:700px){
    width: 100%;
    // margin-top: 30px;
    // height: 300px;
}
// @media only screen and (min-width:600px){
// display: none;
// }
`


const BoxImageAbout = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
// height: 300px;
`

const BoxText = styled.div`
width: 50%;
// height: 400px;
// background: red;
// position: absolute;
display: flex;
flex-direction: column;
align-items: flex-start;
margin-left: 20px;
// margin-left: -25%;
@media only screen and (max-width:950px){
    width: 400px;
    height: 300px;
}
@media only screen and (max-width:900px){
    width: 350px;
    height: 250px;
}
@media only screen and (max-width:780px){
    width: 300px;
    height: 200px;
}
@media only screen and (max-width:670px){
    width: 250px;
    height: 200px;
}
@media only screen and (max-width:570px){
    width: 200px;
    height: 150px;
    margin-left: 10px;
}
@media only screen and (max-width:450px){
    width: 180px;
    height: 120px;
    margin-left: 10px;
}
@media only screen and (max-width:400px){
    width: 170px;
    height: 110px;
    margin-left: 10px;
}
@media only screen and (max-width:370px){
    width: 160px;
    height: 100px;
    margin-left: 10px;
}
`

const TitleAbout1 = styled.div`

`
const TitleAbout2 = styled.div`

`
const TitleAbout3 = styled.div`

`
const TitleAboutB = styled.div`

`

const Btn = styled.button`
width: 200px;
height: 30px;
border : 2px solid #343a40;
background: #dc3545;
margin-top: 10px;
width: 250px;
height: 40px;
margin-top: 25%;
@media only screen and (max-width:700px){
    width: 150px;
    height: 25px;
    font-size: smaller;
    margin-top: 20%;
}

@media only screen and (max-width:600px){
    width: 90px;
    height: 20px;
    font-size: x-small;
    margin-top: 20%;
}

@media only screen and (max-width: 500px)
{
    width: 80px;
    height: 18px;
    font-size: xx-small;
    border : 1.5px solid #343a40;
    margin-top: 20%;
}

@media only screen and (max-width: 350px)
{
    width: 70px;
    height: 15px;
    font-size: 8px;
    margin-top: 20%;
}

`

const TitleH = styled.h1`
font-size: 35px;
color: #343a40;
font-weight: 800;
letter-spacing: 5px;
line-height: 2;
@media only screen and (max-width:900px){
    font-size: 25px;
    letter-spacing: 4px;
}
@media only screen and (max-width:670px){
    font-size: 20px;
    letter-spacing: 3px;
}
@media only screen and (max-width:570px){
    font-size: 13px;
    letter-spacing: 2px;
}
@media only screen and (max-width:400px){
    font-size: 11px;
}
@media only screen and (max-width:370px){
    font-size: 8px;
}
`

const TitleHH = styled.h2`
font-size: 25px;
color: #17a2b8;
font-weight: 500;
letter-spacing: 5px;
margin-bottom: 0px;
@media only screen and (max-width:780px){
    font-size: 20px;
    letter-spacing: 4px;
}
@media only screen and (max-width:670px){
    font-size: 15px;
    letter-spacing: 3px;
}
@media only screen and (max-width:570px){
    font-size: 11px;
    letter-spacing: 1px;
}
@media only screen and (max-width:400px){
    font-size: 9px;
}
@media only screen and (max-width:370px){
    font-size: 8px;
}
`

class Blog extends Component {

     Oncklick() {
       window.location='/demandes-dons-sang';
     }
     
    render() {
        document.title ="Moutabari3.ma| Don de sang au maroc"; 
        document.getElementsByTagName("META")[2].content="Une nouvelle methode de don de sang au maroc qui rasemble les donneurs et les receveurs de sang";
        
        return (
                <ObjectifD>
                   
                  <TitleObjectif itemscope itemtype ="http://schema.org/don-sang">
                      <TitleL itemprop="urgent"> <CarBlogText/></TitleL>
                      <ButtonPoster  type="button" onClick={this.Oncklick} itemprop="url" >+ Poster maintenant</ButtonPoster>
                  </TitleObjectif>
                  <Flexb>
                  <CarouselScreen><CarouselBlog/></CarouselScreen>
                  <TextMotivation>
                     <BoxTI itemscope itemtype ="http://schema.org/donneur-sang"> 
                        <TitleD itemprop="recherche">
                            Cherchez un Donneur ?
                        </TitleD>
                        <Line/>
                       <DivCont itemprop="donneur">
                               <SousTitle itemprop="connecter">
                                <img className="iconPost" src={Confirm} alt="Logo" style={{width:"25px", height:"25px", fill:"#D5281F", marginTop:"-2px", marginRight:"5px"}}/>
                                    Se connecter sur moutabari3.ma.
                                </SousTitle>
                               <SousTitle> 
                               <img className="iconPost" src={Confirm} alt="Logo" style={{width:"25px", height:"25px", fill:"#D5281F", marginTop:"-2px", marginRight:"5px"}}/>
                                   {/* <Errore height="25" width="40" fill="red" /> */}
                                   Poster et decrire votre besoin du sang.
                              </SousTitle>
                                <SousTitle itemprop="urgent cas">
                                <img className="iconPost" src={RoundError} alt="Logo" style={{width:"25px", height:"25px", fill:"#D5281F", marginTop:"-2px", marginRight:"5px"}}/>     
                                Ne perdez pas votre temps à chercher ailleurs.
                                </SousTitle>
                                <SousTitle>
                                <img className="iconPost" src={Confirm} alt="Logo" style={{width:"25px", height:"25px", fill:"#D5281F", marginTop:"-2px", marginRight:"5px"}}/>             
                                Utulisez un numero de telephone valide.
                                </SousTitle>
                                <SousTitle itemprop="gratuit">
                                <img className="iconPost" src={RoundError} alt="Logo" style={{width:"25px", height:"25px", fill:"red", marginTop:"-2px", marginRight:"5px"}}/>
                                Ne payez pas d'argent pour avoir un donneur.
                                </SousTitle>
                                <SousTitle>
                                <img className="iconPost" src={RoundError} alt="Logo" style={{width:"25px", height:"25px", fill:"red", marginTop:"-2px", marginRight:"5px"}}/>           
                                Ne publiez pas de fausses demandes.
                                </SousTitle>
                       </DivCont>
                     </BoxTI>
                     <BoxTP itemscope itemtype ="http://schema.org/receveur-sang">
                        <TitleD itemprop="receveur">Cherchez un Receveur ?</TitleD>
                        <Line/>
                        <DivCont>
                        <SousTitle> 
                               <img className="iconPost" src={Confirm} alt="Logo" style={{width:"25px", height:"25px", fill:"#D5281F", marginTop:"-2px", marginRight:"5px"}}/>
                                Se connecter sur MOUTABARI3.MA.
                              </SousTitle>
                                <SousTitle>
                                <img className="iconPost" src={Confirm} alt="Logo" style={{width:"25px", height:"25px", fill:"#D5281F", marginTop:"-2px", marginRight:"5px"}}/>
                                Poster et montré votre volonté de faire un don.
                                    </SousTitle>
                                <SousTitle>
                                <img className="iconPost" src={Confirm} alt="Logo" style={{width:"25px", height:"25px", fill:"red", marginTop:"-2px", marginRight:"5px"}}/>
                                Utulisez un numero de telephone valide.
                                </SousTitle>
                                <SousTitle>
                                <img className="iconPost" src={RoundError} alt="Logo" style={{width:"25px", height:"25px", fill:"#D5281F", marginTop:"-2px", marginRight:"5px"}}/>
                                Ne publiez pas de fausses offres.
                                </SousTitle>

                                <SousTitle>
                                <img className="iconPost" src={RoundError} alt="Logo" style={{width:"25px", height:"25px", fill:"red", marginTop:"-2px", marginRight:"5px"}}/>                 
                                la rémunération de don du sang n'est pas autorisé au maroc.
                                </SousTitle>
                                <SousTitle>
                                <img className="iconPost" src={Confirm} alt="Logo" style={{width:"25px", height:"25px", fill:"red", marginTop:"-2px", marginRight:"5px"}}/>                 
                                Sélectionnez la ville dans laquelle vous vivez
                                </SousTitle>
                       </DivCont>
                     {/* <img src={ScreenI} alt="Logo"/> */}
                     </BoxTP>
                  </TextMotivation>
                  </Flexb> 
                  <FlexBoxAbout>
                  <BoxText >
                        <TitleAbout1><TitleH itemprop="sang">Le pouvoir en poche</TitleH></TitleAbout1>
                        <TitleAbout2><TitleHH itemprop="Utulisateurs">Donneur ou Receveur</TitleHH></TitleAbout2>
                        <TitleAbout3><TitleHH>Moutabari3 nous rasembles</TitleHH></TitleAbout3>
                        <TitleAboutB><Btn type="button" onClick={this.Oncklick} itemprop="url">Dès maintenant</Btn></TitleAboutB>
                    </BoxText>
                     <BoxImageAbout itemprop="reviews" itemscope itemtype="http://schema.org/AggregateRating">
                   <img className="iconPost" src={PhoneF} alt="le don de sang au maroc sur matabari3" style={{height:"auto",width: "100%"}}/>
                   <meta itemprop="ratingValue" content="4" />
                   <meta itemprop="bestRating" content="5" />
                   </BoxImageAbout>
                  </FlexBoxAbout>
                </ObjectifD>
 
        )
    }
}

export default Blog

