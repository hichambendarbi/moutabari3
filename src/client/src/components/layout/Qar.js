import React, { Component } from 'react'
import styled from "styled-components"


const TitleL2 = styled.h3`
color: #C42020;
font-weith: 700;
padding: 5px;
margin-bottom: 0px;
margin-top: 60px;
width: max-content;
background: #dc3545;
border-radius: 5Px;
border-bottom: 2px solid black;
@media only screen and (max-width:1000px){
    font-size:18px;
    padding: 5px;
    font-weith: 700;
    color: #C42020;
    margin-top: 30px;
    margin-bottom: 0px;

}
@media only screen and (max-width:700px){
    font-size:12px;
    padding: 9px;
    color: #C42020;
    font-weith: 700;
    // border-bottom: 2px solid  #C42020 ;
}
`

const RegleApp = styled.div`
display:flex;
flex-direction: column;
text-align: left;
width: 70%;
@media only screen and (max-width:700px){
    width:100%;
}
`

const DivQuestionnaire =styled.div`
margin-top: 25px;
border-bottom: 1px solid #ced4da;
@media only screen and (max-width:700px){
  margin-top:35px;
}
`
const Question = styled.h1`
color: #0062cc;
font-size: 25px;
padding-left:15px;
// border-left: 5px solid red;
@media only screen and (max-width:700px){
    font-size: 13px;
    font-weith: 700;
}
@media only screen and (max-width:300px){
    font-size: 10px;
    font-weith: 700;
}
`
const ParaghraphQues =styled.span `
color:gray;
@media only screen and (max-width:700px){
    font-size: 10px;
}
`

const ContainerRegleApp = styled.div`
display: flex;
flex-direction: row;
margin: 0 30Px;
margin-top: -30px;
@media only screen and (max-width:700px){
    display: flex;
    flex-direction: column;
}
`

const LineT = styled.div`
display: flex;
width: 5px;
height: 30px;
background: black;
`

const BoxLineQ = styled.div`
display: flex;
flex-direction: row;
// width: px;
width: 98%;
`



class Qar extends Component {
    render() {
        document.title ="Apropos de Don de sang au maroc sur moutabari3"; 
        document.getElementsByTagName("META")[2].content="Questions et reponses";
        
        return (
            <div>
    <ContainerRegleApp>
          <RegleApp>
                <TitleL2> 
                    Questions & Reponses
                </TitleL2>               
                    <DivQuestionnaire>
                        <BoxLineQ>
                            <LineT></LineT>
                        <Question>C'est quoi l'application MOUTABARI3.MA ?</Question>
                        </BoxLineQ>
                        <ParaghraphQues>
                        Il s'agit d'une application web marocaine Non gouvernemental
                        qui vise à rapprocher les donneurs et ceux
                        qui ont besoin de sang facilement et en douceur,
                        que ce soit en cas d'urgence ou de maladie chronique.
                        </ParaghraphQues>
                    </DivQuestionnaire>
                    <DivQuestionnaire>
                    <BoxLineQ>
                            <LineT></LineT>
                        <Question>Est-ce que c'est gratuit ?</Question>
                        </BoxLineQ>
                    <ParaghraphQues>
                    Le site est gratuit et accessible à tous
                    les Marocains. Il n'impose aucun frais à
                    ses utilisateurs. Aucune annonce n'est diffusée
                    et il restera gratuit pour toujours.
                        </ParaghraphQues>
                    </DivQuestionnaire>
                    <DivQuestionnaire>
                    <BoxLineQ>
                            <LineT></LineT>
                     <Question>Qui peut publier sur Moutabarii.com ?</Question>
                     </BoxLineQ>
                     <ParaghraphQues>
                     Le site est ouverts à tous les contrubiteurs de sang marocains,
                    ils peuvent publier tant qu'ils veulent chercher un donneur
                    ou un receveur à
                    condition que celles-ci répondent aux normes et respectent
                    les règles d'utilisation du site.
                        </ParaghraphQues>
                    </DivQuestionnaire>


                    <DivQuestionnaire>
                    <BoxLineQ>
                            <LineT></LineT>
                     <Question>Est-ce qu'il est possible de supprimer mon compte ?</Question>
                     </BoxLineQ>
                     <ParaghraphQues>
                     Oui bien sur, c'est possible.
                    connectez-vous à votre compte et cliquez sur
                    supprimer le compte, votre compte sera supprime facilement
                    et directement sans aucune verification par notre equipe moytabarii.com. 
                        </ParaghraphQues>
                    </DivQuestionnaire>

                    <DivQuestionnaire>
                    <BoxLineQ>
                            <LineT></LineT>
                     <Question>Quelle est la valeur ajoutée apportée par le site moutabari3.ma ?</Question>
                     </BoxLineQ>
                     <ParaghraphQues>
                     Le site MOUTABI3.MA a été développé pour relier
                     le donneur de sang et le chercheur de
                     sang le plus rapidement possible à
                     l'importance du facteur temps dans les
                     cas urgents et dangereux.
                        </ParaghraphQues>
                    </DivQuestionnaire>

                    <DivQuestionnaire>
                    <BoxLineQ>
                            <LineT></LineT>
                     <Question>Comment créer un compte sur Moutabari3.com ?</Question>
                     </BoxLineQ>
                     <ParaghraphQues>
                     Tout d'abord, un compte sur notre site
                     vous permet de gérer toutes les annonces
                    que vous publiez, d'une autre manière vous
                    pouvez modifier et supprimez vos annonces
                    quand vous souhaitez. Et pour créer votre
                    compte, il suffit de cliquer sur « Compte » et « S'inscrire »
                     qui figure en haut de la page du site,
                    remplir le formulaire fourni et puis cliquer sur devenir membre.
                    .
                        </ParaghraphQues>
                    </DivQuestionnaire>

                    <DivQuestionnaire>
                    <BoxLineQ>
                            <LineT></LineT>
                     <Question>Je souhaite modifier mon mot de passe.</Question>
                     </BoxLineQ>
                     <ParaghraphQues>
                     Pour modifier votre mot de passe,
                      connectez-vous à votre compte et cliquez sur
                       « Modifier mon mot de passe ».
                        </ParaghraphQues>
                    </DivQuestionnaire>

                 </RegleApp>
                 {/* <DivImgRegleApp>
                 <img className="iconPost" src={ImgL} alt="Logo" style={{width:"300px", height:"320px", fill:"#D5281F", marginTop:"-2px", marginRight:"5px"}}/>
                 </DivImgRegleApp> */}
    </ContainerRegleApp>  
            </div>
        )
    }
}

export default Qar
