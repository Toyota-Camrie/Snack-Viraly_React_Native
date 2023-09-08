import { StyleSheet } from 'react-native';

const LaunchStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },

  topNav: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'light-gray',
    marginTop: 24
  },

  imageContainer: {
    paddingRight: 24
  },

  loginText: {
    marginTop: 10,
    paddingRight: 72,
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 600
  },

  campaignTitle: {
    marginTop: 16,
    paddingRight: 176,
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: 600
  },

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

  campaignCat: {
    marginTop: 16,
    paddingRight: 144,
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: 600
  },

  firstRadio: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4
  },

  firstText: {
    paddingTop: 7,
    paddingRight: 192,
    paddingLeft: 4
  },

  secondRadio: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4
  },

  secondText: {
    paddingTop: 7,
    paddingRight: 166,
    paddingLeft: 4
  },

  thirdRadio: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4
  },

  thirdText: {
    paddingTop: 7,
    paddingRight: 182,
    paddingLeft: 4
  },

  fourthRadio: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4
  },

  fourthText: {
    paddingTop: 7,
    paddingRight: 188,
    paddingLeft: 4
  },

  audienceTitle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },

  boldAudience: {
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: 600
  },

  restAudience: {
    paddingTop: 2,
    paddingLeft: 4,
    paddingRight: 44,
    fontFamily: 'Mulish',
    fontSize: 12,
    fontWeight: 400,
    color: 'rgba(34, 34, 34, 0.47)'
  },

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

  campaignDate: {
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: 600,
    paddingRight: 30,
    marginTop: 20
  },

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

  budgetTitle: {
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: 600,
    paddingRight: 186,
    marginTop: 20
  },

  budgetDescription: {
    fontFamily: 'Mulish',
    color: 'rgba(34, 34, 34, 0.47)',
    fontSize: 14,
    fontWeight: 400,
    paddingRight: 58,
    marginTop: 2
  },

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

  campPlace: {
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: 600,
    paddingRight: 124,
    marginTop: 20
  },

  nextButton: {
    marginTop: 24
  },

  buttonStyle: {
    width: 224,
    height: 64,
    flexShrink: 0,
    borderRadius: 32,
    borderColor: 'rgba(1, 167, 190, 1)',
    borderWidth: 4
  },

  buttonText: {
    color: 'rgba(1, 167, 190, 1)',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 700,
    paddingTop: 20
  },

  footerContainer: {
    marginTop: 48,
    marginBottom: 8
  },

  navbarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  homeIcon: {
    paddingRight: 48
  },

  navbarText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12
  },

  blackHomeText: {
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    fontWeight: 700,
    paddingRight: 36,
    paddingLeft: 8
  },

  blackCalcText: {
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    fontWeight: 700,
    paddingRight: 32
  },

  blackTimeText: {
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    fontWeight: 700,
    paddingRight: 20
  },

  blackUserText: {
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    fontWeight: 700,
    paddingLeft: 16
  }
  
});

export default LaunchStyles;