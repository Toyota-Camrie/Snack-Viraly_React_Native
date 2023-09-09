import React from 'react';
import { View, ScrollView, Text, TextInput, Pressable } from 'react-native';

{/*This is the stylesheet for the signup screen*/}
import ExternalStyles from './styles/SignupStyles';

{/*This imports the logo for the signup screen*/}
import LoginImage from './styles/LoginImage';
const LogImage = require('./images/logo.png');


export default function LoginScreen({navigation}) {

  {/*These are for the text input boxes on the signup screen*/}
  const [username, setUsername] = React.useState('');
  const [text, onChangeText] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, resetPassword] = React.useState('');

  return (
  <ScrollView>
    <View style = {ExternalStyles.container}>

      {/*This is the logo image on the signup screen*/}
      <View style = {ExternalStyles.imageContainer}>
        <LoginImage placeholderImageSource = { LogImage } />
      </View>

      {/*This is the title on the signup screen*/}
      <View style = {ExternalStyles.loginTitle}>
        <Text style = {ExternalStyles.loginText}>Sign Up</Text>
      </View>

      {/*This is the text description for the signup screen*/}
      <View style = {ExternalStyles.descriptionBox}>
        <Text style = {ExternalStyles.descriptionText}>Let’s Get Connected Forever!</Text>
      </View>

      {/*This is the input for the username on the signup screen*/}
      <TextInput style = {ExternalStyles.usernameBox} onChangeText = {(username) => setUsername(username)} 
        value = {username} placeholder = "Username"/>

      {/*This is the input for the email address on the signup screen*/}
      <TextInput style = {ExternalStyles.emailBox} onChangeText = {onChangeText} 
        value = {text} placeholder = "Email"/>

      {/*This is the input for the password on the signup screen*/}
      <TextInput secureTextEntry = {true} style = {ExternalStyles.passwordBox}  onChangeText = {(password) => setPassword(password)} 
        value = {password} placeholder = "Password"/>

      {/*This is the input for the password confirmation on the signup screen*/}
      <TextInput secureTextEntry = {true} style = {ExternalStyles.confirmBox} onChangeText = {(confirm) => resetPassword(confirm)} 
        value = {confirm} placeholder = "Confirm Password"/>

      {/*This is the Sign Up button on the signup screen*/}
      <View style = {ExternalStyles.signinButton}>
        <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('Home')}>
          <Text style = {ExternalStyles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>

      {/*This is a link to take the user back to the login screen*/}
      <View style = {ExternalStyles.backLink}>
        <Pressable>
          <Text style = {ExternalStyles.backText}>Back to Login</Text>
        </Pressable>
      </View>

      {/*This is the rectangle in the footer on the signup screen*/}
      <View style = {ExternalStyles.footerContainer}>
        <View style = {ExternalStyles.rectangle}></View>
      </View>

    </View>
  </ScrollView>
  )
}