import React from 'react';
import { View, ScrollView, Text, Pressable } from 'react-native';

import ExternalStyles from './styles/HomeStyles';

import HomeNav from './styles/MenuIcon';
const NavbarPic = require('./images/Group_19298.png');
import ProfilePic from './styles/ProfileImage';
const theProfile = require('./images/Group_3097.png');
import HomeBack from './styles/HomeBackground';
const backgroundPic = require('./images/image_7.png');

import HomeIcon from './styles/NavbarStyles';
const home = require('./images/Vector.png');
import CalcIcon from './styles/NavbarStyles';
const calc = require('./images/Group_1000002479.png');
import TimeIcon from './styles/NavbarStyles';
const time = require('./images/timeline.png');
import UserIcon from './styles/NavbarStyles';
const user = require('./images/004-user3.png');

export default function Home({navigation}) {

  return (
  <ScrollView>
    <View style = {ExternalStyles.container}>

    <View style = {ExternalStyles.topNav}>
      <View style = {ExternalStyles.imageContainer}>
        <HomeNav placeholderImageSource = { NavbarPic } />
      </View>

      <View>
        <ProfilePic placeholderImageSource = { theProfile } />
      </View>
    </View>

    <View style = {ExternalStyles.descriptionBox}>
        <Text style = {ExternalStyles.descriptionText}>Hi Jones! Good Morning</Text>
      </View>

      <View style = {ExternalStyles.loginTitle}>
        <Text style = {ExternalStyles.loginText}>Make Yourself Visible</Text>
      </View>

      <View style = {ExternalStyles.backgroundImage}>
        <HomeBack placeholderImageSource = { backgroundPic } />
      </View>

      <Text style = {ExternalStyles.launchMessage}>Launch your compaign so fans and the music industry can discover you.</Text>

      <View style = {ExternalStyles.resetButton}>
        <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('Launch Campaign')}>
          <Text style = {ExternalStyles.buttonText}>Launch Campaign</Text>
        </Pressable>
      </View>

      <View style = {ExternalStyles.footerContainer}>
        <View style = {ExternalStyles.navbarContainer}>
          <Pressable onPress = {() => navigation.navigate('Home')}>
            <View style = {ExternalStyles.homeIcon}>
              <HomeIcon placeholderImageSource = { home } />
            </View>
          </Pressable>

          <Pressable onPress = {() => navigation.navigate('Calculator')}>
            <View style = {ExternalStyles.homeIcon}>
              <CalcIcon placeholderImageSource = { calc } />
            </View>
          </Pressable>

          <Pressable onPress = {() => navigation.navigate('Timeline')}>
            <View style = {ExternalStyles.homeIcon}>
              <TimeIcon placeholderImageSource = { time } />
            </View>
          </Pressable>
          
          <Pressable onPress = {() => navigation.navigate('Account')}>
            <UserIcon placeholderImageSource = { user } />
          </Pressable>

        </View>

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