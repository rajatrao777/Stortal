import React from "react";
import ReactDOM from "react-dom";
// import "./Logsignup.css";
// import './index.css';
 import { Provider } from "react-redux";
 import store from './store';
// import ContactPage from './ContactPage';
// import LoginPage from './LoginPage';
// import SignUpPage from './SignUpPage';
import HomePage from "./HomePage";

ReactDOM.render(
  <Provider store={store}>
    <HomePage />
    {/* <LoginPage/>  
  <SignUpPage/>   */}
  </Provider>,

  document.getElementById("root")
);
