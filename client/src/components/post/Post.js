import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";
import Spinner from "../common/Spinner";
import { getPost } from "../../actions/postActions";
import styled from "styled-components";

const Retour = styled(Link)`
width: 200px;
height: 30px;
border : 2px solid #343a40;
background: #dc3545;
margin-top: 10px;
padding: 5px;
text-decoration: none !important;
color: #FFFFFF;
@media only screen and (max-width:700px){
    width: 150px;
    height: 25px;
    font-size: smaller;
}

@media only screen and (max-width:600px){
    width: 90px;
    height: 20px;
    font-size: x-small;
}

@media only screen and (max-width: 500px)
{
    width: 80px;
    height: 18px;
    font-size: xx-small;
    border : 1.5px solid #343a40;
}

@media only screen and (max-width: 350px)
{
    width: 70px;
    height: 15px;
    font-size: 8px;
}

`

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props.post;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
          <CommentFeed postId={post._id} comments={post.comments} />
        </div>
      );
    }

    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div style={{marginBottom:"20px"}}>
              <Retour to="/demandes-dons-sang">
                Retour
              </Retour>
              </div>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  getPost: propTypes.func.isRequired,
  post: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.postReducer
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
