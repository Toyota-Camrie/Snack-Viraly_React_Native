import { StyleSheet } from 'react-native';

{/*This is the stylesheet for the signup screen*/}
const SignupStyles = StyleSheet.create({

  /*This is the container for the signup screen*/
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },

  /*This is the logo container for the signup screen*/
  imageContainer: {
    backgroundColor: 'light-gray',
    paddingTop: 64
  },

  /*This is the sign up title box for the signup screen*/
  loginTitle: {
    paddingRight: 184,
    marginTop: 24
  },

  /*This is the sign up title text for the signup screen*/
  loginText: {
    color: 'rgba(54, 69, 90, 1)',
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 600
  },

  /*This is the text description box for the signup screen*/
  descriptionBox: {
    marginTop: 12,
    paddingRight: 102.67,
    paddingLeft: 8
  },

  /*This is the description text for the signup screen*/
  descriptionText: {
    color: 'rgba(73, 85, 102, 1)',
    fontFamily: 'Work Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400
  },

  /*This is the username input for the signup screen*/
  usernameBox: {
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

  /*This is the email address input for the signup screen*/
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

  /*This is the password input for the signup screen*/
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

  /*This is the confirm password input for the signup screen*/
  confirmBox: {
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

  /*This is the Sign Up button box for the signup screen*/
  signinButton: {
    marginTop: 32
  },

  /*This is the Sign Up button style for the signup screen*/
  buttonStyle: {
    width: 288,
    height: 64,
    flexShrink: 0,
    borderRadius: 7,
    backgroundColor: 'rgba(1, 167, 190, 1)'
  },

  /*This is the Sign Up button text for the signup screen*/
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

  /*This is the container for the back link to the login screen*/
  backLink: {
    marginTop: 20
  },

  /*This is the link text on the signup screen*/
  backText: {
    fontFamily: 'Mulish',
    color: 'rgba(10, 32, 73, 1)',
    fontWeight: 500,
    fontSize: 18
  },

  /*This is the footer - specifically the rectangle - for the signup screen*/
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

export default SignupStyles;