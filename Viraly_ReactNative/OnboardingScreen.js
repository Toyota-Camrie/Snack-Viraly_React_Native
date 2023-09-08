import React from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';

//Stylesheet
import ExternalStyles from './styles/OnboardingStyles';

//SplashScreen and Image
import OnboardingImage from './styles/OnboardingImg';
const OnboardImage = require('./images/onboarding_img.png');


export default function OnboardingScreen({navigation}) {
  return (
      <ScrollView>
        <View style = {ExternalStyles.container}>
          <View style = {ExternalStyles.imageContainer}>
            <OnboardingImage placeholderImageSource = { OnboardImage } />
          </View>

          <View style = {ExternalStyles.rectangleFrame}>
            <View style = {ExternalStyles.blueRectangle}></View>
            <View style = {ExternalStyles.grayCircle}></View>
          </View>

          <View style = {ExternalStyles.titleBox}>
            <Text style = {ExternalStyles.titleContent}>Digital and Influencer Marketing
Services in one action.</Text>
          </View>

          <View style = {ExternalStyles.textDescription}>
            <Text style = {ExternalStyles.textContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit leo felis congue elit leo.</Text>
          </View>

          <View style = {ExternalStyles.startButton}>
            <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('Login')}>
              <Text style = {ExternalStyles.buttonText}>Get Started</Text>
            </Pressable>
          </View>

          <View style = {ExternalStyles.containFooter}>
            <View style = {ExternalStyles.rectangle}></View>
          </View>

        </View>
      </ScrollView>
    )
}