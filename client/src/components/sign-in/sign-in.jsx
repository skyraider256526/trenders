import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../../components/form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {
  googleSignInStart,
  emailSignInStart,
  emailSignInSuccess,
  emailSignInFailure
} from "../../redux/user/user.actions";

import "./sign-in.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  // constructor() {
  //   super();
  //   state = {
  //     email: "",
  //     password: ""
  //   };
  // }
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});
export default connect(null, mapDispatchToProps)(SignIn);
