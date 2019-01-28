import React from "react";
import { Field, reduxForm } from "redux-form";


const SignUpForm = props => {
  const { submit } = props;
  return (
    <form onSubmit={submit} className="main--form" autoComplete="off" >
      <div className="main--signup--form">
        <div className="main--sign">
          <label htmlFor="signup">Create a new Stortal Account</label>
        </div>
        <div className="main--first">
          <label htmlFor="firstname">FirstName</label>
          <label htmlFor="lastname" className="main--last--label">
            LastName
          </label>
          <br />
          <Field
            className="main--input--firstname"
            name="firstname"
            component="input"
            type="text"
            autoComplete="off"
          />
          <Field
            className="main--input--lastname"
            name="lastname"
            component="input"
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="main--signup--username">
          <label htmlFor="username">Username</label>
          <br />
          <Field
            className="main--signup--user"
            name="username"
            component="input"
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="main--signup--emailaddress">
          <label htmlFor="email">Email-Address</label>
          <br />
          <Field
            className="main--signup--email"
            name="email"
            component="input"
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="main--signup--pass">
          <label htmlFor="password">Password</label>
          <br />
          <Field
            className="main--signup--password"
            name="password"
            component="input"
            type="password"
            autoComplete="false"
          />
        </div>
        <div className="main--signup--cpass">
          <label htmlFor="cpassword">Confirm Password</label>
          <br />
          <Field
            className="main--signup--cpassword"
            name="cpassword"
            component="input"
            type="password"
            autoComplete="off"
          />
        </div>
        <div>
          <button className="main--signup--submit" type="submit">
            SIGN UP
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "signup"
})(SignUpForm);
