import axios from "axios";
import { logoutUser } from "./authActions";
import store from "../store";

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
  CLEAR_ERRORS
} from "./types";

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(clearErrors());
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.status === 401) {
        store.dispatch(logoutUser());
        store.dispatch(clearCurrentProfile());
        window.location.href = "/login";
      } else {
        dispatch({
          type: GET_PROFILE,
          payload: {}
        });
      }
    });
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/profile", profileData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get profile by handle
export const getProfileByHandle = handle => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/handle/${handle}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      })
    );
};

// Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile/all")
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: null
      })
    );
};

// Delete account & profile
export const deleteAccount = () => dispatch => {
  if (window.confirm("Êtes-vous sûr? Ça ne peut pas être annulé!")) {
    axios
      .delete("/api/profile")
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
  return {
    type: PROFILE_LOADING
  };
};

// Add experience
export const addExperience = (expData, history) => dispatch => {
  axios
    .post("/api/profile/experience", expData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};



// Update Experience
export const updateExperience = (expData, id) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/profile/experience/${id}`, expData)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
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


// Delete experience
export const deleteExperience = id => dispatch => {
  if (window.confirm("Êtes-vous sûr? Ça ne peut pas être annulé")) {
    axios
      .delete(`/api/profile/experience/${id}`)
      .then(res =>
        dispatch({
          type: GET_PROFILE,
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
  }
};


// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
