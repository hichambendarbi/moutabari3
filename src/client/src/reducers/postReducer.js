import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  DELETE_POST,
  POST_LOADING,
  LIKE_POST,
  DISLIKE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  auth: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    case LIKE_POST:
      state.posts
        .filter(post => post._id === action.payload.id)[0]
        .likes.push({ _id: "1234", user: action.payload.auth.user.id });
      return {
        ...state,
        posts: state.posts
      };
    case DISLIKE_POST:
      state.posts[
        state.posts.findIndex(post => post._id === action.payload.id)
      ].likes = state.posts[
        state.posts.findIndex(post => post._id === action.payload.id)
      ].likes.filter(like => like._id !== "1234");
      return {
        ...state,
        posts: state.posts
      };
      case ADD_COMMENT: 
       return {
         ...state,
         post: {...state.post, comments: action.payload},
         loading: false
       }
       
       case REMOVE_COMMENT: 
        return {
          ...state,
          post:{
            ...state.post,
            comments: state.post.comments.filter(comment => comment._id !== action.payload)
          }
        }
    default:
      return state;
  }
}
