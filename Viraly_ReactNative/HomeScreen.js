import React from 'react';
import { View, ScrollView, Text, Pressable } from 'react-native';

{/*This is the stylesheet for the home screen*/}
import ExternalStyles from './styles/HomeStyles';

{/*This imports the menu icon in the navbar on the home screen*/}
import HomeNav from './styles/MenuIcon';
const NavbarPic = require('./images/Group_19298.png');

{/*This imports the profile picture in the navbar on the home screen*/}
import ProfilePic from './styles/ProfileImage';
const theProfile = require('./images/Group_3097.png');


{/*This imports the background image in the navbar on the home screen*/}
import HomeBack from './styles/HomeBackground';
const backgroundPic = require('./images/image_7.png');


{/*This imports the home icon in the footer on the home screen*/}
import HomeIcon from './styles/NavbarStyles';
const home = require('./images/Vector.png');

{/*This imports the calculator icon in the footer on the home screen*/}
import CalcIcon from './styles/NavbarStyles';
const calc = require('./images/Group_1000002479.png');

{/*This imports the timeline icon in the footer on the home screen*/}
import TimeIcon from './styles/NavbarStyles';
const time = require('./images/timeline.png');

{/*This imports the user icon in the footer on the home screen*/}
import UserIcon from './styles/NavbarStyles';
const user = require('./images/004-user3.png');

export default function Home({navigation}) {

  return (
  <ScrollView>
    <View style = {ExternalStyles.container}>

    {/*This is the navbar on the home screen*/}
    <View style = {ExternalStyles.topNav}>

      {/*This is the menu icon on the home screen
      - still needs to have a popup element added*/}
      <View style = {ExternalStyles.imageContainer}>
        <HomeNav placeholderImageSource = { NavbarPic } />
      </View>

      {/*This is the profile picture on the home screen
      - need to create Account page*/}
      <Pressable onPress = {() => navigation.navigate('Account')}>
        <ProfilePic placeholderImageSource = { theProfile } />
      </Pressable>

    {/*End of navbar*/}
    </View>

    {/*This is the text description on the home screen*/}
    <View style = {ExternalStyles.descriptionBox}>
      <Text style = {ExternalStyles.descriptionText}>Hi Jones! Good Morning</Text>
    </View>

      {/*This is the title on the home screen*/}
      <View style = {ExternalStyles.loginTitle}>
        <Text style = {ExternalStyles.loginText}>Make Yourself Visible</Text>
      </View>

      {/*This is the background image on the home screen*/}
      <View style = {ExternalStyles.backgroundImage}>
        <HomeBack placeholderImageSource = { backgroundPic } />
      </View>

      {/*This is the launch campaign message on the home screen*/}
      <Text style = {ExternalStyles.launchMessage}>Launch your compaign so fans and the music industry can discover you.</Text>

      {/*This is the Launch Campaign button on the home screen*/}
      <View style = {ExternalStyles.resetButton}>
        <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('Launch Campaign')}>
          <Text style = {ExternalStyles.buttonText}>Launch Campaign</Text>
        </Pressable>
      </View>

      {/*This is the footer on the home screen*/}
      <View style = {ExternalStyles.footerContainer}>

        {/*This is the navigation on the home screen*/}
        <View style = {ExternalStyles.navbarContainer}>

          {/*This is the home icon button on the home screen*/}
          <Pressable onPress = {() => navigation.navigate('Home')}>
            <View style = {ExternalStyles.homeIcon}>
              <HomeIcon placeholderImageSource = { home } />
            </View>
          </Pressable>

          {/*This is the calculator icon button on the home screen*/}
          <Pressable onPress = {() => navigation.navigate('Calculator')}>
            <View style = {ExternalStyles.homeIcon}>
              <CalcIcon placeholderImageSource = { calc } />
            </View>
          </Pressable>

          {/*This is the timeline icon button on the home screen*/}
          <Pressable onPress = {() => navigation.navigate('Timeline')}>
            <View style = {ExternalStyles.homeIcon}>
              <TimeIcon placeholderImageSource = { time } />
            </View>
          </Pressable>
          
          {/*This is the user icon button on the home screen*/}
          <Pressable onPress = {() => navigation.navigate('Account')}>
            <UserIcon placeholderImageSource = { user } />
          </Pressable>

        {/*End of "footer"*/}
        </View>

        {/*These are the text associations with the icons in the footer*/}
        <View style = {ExternalStyles.navbarText}>
            <Text style = {ExternalStyles.homeText}>Home</Text>
            <Text style = {ExternalStyles.blackNavText}>Calculator</Text>
            <Text style = {ExternalStyles.blackNavText}>Timeline</Text>
            <Text style = {ExternalStyles.blackNavText}>Account</Text>
        </View>
      </View>

    </View>
  </ScrollView>
  )
}