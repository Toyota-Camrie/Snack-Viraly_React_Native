import React from 'react';
import { View, ScrollView, Text, TextInput, Pressable } from 'react-native';

{/*This is the stylesheet for the forgot password screen*/}
import ExternalStyles from './styles/ForgotStyles';

{/*This imports the lock image for the forgot password screen*/}
import LockImg from './styles/LockImage';
const theLock = require('./images/Lock_Icon.png');


export default function ForgotPassword({navigation}) {

  {/*This is for the email text input on the forgot password screen*/}
  const [username, setUsername] = React.useState('');

  return (
  <ScrollView>
    <View style = {ExternalStyles.container}>

      {/*This is the lock image container for the forgot password screen*/}
      <View style = {ExternalStyles.imageContainer}>
        <LockImg placeholderImageSource = { theLock } />
      </View>

      {/*This is the forgot password title for the forgot password screen*/}
      <View style = {ExternalStyles.loginTitle}>
        <Text style = {ExternalStyles.loginText}>Forgot Password?</Text>
      </View>

      {/*This is the text description for the forgot password screen*/}
      <View style = {ExternalStyles.descriptionBox}>
        <Text style = {ExternalStyles.descriptionText}>Enter your email address to recover your account.</Text>
      </View>

      {/*This is the email text input for the forgot password screen*/}
      <TextInput style = {ExternalStyles.usernameBox} onChangeText = {(username) => setUsername(username)} 
        value = {username} placeholder = "Enter your email"/>

      {/*This is the link to try other ways for getting password
        - needs to direct user to different methods of reseting password*/}
      <View style = {ExternalStyles.backLink}>
        <Pressable>
          <Text style = {ExternalStyles.backText}>Try other ways</Text>
        </Pressable>
      </View>

      {/*This is the Reset Password button for the forgot password screen*/}
      <View style = {ExternalStyles.resetButton}>
        <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('Verify Email')}>
          <Text style = {ExternalStyles.buttonText}>Reset Password</Text>
        </Pressable>
      </View>

      {/*This is the rectangle and the footer for the forgot password screen*/}
      <View style = {ExternalStyles.footerContainer}>
        <View style = {ExternalStyles.rectangle}></View>
      </View>

    </View>
  </ScrollView>
  )
}