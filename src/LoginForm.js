import React from "react";
import { Field, reduxForm } from "redux-form";
//import styled from "styled-components";
// import {TextField} from 'redux-form-material-ui';
// import { AutoComplete } from 'material-ui/AutoComplete';
// import Test from "./Test";
import { BrowserRouter as  Link} from "react-router-dom";

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const renderuser = ({
  input,
  label,
  type,
  className,
  meta: { touched, error, warning }
}) => (
  <div>
    {/* <label>{label}</label> */}
    <div>
      <input {...input} className={className} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const renderpass = ({
  input,
  type,
  className,
  meta: { touched, error, warning }
}) => (
  <div>
    <input {...input} className={className} type={type} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  submit(values) {
    return (
      // <div>
        console.log(values)
      //   <Test data={values} />
      // </div>
    );
  }

  render() {
    const { handleSubmit, error } = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.submit)}
        className="main--form"
        autoComplete="off"
      >
        <div className="main--login--form">
          {/* <label htmlFor="username">Username</label> */}
          <div className="main--sign">
            <label htmlFor="sign">Sign in to your Stortal Account</label>
          </div>
          <div className="main--user">
            <label htmlFor="username">Username</label>
            <br />
            <Field
              className="main--input--user"
              name="username"
              component="input"
              type="text"
              autoComplete="off"
            />
            {error && <div>{error}</div>}
          </div>
          <br />
          <div className="main--pass">
            <label htmlFor="password">Password</label>
            <a
              href="raobit.com"
              style={{
                paddingLeft: "260px",
                fontSize: "15px",
                color: "#ff1f5a"
              }}
            >
              Forgot Password?
            </a>
            <br />
            <Field
              className="main--input--pass"
              name="password"
              component="input"
              type="password"
              autoComplete="off"
              label="rajat"
            />
          </div>
          <br />
          <div>
            <Link to="Data">
              <button className="main--input--submit" type="submit">
                LOGIN
              </button>
            </Link>
          </div>
          <div className="main--create-account">
            <label>
              Don't have an Account?{" "}
              <a href="raobit.com" style={{ color: "green" }}>
                Create Now
              </a>
            </label>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "login"
  // validate
})(LoginForm);
