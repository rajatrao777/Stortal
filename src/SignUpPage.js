import React from "react";
import SignUpForm from "./SignUpForm";



class SignUpPage extends React.Component {
  render() {
    return <SignUpForm onSubmit={this.submit}   />;
  }
}

export default SignUpPage;
