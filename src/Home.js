import React from "react";
// import background from "./background1.jpg";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Test from './Test';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* <Route exact path="/Data" component={Test} /> */}
            <Route exact path="/Login" component={LoginPage} />
            <Route exact path="/Signup" component={SignUpPage} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </Router>
      </div>
    );
  }
}

class Landing extends React.Component {
  render() {
    return (
      <div>
        {/* <img src={background} alt="img failed loading" /> */}
        <div className="imageback" />
        <div className="header--company">Stortal</div>
        <Link to="Signup">
          <div className="header--signup">SIGNUP</div>
        </Link>

        <Link to="Login">
          <div className="header--login">LOGIN</div>
        </Link>

        <div className="section--values">
          A New way to <br />
          connect your colleagues
        </div>
      </div>
    );
  }
}

export default Home;
