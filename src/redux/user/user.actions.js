import UserActionTypes from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});
export const SignInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const SignInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});
export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});
export const signUpStart = credentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: credentials
});
export const signUpSuccess = () => ({
  type: UserActionTypes.SIGN_UP_SUCCESS
});
export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});
