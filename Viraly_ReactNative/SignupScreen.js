import React from 'react';
import { View, ScrollView, Text, TextInput, Pressable } from 'react-native';

import ExternalStyles from './styles/SignupStyles';

import LoginImage from './styles/LoginImage';
const LogImage = require('./images/logo.png');


export default function LoginScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [text, onChangeText] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, resetPassword] = React.useState('');

  return (
  <ScrollView>
    <View style = {ExternalStyles.container}>

      <View style = {ExternalStyles.imageContainer}>
        <LoginImage placeholderImageSource = { LogImage } />
      </View>

      <View style = {ExternalStyles.loginTitle}>
        <Text style = {ExternalStyles.loginText}>Sign Up</Text>
      </View>

      <View style = {ExternalStyles.descriptionBox}>
        <Text style = {ExternalStyles.descriptionText}>Let’s Get Connected Forever!</Text>
      </View>

      <TextInput style = {ExternalStyles.usernameBox} onChangeText = {(username) => setUsername(username)} 
        value = {username} placeholder = "Username"/>

      <TextInput style = {ExternalStyles.emailBox} onChangeText = {onChangeText} 
        value = {text} placeholder = "Email"/>

      <TextInput secureTextEntry = {true} style = {ExternalStyles.passwordBox}  onChangeText = {(password) => setPassword(password)} 
        value = {password} placeholder = "Password"/>

      <TextInput secureTextEntry = {true} style = {ExternalStyles.confirmBox} onChangeText = {(confirm) => resetPassword(confirm)} 
        value = {confirm} placeholder = "Confirm Password"/>

      <View style = {ExternalStyles.signinButton}>
        <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('Home')}>
          <Text style = {ExternalStyles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>

      <View style = {ExternalStyles.backLink}>
        <Pressable>
          <Text style = {ExternalStyles.backText}>Back to Login</Text>
        </Pressable>
      </View>

      <View style = {ExternalStyles.footerContainer}>
        <View style = {ExternalStyles.rectangle}></View>
      </View>

    </View>
  </ScrollView>
  )
}