import { StyleSheet } from 'react-native';

{/*This is the stylesheet for the login screen*/}
const LoginStyles = StyleSheet.create({

  /*This is the container for the login screen*/
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },

  /*This is the image container for the logo on the login screen*/
  imageContainer: {
    backgroundColor: 'light-gray',
    paddingTop: 64
  },

  /*This is the login title box for the login screen*/
  loginTitle: {
    paddingRight: 276.32,
    paddingLeft: 64,
    marginTop: 24
  },

  /*This is the login title text for the login screen*/
  loginText: {
    color: 'rgba(54, 69, 90, 1)',
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 600
  },

  /*This is the text description box for the login screen*/
  descriptionBox: {
    marginTop: 12,
    paddingRight: 102.67,
    paddingLeft: 8
  },

  /*This is the description text for the login screen*/
  descriptionText: {
    color: 'rgba(73, 85, 102, 1)',
    fontFamily: 'Work Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400
  },

  /*This is the text input box for the email input for the login screen*/
  emailBox: {
    marginTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    width: 288,
    height: 64,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(240, 242, 246, 1)',
    justifyContent: 'center',
    color: 'rgba(0,0,0,0.7)'
  },

  /*This is the text input box for the password input for the login screen*/
  passwordBox: {
    marginTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    width: 288,
    height: 64,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(240, 242, 246, 1)',
    justifyContent: 'center',
    color: 'rgba(0,0,0,0.7)'
  },

  /*This is the box for the Forgot Password link for the login screen*/
  forgotBox: {
    paddingLeft: 160,
    marginTop: 12
  },

  /*This is the Forgot Password link text for the login screen*/
  forgotPassword: {
    color: 'rgba(10, 32, 73, 1)',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400
  },

  /*This is the signup button for the login screen*/
  signinButton: {
    marginTop: 16
  },

  /*This is the signup button style for the login screen*/
  buttonStyle: {
    width: 288,
    height: 64,
    flexShrink: 0,
    borderRadius: 7,
    backgroundColor: 'rgba(1, 167, 190, 1)'
  },

  /*This is the signup button text for the login screen*/
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 700,
    paddingTop: 22,
    paddingBottom: 21
  },

  /*This is the style for "Not have account?" text for the login screen*/
  signUp: {
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    marginTop: 24
  },

  /*This is the style for "Sign Up" link text for the login screen*/
  signupText: {
    fontWeight: 600
  },

  /*This is the text box for "OR" on the login screen*/
  other: {
    marginTop: 16
  },

  /*This is the text "OR" on the login screen*/
  or: {
    color: 'rgba(10, 32, 73, 1)',
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 500
  },

  /*This is the text box for "Sign In with" on the login screen*/
  otherSign: {
    marginTop: 16,
    marginBottom: 16
  },

  /*This is the text for "Sign In with" on the login screen*/
  otherText: {
    color: 'rgba(151, 151, 151, 1)',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 600
  },

  /*This is the container for the social media boxes for the login screen*/
  boxes: {
    flexDirection: 'row'
  },

  /*This is the Google button for the login screen*/
  googleBox: {
    width: 128,
    height: 60,
    flexShrink: 0,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(209, 209, 209, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 24
  },

  /*This is the Facebook button for the login screen*/
  facebookBox: {
    width: 128,
    height: 60,
    flexShrink: 0,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(209, 209, 209, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  /*This is the footer for the login screen*/
  footerContainer: {
    alignItems: 'center',
    width: 124,
    height: 6,
    flexShrink: 0,
    borderRadius: 17,
    marginTop: 25.04,
    marginBottom: 28,
    backgroundColor: 'rgba(1, 167, 190, 1)'
  }

});

export default LoginStyles;
