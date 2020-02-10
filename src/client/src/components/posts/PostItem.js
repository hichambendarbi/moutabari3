import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../actions/postActions";
import ThumbsUp from "../../img/ThumbsUp";
import ThumbsDown from "../../img/ThumbsDown";
import styled from "styled-components";
import Moment from "react-moment"; 
import  Phone from '../../assets/img/phone-call.svg';
import  Calendar from '../../assets/img/calendar.svg';
import  Location from '../../assets/img/pin.svg';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CommentIcon from '@material-ui/icons/Comment';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


// const Avatar = styled.img`
//   width: 48px;
//   height: 48px;
// `;



const PostDate = styled(Moment)`
  // display: block;
  // color: #a9a9a9;
  // font-weight: lighter;
  // font-size: 0.8rem;
`;



const UserNameLink = styled(Link)`
  color: black;
`;

const FlexItems = styled.div`
display: flex;
flex-direction: row;
background: #f8f9fa6e;
border-radius: 3px;
// border: 1px solid #bbb4b4;
height: 100px;
margin: 0 0 15px 0;
box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
:hover{
    // background: green;
    -webkit-box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
top: -5px;
z-index: 2;
}
@media screen and (max-width: 1000px) {
    height: 120px;
}
`

const Box1 = styled.div`
display: flex;
width: 15%;
height: 100%;
font-weight: 700;
color: #343a40;
background: #dc3545;;
justify-content: flex-start ;
align-items: center;
font-size: 20px;
padding-left: 10Px;
border-left: 6px solid #343a40;
border-bottom: 3px solid #dc3545;
border-top: 3px solid #dc3545;
@media screen and (max-width: 1000px) {
  justify-content: center;
}

@media screen and (max-width: 550px) {
  padding-left: 0Px;
} 

`
const NameS = styled.h3`
font-weight: 700;
color: #343a40;
font-size: 20px;
@media screen and (max-width: 1000px) {
  transform: rotate(270deg);
}
@media screen and (max-width: 550px) {
  font-size: 15px !important;
  font-weight: 700 !important;
}
`

const Box2 = styled.div`
display: flex;
flex-direction: column;
width: 35%;
height: 100%;
justify-content: center;
align-items: center;
`
const BoxIN = styled.div`
// background: black;
width: 100%;
// font-size: 15px;
margin-left: 15px;
// margin-top: -7px;
height: 30px;
`
const NameH = styled.h3`
font-size: 25px !important;
color: #343a40 !important;
font-weight: 700 !important;
@media screen and (max-width: 1000px) {
  font-size: 20px !important;
  font-weight: 700 !important;
}
@media screen and (max-width: 780px) {
  font-size: 15px !important;
  font-weight: 700 !important;
}
@media screen and (max-width: 550px) {
  font-size: 10px !important;
  font-weight: 700 !important;
}
`
const BoxI = styled.div`
// background: black;
width: 100%;
height: 20px;
font-size: 10px;
margin-left: 25px;
font-style: italic;
font-family: serif;
color: #e53935 ;
`

