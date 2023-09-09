import { StyleSheet } from 'react-native';

/*This is the stylesheet for the home screen*/
const HomeStyles = StyleSheet.create({

  /*This is the style for the container on the home screen*/
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },

  /*This is the style for the top navbar on the home screen*/
  topNav: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'light-gray',
    marginTop: 32
  },

  /*This is the style for the image container on the home screen*/
  imageContainer: {
    paddingRight: 192
  },

  /*This is the style for the description box on the home screen*/
  descriptionBox: {
    marginTop: 32
  },

  /*This is the style for the description text on the home screen*/
  descriptionText: {
    paddingRight: 128,
    color: 'rgba(116, 125, 136, 1)',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    textAlign: 'center'
  },

  /*This is the style for the title box on the home screen*/
  loginTitle: {
    marginTop: 8
  },

  /*This is the style for the title text on the home screen*/
  loginText: {
    paddingRight: 64,
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 600
  },

  /*This is the style for the image box on the home screen*/
  backgroundImage: {
    marginTop: 32
  },

  /*This is the style for the launch message on the home screen*/
  launchMessage: {
    marginTop: 24,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.78)',
    fontFamily: 'Poppings',
    fontSize: 16,
    fontWeight: 400
  },

  /*This is the style for the Launch Campaign button on the home screen*/
  resetButton: {
    marginTop: 32
  },

  /*This is the style for the Launch Campaign button on the home screen*/
  buttonStyle: {
    width: 288,
    height: 64,
    flexShrink: 0,
    borderRadius: 7,
    backgroundColor: 'rgba(1, 167, 190, 1)'
  },

  /*This is the style for the Launch Campaign button text on the home screen*/
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

  /*This is the style for the footer on the home screen*/
  footerContainer: {
    marginTop: 80,
    paddingLeft: 29,
    paddingRight: 30,
    paddingTop: 16,
    paddingBottom: 16
  },

  /*This is the style for the footer navigation on the home screen*/
  navbarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  /*This is the style for the icons on the home screen*/
  homeIcon: {
    paddingRight: 40
  },

  /*This is the style for the footer navigation text box on the home screen*/
  navbarText: {
    paddingTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  /*This is the style for the home icon's text on the home screen*/
  homeText: {
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    fontWeight: 700,
    color: 'rgba(1, 167, 190, 1)'
  },

  /*This is the style for the footer navigation text on the home screen*/
  blackNavText: {
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    fontWeight: 700,
    paddingLeft: 28
  }
  
});

export default HomeStyles;