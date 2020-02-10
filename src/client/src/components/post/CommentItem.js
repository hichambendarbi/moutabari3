import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { deleteComment } from "../../actions/postActions";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProfileImageLink = styled(Link)`
  width: 40px;
  padding-right: 10px;
`;

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <ProfileImageWrapper className="col-md-2">
            <ProfileImageLink to={`/profile/${comment.handle}`}>
            </ProfileImageLink>
            <p className="text-center">{comment.name}</p>
          </ProfileImageWrapper>
          <div className="col-md-10">
            <p className="lead">{comment.text}</p>
            {comment.user === auth.user.id || auth.user.isAdmin ? (
              <button
                onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                type="button"
                className="btn btn-danger mr-1"
              >
                <i className="fas fa-times" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: propTypes.func.isRequired,
  comment: propTypes.object.isRequired,
  postId: propTypes.string.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
