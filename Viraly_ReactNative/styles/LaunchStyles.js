import { StyleSheet } from 'react-native';

/*This is the stylesheet for the launch campaign screen*/
const LaunchStyles = StyleSheet.create({

  /*This is the style for the container on the launch campaign screen*/
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },

  /*This is the style for the navbar on the launch campaign screen*/
  topNav: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'light-gray',
    marginTop: 24
  },

  /*This is the style for the image container on the launch campaign screen*/
  imageContainer: {
    paddingRight: 24
  },

  /*This is the style for the title text on the launch campaign screen*/
  loginText: {
    marginTop: 10,
    paddingRight: 72,
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 600
  },

  /*This is the style for the campaign's title on the launch campaign screen*/
  campaignTitle: {
    marginTop: 16,
    paddingRight: 176,
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: 600
  },

  /*This is the style for the campaign title textbox on the launch campaign screen*/
  campTitle: {
    marginTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    width: 288,
    height: 64,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(240, 242, 246, 1)',
    color: 'rgba(34, 34, 34, 0.47)'
  },

  /*This is the style for the campaign category title on the launch campaign screen*/
  campaignCat: {
    marginTop: 16,
    paddingRight: 144,
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: 600
  },

  /*This is the style for the first radio button on the launch campaign screen*/
  firstRadio: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4
  },

  /*This is the style for the first radio button text on the launch campaign screen*/
  firstText: {
    paddingTop: 7,
    paddingRight: 192,
    paddingLeft: 4
  },

  /*This is the style for the second radio button on the launch campaign screen*/
  secondRadio: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4
  },

  /*This is the style for the second radio button text on the launch campaign screen*/
  secondText: {
    paddingTop: 7,
    paddingRight: 166,
    paddingLeft: 4
  },

  /*This is the style for the third radio button on the launch campaign screen*/
  thirdRadio: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4
  },

  /*This is the style for the third radio button text on the launch campaign screen*/
  thirdText: {
    paddingTop: 7,
    paddingRight: 182,
    paddingLeft: 4
  },

  /*This is the style for the fourth radio button on the launch campaign screen*/
  fourthRadio: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4
  },

  /*This is the style for the fourth radio button text on the launch campaign screen*/
  fourthText: {
    paddingTop: 7,
    paddingRight: 188,
    paddingLeft: 4
  },

  /*This is the style for the audience title box on the launch campaign screen*/
  audienceTitle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },

  /*This is the style for the bold audience title on the launch campaign screen*/
  boldAudience: {
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: 600
  },

  /*This is the style for the audience title on the launch campaign screen*/
  restAudience: {
    paddingTop: 2,
    paddingLeft: 4,
    paddingRight: 44,
    fontFamily: 'Mulish',
    fontSize: 12,
    fontWeight: 400,
    color: 'rgba(34, 34, 34, 0.47)'
  },

  /*This is the style for the audience textbox on the launch campaign screen*/
  audienceBox: {
    marginTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 112,
    width: 288,
    height: 160,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(240, 242, 246, 1)',
    color: 'rgba(34, 34, 34, 0.47)'
  },

  /*This is the style for the campaign date title on the launch campaign screen*/
  campaignDate: {
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: 600,
    paddingRight: 30,
    marginTop: 20
  },

  /*This is the style for the campaign date textbox on the launch campaign screen*/
  campDate: {
    marginTop: 8,
    paddingLeft: 24,
    fontSize: 16,
    width: 288,
    height: 48,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(240, 242, 246, 1)',
    color: 'rgba(34, 34, 34, 0.47)'
  },

  /*This is the style for the daily budget title on the launch campaign screen*/
  budgetTitle: {
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: 600,
    paddingRight: 186,
    marginTop: 20
  },

  /*This is the style for the daily budget description on the launch campaign screen*/
  budgetDescription: {
    fontFamily: 'Mulish',
    color: 'rgba(34, 34, 34, 0.47)',
    fontSize: 14,
    fontWeight: 400,
    paddingRight: 58,
    marginTop: 2
  },

  /*This is the style for the daily budget textbox on the launch campaign screen*/
  campBudget: {
    marginTop: 8,
    paddingLeft: 16,
    width: 288,
    height: 48,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(240, 242, 246, 1)',
    color: 'rgba(34, 34, 34, 0.47)'
  },

  /*This is the style for the campaign placement title on the launch campaign screen*/
  campPlace: {
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: 600,
    paddingRight: 124,
    marginTop: 20
  },

  /*This is the style for the Next button on the launch campaign screen*/
  nextButton: {
    marginTop: 24
  },

  /*This is the style for the Next button on the launch campaign screen*/
  buttonStyle: {
    width: 224,
    height: 64,
    flexShrink: 0,
    borderRadius: 32,
    borderColor: 'rgba(1, 167, 190, 1)',
    borderWidth: 4
  },

  /*This is the style for the Next button text on the launch campaign screen*/
  buttonText: {
    color: 'rgba(1, 167, 190, 1)',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 700,
    paddingTop: 20
  },

  /*This is the style for the footer on the launch campaign screen*/
  footerContainer: {
    marginTop: 48,
    marginBottom: 8
  },

  /*This is the style for the footer navigation on the launch campaign screen*/
  navbarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  /*This is the style for the home icon on the launch campaign screen*/
  homeIcon: {
    paddingRight: 48
  },

  /*This is the style for the navigation textbox on the launch campaign screen*/
  navbarText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12
  },

  /*This is the style for the navigation home text on the launch campaign screen*/
  blackHomeText: {
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    fontWeight: 700,
    paddingRight: 36,
    paddingLeft: 8
  },

  /*This is the style for the navigation calculator text on the launch campaign screen*/
  blackCalcText: {
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    fontWeight: 700,
    paddingRight: 32
  },

  /*This is the style for the navigation timeline text on the launch campaign screen*/
  blackTimeText: {
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    fontWeight: 700,
    paddingRight: 20
  },

  /*This is the style for the navigation user text on the launch campaign screen*/
  blackUserText: {
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    fontWeight: 700,
    paddingLeft: 16
  }
  
});

export default LaunchStyles;