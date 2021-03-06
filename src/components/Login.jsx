import React from "react"
import { navigate } from '@reach/router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setUser, isLoggedIn, handleLogout } from "../utils/auth"
import firebase from "gatsby-plugin-firebase"

const Login = () => {

  const logout = () => {
    firebase.auth().signOut()
    .then(function() {
      handleLogout()
      navigate('/')
    })
    .catch(function(error) {
      console.log(error)
    });    
  }

  if (isLoggedIn()) {
    return (
      <button onClick={logout}>Logout</button>
    )

    // navigate(`/default/`)
  }

  function getUiConfig(auth) {
    return {
      signInFlow: 'popup',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          setUser(result.user);
          navigate('/');
        }
      }
    };
  }

  return (
    <div>
      <p>Please sign-in to access to the private route:</p>
      {firebase && <StyledFirebaseAuth uiConfig={getUiConfig(firebase.auth)} firebaseAuth={firebase.auth()}/>}
    </div>
  );

}

export default Login
