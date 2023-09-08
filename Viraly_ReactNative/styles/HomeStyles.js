import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },

  topNav: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'light-gray',
    marginTop: 32
  },

  imageContainer: {
    paddingRight: 192
  },

  descriptionBox: {
    marginTop: 32
  },

  descriptionText: {
    paddingRight: 128,
    color: 'rgba(116, 125, 136, 1)',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    textAlign: 'center'
  },

  loginTitle: {
    marginTop: 8
  },

  loginText: {
    paddingRight: 64,
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 600
  },

  backgroundImage: {
    marginTop: 32
  },

  launchMessage: {
    marginTop: 24,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.78)',
    fontFamily: 'Poppings',
    fontSize: 16,
    fontWeight: 400
  },

  resetButton: {
    marginTop: 32
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

  footerContainer: {
    marginTop: 80,
    paddingLeft: 29,
    paddingRight: 30,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },

  navbarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  homeIcon: {
    paddingRight: 40
  },

  navbarText: {
    paddingTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  homeText: {
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    fontWeight: 700,
    color: 'rgba(1, 167, 190, 1)'
  },

  blackNavText: {
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    fontWeight: 700,
    paddingLeft: 28
  }
  
});

export default HomeStyles;