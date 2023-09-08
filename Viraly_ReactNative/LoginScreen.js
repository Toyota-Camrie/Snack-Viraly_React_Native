import React from 'react';
import { View, ScrollView, Text, TextInput, Pressable } from 'react-native';

import ExternalStyles from './styles/LoginStyles';

import LoginImage from './styles/LoginImage';
const LogImage = require('./images/logo.png');

import GoogleIcon from './styles/GoogleIcon';
const GooglePic = require('./images/iconGoogle.png');

import FacebookIcon from './styles/FacebookIcon';
const FacebookPic = require('./images/iconFacebook.png');


export default function LoginScreen({navigation}) {
  const [text, onChangeText] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
  <ScrollView>
    <View style = {ExternalStyles.container}>

      <View style = {ExternalStyles.imageContainer}>
        <LoginImage placeholderImageSource = { LogImage } />
      </View>

      <View style = {ExternalStyles.loginTitle}>
        <Text style = {ExternalStyles.loginText}>Login</Text>
      </View>

      <View style = {ExternalStyles.descriptionBox}>
        <Text style = {ExternalStyles.descriptionText}>Let’s Get Connected Forever!</Text>
      </View>

      <TextInput style = {ExternalStyles.emailBox} onChangeText = {onChangeText} 
        value = {text} placeholder = "Email or Username"/>

      <TextInput secureTextEntry = {true} style = {ExternalStyles.passwordBox}  onChangeText = {(password) => setPassword(password)} 
        value = {password} placeholder = "Password"/>

      <View style = {ExternalStyles.forgotBox}>
        <Pressable onPress = {() => navigation.navigate('Home')}>
          <Text style = {ExternalStyles.forgotPassword}>Forgot password?</Text>
        </Pressable>
      </View>

      <View style = {ExternalStyles.signinButton}>
        <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('Home')}>
          <Text style = {ExternalStyles.buttonText}>Sign In</Text>
        </Pressable>
      </View>

      <View style = {ExternalStyles.signUp}>
        <Text>
          Not have account?
          <Pressable onPress = {() => navigation.navigate('SignUp')}>
            <Text style = {ExternalStyles.signupText}> Sign Up</Text>
          </Pressable>
        </Text>
      </View>

      <View style = {ExternalStyles.other}>
        <Text style = {ExternalStyles.or}>OR</Text>
      </View>

      <View style = {ExternalStyles.otherSign}>
        <Text style = {ExternalStyles.otherText}>Sign In with</Text>
      </View>

      <View style = {ExternalStyles.boxes}>
        <View style = {ExternalStyles.googleBox}>
          <GoogleIcon placeholderImageSource = { GooglePic } />
        </View>

        <View style = {ExternalStyles.facebookBox}>
          <FacebookIcon placeholderImageSource = { FacebookPic } />
        </View>
      </View>

      <View style = {ExternalStyles.footerContainer}>
        <View style = {ExternalStyles.rectangle}></View>
      </View>

    </View>
  </ScrollView>
  )
}