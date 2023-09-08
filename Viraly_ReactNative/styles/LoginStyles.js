import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },

  imageContainer: {
    backgroundColor: 'light-gray',
    paddingTop: 64
  },

  loginTitle: {
    paddingRight: 276.32,
    paddingLeft: 64,
    marginTop: 24
  },

  loginText: {
    color: 'rgba(54, 69, 90, 1)',
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 600
  },

  descriptionBox: {
    marginTop: 12,
    paddingRight: 102.67,
    paddingLeft: 8
  },

  descriptionText: {
    color: 'rgba(73, 85, 102, 1)',
    fontFamily: 'Work Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400
  },

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

  forgotBox: {
    paddingLeft: 160,
    marginTop: 12
  },

  forgotPassword: {
    color: 'rgba(10, 32, 73, 1)',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400
  },

  signinButton: {
    marginTop: 16
  },

  buttonStyle: {
    width: 288,
    height: 64,
    flexShrink: 0,
    borderRadius: 7,
    backgroundColor: 'rgba(1, 167, 190, 1)'
  },

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

  signUp: {
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    marginTop: 24
  },

  signupText: {
    fontWeight: 600
  },

  other: {
    marginTop: 16
  },

  or: {
    color: 'rgba(10, 32, 73, 1)',
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 500
  },

  otherSign: {
    marginTop: 16,
    marginBottom: 16
  },

  otherText: {
    color: 'rgba(151, 151, 151, 1)',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 600
  },

  boxes: {
    flexDirection: 'row'
  },

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
