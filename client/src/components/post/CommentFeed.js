import React, { Component } from "react";
import propTypes from "prop-types";
import CommentItem from "./CommentItem";

export class CommentFeed extends Component {
  static propTypes = {
    prop: propTypes
  };

  render() {
    const { comments, postId } = this.props;

    return comments.map(comment => (
      <CommentItem key={comment._id} comment={comment} postId={postId} />
    ));
  }
}

CommentFeed.propTypes = {
  comments: propTypes.array.isRequired,
  postId: propTypes.string.isRequired
};

export default CommentFeed;
