import React, { useState } from "react";
import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.scss";

const SignUp = ({ signUpStart }) => {
  // constructor() {
  //   super();

  //   state = {
  //     displayName: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: ""
  //   };
  // }

  const [userCredentials, setCredenteials] = useState({
    email: "",
    password: "",
    displayName: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password don"t match');
      return;
    }
    signUpStart(email, password, displayName);
    setCredenteials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCredenteials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="DisplayName"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        ></FormInput>
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName }))
});

export default connect(null, mapDispatchToProps)(SignUp);
