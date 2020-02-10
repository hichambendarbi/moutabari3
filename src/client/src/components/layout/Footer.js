import React from "react";
import styled from 'styled-components';
import InstagramSvg from '../../assets/img/instagram.svg';
import FacebookSvg from '../../assets/img/facebook.svg';
import YoutubeSvg from '../../assets/img/logo.svg';


const ContainerFooter = styled.div`
diplay: felx;
flex-direction: column;
width: 100%;
// height: 200px;
background:  #f8f9fa;
margin-top: 25%;
text-align: center;
`
const SocialImg = styled.img`
width: 40px;
height: 40px;
border: 2px solid black;
padding: 10px;
marginRight: 10px;
border-radius: 25%;
`

const LinkSocial = styled.a`
text-decoratiom: none;
margin-right: 10px;
margin: 15px;
`

const BoxCopyr = styled.div`
width: 100%;
background: #212529;
text-align: center;
`

export default () => {
  return (
          <ContainerFooter> 
            <div style={{marginTop: "15px",marginBottom: "15px"}}> 
              <LinkSocial href="https://www.instagram.com/moutabari3/"><SocialImg src={InstagramSvg}/></LinkSocial>    
              <LinkSocial href="https://www.facebook.com/moutabari3/"><SocialImg src={FacebookSvg}/></LinkSocial>
              <LinkSocial href="https://www.youtube.com/moutabari3/"><SocialImg src={YoutubeSvg}/></LinkSocial> 
            </div>  
           <BoxCopyr>
          <a href="http://ittyni.com/" style={{color:"#f8f9fa"}}>Copyright &copy; {new Date().getFullYear()} ITYNI</a>
          </BoxCopyr>
    </ContainerFooter>

  );
};
