import './App.css';
import React, { Component, Fragment} from 'react'
import Layout from './components/layout'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import Program from './components/Program';


import Description from './components/Description';

import Quiz from './components/Quiz';
import QuizList from './Quizes/QuizList';
// import MCQs from './Quizes/MCQs';

import {
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import TextField from '@material-ui/core/TextField';

import { Container } from "reactstrap";
import { firebase } from './firebase/firebase';

//nav stuff
import Navigation from "./auth/Navigation";
import LandingPage from "./auth/Landing";
import SignUpPage from "./auth/SignUp";
import SignInPage from "./auth/SignIn";
import PasswordForgetPage from "./auth/PasswordForget";


import withAuthentication from "./auth/withAuthentication";

import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import { auth, db } from './firebase';
import * as routes from "./constants/routes";
import SignIn, {SignInForm } from './auth/SignIn'
import { ExamDetails } from './components/ExamDetails';
import { Notes } from './components/Notes';
import { Announcement } from './components/Announcement';
 

export class App extends Component {
  render() {
    return (
      <Router>
        
        <Fragment>
        
          
          <Route exact path ="/" component={Login}/>
          <section>

            <Switch>

            <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
           
            <Route exact path={routes.SIGN_IN} component={SignInPage} />
            <Route exact path={routes.LAYOUT} component={Layout} />
            <Route exact path={routes.PROGRAM} component={Program} />
            <Route exact path={routes.EXAM_DETAILS} component={ExamDetails} />
            <Route exact path={routes.NOTES} component={Notes} />
            <Route exact path={routes.ANNOUNCEMENT} component={Announcement} />
            
            
            <Route exact path={routes.DESCRIPTION} component={Description} />
          
            
            
            
            
            {/* QUIZ  */}
            <Route exact path={routes.QUIZ} component={Quiz} />
            
          <PrivateRoute path="/quizlist">
            <QuizList/>
          </PrivateRoute>    
           
           
            
            

        
            </Switch>
          </section>
          </Fragment>
      </Router>
    )
  }
}

export function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>    
      <Button variant="contained" color="primary" 
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Logout    
      </Button>
    </p>
  ) : (
    <h4></h4>    
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
function Login() {
  return (
    <div className='lgn'>
      <SignIn/>
    </div>
  );
}

export default withAuthentication(App);