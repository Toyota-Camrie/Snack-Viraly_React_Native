import { StyleSheet } from 'react-native';

/*This is the stylesheet for the onboarding screen*/
const OnboardingStyles = StyleSheet.create({
    
  /*This is the style for the image container on the onboarding screen*/
  imageContainer: {
    backgroundColor: 'light-gray'
  },
    
    /*This is the style for the blue rectangle on the onboarding screen*/
      blueRectangle: {
        width: 24,
        height: 8,
        borderRadius: 24,
        marginRight: 8,
        backgroundColor: 'rgba(1, 167, 190, 1)'
      },
    
    /*This is the style for the gray circle on the onboarding screen*/
      grayCircle: {
        width: 8,
        height: 8,
        borderRadius: 24,
        opacity: 0.30000001192092896,
        backgroundColor: 'rgba(0, 0, 0, 1)'
      },
    
    /*This is the style for the frame containing the blue
    rectangle and the gray circle on the onboarding screen*/  
      rectangleFrame: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 60
      },
    
    /*This is the style for the title text on the onboarding screen*/ 
      titleContent: {
        color: 'rgba(0, 0, 0, 1)',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 19,
        fontStyle: 'normal',
        fontWeight: 700
      },
    
    /*This is the style for the title box on the onboarding screen*/ 
      titleBox: {
        paddingTop: 41
      },
    
    /*This is the style for the description text on the onboarding screen*/
      textContent: {
        color: 'rgba(130, 130, 130, 1)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: 400
      },
    
    /*This is the style for the text description box on the onboarding screen*/
      textDescription: {
        paddingLeft: 16,
        paddingRight: 16,
        width: 340,
        height: 44,
        marginTop: 24
      },
    
    /*This is the style for the Get Started button text on the onboarding screen*/
      buttonText: {
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 600,
        paddingTop: 16
      },
    
    /*This is the style for the Get Started button on the onboarding screen*/ 
      buttonStyle: {
        width: 165,
        height: 51,
        flexShrink: 0,
        borderRadius: 7,
        backgroundColor: 'rgba(1, 167, 190, 1)'
      },
    
    /*This is the style for the Get Started button on the onboarding screen*/ 
      startButton: {
        marginTop: 49
      },
    
    /*This is the style for the footer on the onboarding screen*/   
      containFooter: {
        width: 124,
        height: 6,
        flexShrink: 0,
        borderRadius: 17,
        marginTop: 52,
        marginBottom: 28,
        backgroundColor: 'rgba(1, 167, 190, 1)'
      },
    
    /*This is the style for the container on the onboarding screen*/ 
      container: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: '100%'
      }
});

export default OnboardingStyles;