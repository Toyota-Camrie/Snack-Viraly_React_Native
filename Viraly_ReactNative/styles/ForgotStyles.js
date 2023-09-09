import { StyleSheet } from 'react-native';

{/*This is the stylesheet for the forgot password screen*/}
const ForgotStyles = StyleSheet.create({

  /*This is the container for the forgot password screen*/
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },

  /*This is the lock image container for the forgot password screen*/
  imageContainer: {
    backgroundColor: 'light-gray',
    paddingTop: 32
  },

  /*This is the title box for the forgot password screen*/
  loginTitle: {
    marginTop: 24
  },

  /*This is the title text for the forgot password screen*/
  loginText: {
    color: 'rgba(54, 69, 90, 1)',
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 600
  },

  /*This is the text description box for the forgot password screen*/
  descriptionBox: {
    marginTop: 12
  },

  /*This is the description text for the forgot password screen*/
  descriptionText: {
    color: 'rgba(73, 85, 102, 1)',
    fontFamily: 'Work Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    textAlign: 'center'
  },

  /*This is the email text input for the forgot password screen*/
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

  /*This is the Reset Password for the forgot password screen*/
  resetButton: {
    marginTop: 32
  },

  /*This is the Reset Password button style for the forgot password screen*/
  buttonStyle: {
    width: 288,
    height: 64,
    flexShrink: 0,
    borderRadius: 7,
    backgroundColor: 'rgba(1, 167, 190, 1)'
  },

  /*This is the Reset Password button text for the forgot password screen*/
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

  /*This is the Try other ways link box for the forgot password screen*/
  backLink: {
    marginTop: 20
  },

  /*This is the link text for the forgot password screen*/
  backText: {
    fontFamily: 'Mulish',
    color: 'rgba(10, 32, 73, 1)',
    fontWeight: 500,
    fontSize: 16
  },

  /*This is the rectangle and footer for the forgot password screen*/
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

export default ForgotStyles;