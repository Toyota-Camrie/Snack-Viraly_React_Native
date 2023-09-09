import React from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';

{/*This imports the stylesheet for the onboarding screen*/}
import ExternalStyles from './styles/OnboardingStyles';

{/*This imports the background image for the onboarding screen*/}
import OnboardingImage from './styles/OnboardingImg';
const OnboardImage = require('./images/onboarding_img.png');


export default function OnboardingScreen({navigation}) {
  return (
      <ScrollView>
        <View style = {ExternalStyles.container}>

          {/*This shows the background image for the onboarding screen*/}
          <View style = {ExternalStyles.imageContainer}>
            <OnboardingImage placeholderImageSource = { OnboardImage } />
          </View>

          {/*This shows the rectangles for the onboarding screen*/}
          <View style = {ExternalStyles.rectangleFrame}>
            <View style = {ExternalStyles.blueRectangle}></View>
            <View style = {ExternalStyles.grayCircle}></View>
          </View>

          {/*This shows the title for the onboarding screen*/}
          <View style = {ExternalStyles.titleBox}>
            <Text style = {ExternalStyles.titleContent}>Digital and Influencer Marketing
Services in one action.</Text>
          </View>

          {/*This shows the text description for the onboarding screen*/}
          <View style = {ExternalStyles.textDescription}>
            <Text style = {ExternalStyles.textContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit leo felis congue elit leo.</Text>
          </View>

          {/*This shows the Get Started button for the onboarding screen*/}
          <View style = {ExternalStyles.startButton}>
            <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('Login')}>
              <Text style = {ExternalStyles.buttonText}>Get Started</Text>
            </Pressable>
          </View>

          {/*This shows the rectangle in the footer for the onboarding screen*/}
          <View style = {ExternalStyles.containFooter}>
            <View style = {ExternalStyles.rectangle}></View>
          </View>

        </View>
      </ScrollView>
    )
}