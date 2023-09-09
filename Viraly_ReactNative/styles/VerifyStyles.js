import { StyleSheet } from 'react-native';

/*This is the stylesheet for the verify email screen*/ 
const VerifyStyles = StyleSheet.create({

  /*This is the style for the container on the verify email screen*/ 
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },

  /*This is the style for the image container on the verify email screen*/ 
  imageContainer: {
    backgroundColor: 'light-gray',
    paddingTop: 20
  },

  /*This is the style for the title textbox on the verify email screen*/ 
  loginTitle: {
    marginTop: 20
  },

  /*This is the style for the title text on the verify email screen*/ 
  loginText: {
    color: 'rgba(54, 69, 90, 1)',
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 600
  },

  /*This is the style for the text description box on the verify email screen*/ 
  descriptionBox: {
    marginTop: 8,
    paddingLeft: 32,
    paddingRight: 32
  },

  /*This is the style for the description text on the verify email screen*/ 
  descriptionText: {
    color: 'rgba(73, 85, 102, 1)',
    fontFamily: 'Work Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    textAlign: 'center'
  },

  /*This is the style for the code input container on the verify email screen*/ 
  numberEntries: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20
  },

  /*This is the style for the code text input on the verify email screen*/ 
  numberBox: {
    marginTop: 24,
    marginRight: 16,
    paddingLeft: 20,
    width: 48,
    height: 48,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(240, 242, 246, 1)',
    color: 'rgba(43, 44, 67, 1)'
  },

  /*This is the style for the Send Code Again text on the verify email screen*/ 
  newCode: {
    marginBottom: 16,
    color: 'rgba(43, 44, 67, 1)',
    fontWeight: 400,
    fontFamily: 'Roboto'
  },

  /*This is the style for the Confirm button on the verify email screen*/ 
  nextButton: {
    marginTop: 32
  },

  /*This is the style for the Confirm button on the verify email screen*/
  buttonStyle: {
    width: 288,
    height: 64,
    flexShrink: 0,
    borderRadius: 7,
    backgroundColor: 'rgba(1, 167, 190, 1)'
  },

  /*This is the style for the Confirm button text on the verify email screen*/
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

  /*This is the style for the footer on the verify email screen*/
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

export default VerifyStyles;