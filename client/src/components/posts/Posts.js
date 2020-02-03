import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import PostForm from "./PostForm";
import Spinner from "../common/Spinner";
import { getPosts } from "../../actions/postActions";
import PostFeed from "./PostFeed";
import './PostCss.css';
class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/dashboard");
    // }
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  post: propTypes.object.isRequired,
  getPosts: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.postReducer
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