const Box3 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 30%;
height: 100%;
// background: blue;
justify-content: space-evenly;
@media screen and (max-width: 1000px) {
  flex-direction: column;
}
`

const Box4 = styled.div`
display: flex;
width: 20%;
height: 100%;
// background: yellow;
align-items: center;
JUSTIFY-CONTENT: flex-end;
padding-right: 10px;
// justify-content: center;
@media screen and (max-width: 1000px) {
  padding-right: 3px;
}
`

class PostItem extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      likeCount: 0,
      didLike: false,

    };
  }
  handleClickOpen  = event => this.setState({ open: event.currentTarget })
  handleClose = () => this.setState({ open: false })
  componentDidMount() {
    const { post, auth } = this.props;

    if (post.likes.filter(like => like.user === auth.user.id).length > 0) {
      this.setState({
        didLike: true
      });
    }

    this.setState({
      likeCount: post.likes.length
    });
  }

  onDeleteClick(id, auth) {
    this.props.deletePost(id);
    this.props.history.push("/demandes-dons-sang");
  }

  onLikeClick(id, auth, likes) {
    const { likeCount } = this.state;
    if (!this.state.didLike) {
      this.setState({
        likeCount: likeCount + 1,
        didLike: true
      });
      this.props.addLike(id, auth);
    } else {
      this.setState({
        likeCount: likeCount - 1,
        didLike: false
      });
      this.props.removeLike(id);
    }
  }

  onUnlikeClick(id, auth, likes) {
    const { didLike, likeCount } = this.state;
    if (didLike) {
      this.setState({ likeCount: likeCount - 1, didLike: false });
      this.props.removeLike(id);
    }
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      this.setState({
        didLike: true
      });
    } else {
      this.setState({
        didLike: false
      });
    }
  }

  render() {
    document.title ="Poster sur moutabari3 pour trouver des donneurs ou des receveurs rapidements soit en cas d'urgences ou en cas d'une maladie chronique"; 
    document.getElementsByTagName("META")[2].content="Une page ou les receveurs de sang faits des recherche pour trouver leurs donneurs";
    const { auth, post } = this.props;
 
    const useStyles = makeStyles(theme => ({
      typography: {
        margin: theme.spacing(2),
      },
    }));

    
   const  PopoverPopupState =()=> {
      const classes = useStyles();
      return (
        <PopupState variant="popover" popupId="demo-popup-popover">
          {popupState => (
            <div>
              <Button variant="contained" {...bindTrigger(popupState)} style={{radius:"50%!important"}}>
               lire <span style={{fontSize:"10px"}}> +</span>
              </Button>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography className={classes.typography}>{post.text}</Typography>
              </Popover>
            </div>
          )}
        </PopupState>
      );
    }

    return (
<FlexItems>
            {/* <Link to={`/profile/${post.handle}`}>
              <Avatar
                className="rounded-circle d-none d-md-block"
                src={post.avatar}
                alt=""
              />
            </Link> */}
         
<Box1>
  <NameS>
{post.Situation} <br/> {post.GrSanguin}
  </NameS>
</Box1>
<Box2>
  <BoxIN >
    
{post.handle==="test" ?
<NameH>{post.name}</NameH>

     :
     
<UserNameLink to={`/profile/${post.handle}`}>
<NameH>{post.name}</NameH>
</UserNameLink>
  }

</BoxIN>
<BoxI>
<span className="fl-bigmug-line-big104"><img className="iconPost" src={Location} alt="Logo" style={{width:"20px", height:"20px", fill:"#D5281F", marginTop:"-2px",padding: "0 5px 0 0"}}/></span>
<span className="inf">{post.ville}</span>
</BoxI>
<BoxI>
<span className="fl-bigmug-line-big104"><img className="iconPost" src={Phone} alt="Logo" style={{width:"20px", height:"20px", fill:"#D5281F", marginTop:"-2px",padding: "0 5px 0 0"}}/></span> 
 {post.secretTele==="Telephone" ? <span className="inf">{post.Tele}</span> : 
        <Tooltip title="Numero MAsquer: Prenez le code est contacter l'equipe moutabari3 sur whatsap ou par telephone 0644565184 ." arrow>
          <span className="inf">{post.secretTele}</span>
        </Tooltip>}   
</BoxI>
<BoxI>
<span className="fl-bigmug-line-big104"><img className="iconPost" src={Calendar} alt="Logo" style={{width:"20px", height:"20px", fill:"#D5281F", marginTop:"-2px",padding: "0 5px 0 0"}}/></span>
<span className="inf"><PostDate format="MM/DD/YYYY">{post.date}</PostDate></span>  
</BoxI>
</Box2>
<Box3>
  <div>
<button
                onClick={this.onLikeClick.bind(
                  this,
                  post._id,
                  auth,
                  post.likes
                )}
                type="button"
                className="btn btn-light mr-1"
               
             
              >
                {this.state.didLike ? <ThumbsUp  /> : <ThumbsDown />}
                <span className="likeCounter" style={{padding:"0 0 2px 2px"}}>
                  {this.state.likeCount}
                </span>
              </button>

</div>        
              <div>    
              <Link to={`/posts/${post._id}`} className="btn btn-info mr-1">
               <CommentIcon/>
              </Link>
              </div>      
              <div>         
              {post.user === auth.user.id || auth.user.isAdmin ? (
                <button
                  onClick={this.onDeleteClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-danger"
                 
                >
                 <DeleteForeverIcon/>
                </button>
              ) : null}
              </div> 
</Box3>
<Box4>
  <PopoverPopupState/>
</Box4>
 </FlexItems>
    );
  }
}

PostItem.propTypes = {
  post: propTypes.object.isRequired,
  auth: propTypes.object.isRequired,
  deletePost: propTypes.func.isRequired,
  addLike: propTypes.func.isRequired,
  removeLike: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(withRouter(PostItem));