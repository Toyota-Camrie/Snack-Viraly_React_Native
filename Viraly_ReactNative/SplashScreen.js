import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

{/*This imports the logo image for the splash screen*/}
import SplashImage from './styles/SplashImage';
const LogoImage = require('./images/logo.png');

export default function App() {
  return (
    <ScrollView>
      <View style = {styles.container}>

        {/*This shows the logo image on the splash screen*/}
        <View style = {styles.imageContainer}>
          <SplashImage placeholderImageSource = { LogoImage } />
        </View>

        {/*This shows the rectangle in the footer on the splash screen*/}
        <View style = {styles.footerContainer}>
          <View style = {styles.rectangle}></View>
        </View>
      </View>
    </ScrollView>
  );
}

{/*This is the stylesheet for the splash screen*/}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.74)',
    height: '100%'
  },

  /*This is the style for the image on the splash screen*/
  imageContainer: {
    paddingTop: 370.38
  },

  /*This is the style for the rectangle on the splash screen*/
  footerContainer: {
    alignItems: 'center',
    width: 124,
    height: 6,
    flexShrink: 0,
    borderRadius: 17,
    marginTop: 356.97,
    marginBottom: 28,
    backgroundColor: 'rgba(1, 167, 190, 1)'
  }
});