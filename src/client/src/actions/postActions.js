import axios from "axios";
import { logoutUser } from "./authActions";
import { clearCurrentProfile } from "./profileActions";
import store from "../store";

import {
  ADD_POST,
  GET_ERRORS,
  GET_POSTS,
  POST_LOADING,
  DELETE_POST,
  LIKE_POST,
  DISLIKE_POST,
  GET_POST,
  CLEAR_ERRORS,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "./types";

// Add Post
export const addPost = postData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/posts", postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err => {
      if (err.response.status === 401) {
        store.dispatch(logoutUser());
        store.dispatch(clearCurrentProfile());
        window.location.href = "/login";
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      }
    });
};



// Get Posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/api/posts")
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err => {
      if (err.response.status === 401) {
        store.dispatch(logoutUser());
        store.dispatch(clearCurrentProfile());
        window.location.href = "/login";
      } else {
        dispatch({
          type: GET_POSTS,
          payload: null
        });
      }
    });
};

// Get Post
export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err => {
      if (err.response.status === 401) {
        store.dispatch(logoutUser());
        store.dispatch(clearCurrentProfile());
        window.location.href = "/login";
      } else {
        dispatch({
          type: GET_POST,
          payload: null
        });
      }
    });
};

// Delete Post
export const deletePost = id => dispatch => {
  if (window.confirm("Êtes-vous sûr? Ça ne peut pas être annulé")) {
    axios
      .delete(`/api/posts/${id}`)
      .then(res =>
        dispatch({
          type: DELETE_POST,
          payload: id
        })
      )
      .catch(err => {
        if (err.response.status === 401) {
          store.dispatch(logoutUser());
          store.dispatch(clearCurrentProfile());
          window.location.href = "/login";
        } else {
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          });
        }
      });
  }
};

// Add Like
export const addLike = (id, auth) => dispatch => {
  axios
    .post(`/api/posts/like/${id}`)
    // .then(res => dispatch(getPosts()))
    .then(res =>
      dispatch({
        type: LIKE_POST,
        payload: {
          id,
          auth
        }
      })
    )
    .catch(err => {
      if (err.response.status === 401) {
        store.dispatch(logoutUser());
        store.dispatch(clearCurrentProfile());
        window.location.href = "/login";
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      }
    });
};

// Remove Like
export const removeLike = (id, auth) => dispatch => {
  axios
    .post(`/api/posts/unlike/${id}`)
    .then(res =>
      dispatch({
        type: DISLIKE_POST,
        payload: {
          id,
          auth
        }
      })
    )
    .catch(err => {
      if (err.response.status === 401) {
        store.dispatch(logoutUser());
        store.dispatch(clearCurrentProfile());
        window.location.href = "/login";
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      }
    });
};

// Add Comment
export const addComment = (postId, formData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/posts/comment/${postId}`)
    .then(res =>
      dispatch({
        type: ADD_COMMENT,
        payload: res.data 
      })
    )
    .catch(err => {
      if (err.response.status === 401) {
        store.dispatch(logoutUser());
        store.dispatch(clearCurrentProfile());
        window.location.href = "/login";
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      }
    });
};

// Delete Comment
export const deleteComment = (postId, commentId) => dispatch => {
  if (window.confirm("Êtes-vous sûr? Ça ne peut pas être annulé")) {
    axios
      .delete(`/api/posts/comment/${postId}/${commentId}`)
      .then(res =>
        dispatch({
          type: REMOVE_COMMENT,
          payload: commentId
        })
      )
      .catch(err => {
        if (err.response.status === 401) {
          store.dispatch(logoutUser());
          store.dispatch(clearCurrentProfile());
          window.location.href = "/login";
        } else {
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          });
        }
      });
  }
};

// Set Loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
