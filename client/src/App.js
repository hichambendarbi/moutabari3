import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";

import "./App.css";
import NavbarT from "./components/layout/NavbarT";
import Footer from "./components/layout/Footer";
import Blog from "./components/blog/Blog";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfileForm from "./components/edit-profile/EditProfileForm";
import AddExperience from "./components/add-credentials/add-experience";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import Qar from "./components/layout/Qar";
import Reset from "./components/ResetPsw/Reset"


import NotFound from "./components/not-found/NotFound";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout User
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
  
    return (
      <Provider store={store}>
        <Router>
        
          <div className="App" style={{height:"100%"}}>
          <NavbarT/> 
             <Route  path="/blog" component={Blog} />
             <Route exact path="/Apropos-Moutabari3" component={Qar} />
              <div style={{margin:"10px"}}>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/recuperation-mot-de-passe" component={Reset} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:handle" component={Profile} />
              <Switch>
                <PrivateRoute exact path="/gestion-profile-donneur-receveur" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/créer-profile-donneur-receveur"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/Modification-profile"
                  component={EditProfileForm}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/ajouter-experience-transfusion-sang"
                  component={AddExperience}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/demandes-dons-sang" component={Posts} />
              </Switch>
              
              <Switch>
                <PrivateRoute exact path="/posts/:id" component={Post} />
              </Switch>
            {/* <Switch>
                <PrivateRoute exact path="/posts/:id" component={Post} />
              </Switch> */}
              <Route exact path="/not-found" component={NotFound} />
            </div>
           
       
          <footer>
          <Footer />
          </footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
