import React from 'react';
import { View, ScrollView, Text, TextInput, Pressable } from 'react-native';

import ExternalStyles from './styles/ForgotStyles';

import LockImg from './styles/LockImage';
const theLock = require('./images/Lock_Icon.png');


export default function ForgotPassword({navigation}) {
  const [username, setUsername] = React.useState('');

  return (
  <ScrollView>
    <View style = {ExternalStyles.container}>

      <View style = {ExternalStyles.imageContainer}>
        <LockImg placeholderImageSource = { theLock } />
      </View>

      <View style = {ExternalStyles.loginTitle}>
        <Text style = {ExternalStyles.loginText}>Forgot Password?</Text>
      </View>

      <View style = {ExternalStyles.descriptionBox}>
        <Text style = {ExternalStyles.descriptionText}>Enter your email address to recover your account.</Text>
      </View>

      <TextInput style = {ExternalStyles.usernameBox} onChangeText = {(username) => setUsername(username)} 
        value = {username} placeholder = "Enter your email"/>

      <View style = {ExternalStyles.backLink}>
        <Pressable>
          <Text style = {ExternalStyles.backText}>Try other ways</Text>
        </Pressable>
      </View>

      <View style = {ExternalStyles.resetButton}>
        <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('Verify Email')}>
          <Text style = {ExternalStyles.buttonText}>Reset Password</Text>
        </Pressable>
      </View>

      <View style = {ExternalStyles.footerContainer}>
        <View style = {ExternalStyles.rectangle}></View>
      </View>

    </View>
  </ScrollView>
  )
}