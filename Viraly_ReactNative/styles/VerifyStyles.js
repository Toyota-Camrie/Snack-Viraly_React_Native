import { StyleSheet } from 'react-native';

const VerifyStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },

  imageContainer: {
    backgroundColor: 'light-gray',
    paddingTop: 32
  },

  loginTitle: {
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
    marginTop: 12
  },

  descriptionText: {
    color: 'rgba(73, 85, 102, 1)',
    fontFamily: 'Work Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    textAlign: 'center'
  },

  numberEntries: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

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

  nextButton: {
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

  sendCode: {
    marginTop: 20
  },

  codeText: {
    fontFamily: 'Mulish',
    color: 'rgba(10, 32, 73, 1)',
    fontWeight: 500,
    fontSize: 16
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

export default VerifyStyles;