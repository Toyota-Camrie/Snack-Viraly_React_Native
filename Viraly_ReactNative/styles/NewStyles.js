import { StyleSheet } from 'react-native';

/*This is the styleheet for the new password screen*/
const NewStyles = StyleSheet.create({

  /*This is the style for the container on the new password screen*/
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },

  /*This is the style for the titlebox on the new password screen*/
  loginTitle: {
    marginTop: 24
  },

  /*This is the style for the New part of the title on the new password screen*/
  loginText: {
    color: 'rgba(1, 167, 190, 1)',
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 600
  },

  /*This is the style for the Password part on the new password screen*/
  passText: {
    color: 'rgba(54, 69, 90, 1)'
  },

  /*This is the style for the text description box on the new password screen*/
  descriptionBox: {
    marginTop: 12
  },

  /*This is the style for the description text on the new password screen*/
  descriptionText: {
    color: 'rgba(73, 85, 102, 1)',
    fontFamily: 'Work Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    textAlign: 'center'
  },

  /*This is the style for the email text input on the new password screen*/
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

  /*This is the style for the Reset Password button on the new password screen*/
  resetButton: {
    marginTop: 32
  },

  /*This is the style for the Reset Password button on the new password screen*/
  buttonStyle: {
    width: 288,
    height: 64,
    flexShrink: 0,
    borderRadius: 7,
    backgroundColor: 'rgba(1, 167, 190, 1)'
  },

  /*This is the style for the Reset Password button text on the new password screen*/
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

  /*This is the style for the footer on the new password screen*/
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

export default NewStyles;