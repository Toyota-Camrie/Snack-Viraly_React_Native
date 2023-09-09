import React from 'react';
import { View, ScrollView, Text, TextInput, Pressable } from 'react-native';

{/*This imports the stylesheet for the login screen*/}
import ExternalStyles from './styles/LoginStyles';

{/*This imports the logo image for the login screen*/}
import LoginImage from './styles/LoginImage';
const LogImage = require('./images/logo.png');

{/*This imports the Google icon image for the login screen*/}
import GoogleIcon from './styles/GoogleIcon';
const GooglePic = require('./images/iconGoogle.png');

{/*This imports the Facebook icon image for the login screen*/}
import FacebookIcon from './styles/FacebookIcon';
const FacebookPic = require('./images/iconFacebook.png');


export default function LoginScreen({navigation}) {

  {/*This is for the text input areas on the login screen*/}
  const [text, onChangeText] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
  <ScrollView>
    <View style = {ExternalStyles.container}>

      {/*This is for the logo image on the login screen*/}
      <View style = {ExternalStyles.imageContainer}>
        <LoginImage placeholderImageSource = { LogImage } />
      </View>

      {/*This is for the login title on the login screen*/}
      <View style = {ExternalStyles.loginTitle}>
        <Text style = {ExternalStyles.loginText}>Login</Text>
      </View>

      {/*This is for the text description on the login screen*/}
      <View style = {ExternalStyles.descriptionBox}>
        <Text style = {ExternalStyles.descriptionText}>Let’s Get Connected Forever!</Text>
      </View>

      {/*This is the email text input on the login screen*/}
      <TextInput style = {ExternalStyles.emailBox} onChangeText = {onChangeText} 
        value = {text} placeholder = "Email or Username"/>

      {/*This is the password text input on the login screen*/}
      <TextInput secureTextEntry = {true} style = {ExternalStyles.passwordBox}  onChangeText = {(password) => setPassword(password)} 
        value = {password} placeholder = "Password"/>

      {/*This text navigates the user to the Forgot Password screen*/}
      <View style = {ExternalStyles.forgotBox}>
        <Pressable onPress = {() => navigation.navigate('Home')}>
          <Text style = {ExternalStyles.forgotPassword}>Forgot password?</Text>
        </Pressable>
      </View>

      {/*This is the Sign In button on the login screen*/}
      <View style = {ExternalStyles.signinButton}>
        <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('Home')}>
          <Text style = {ExternalStyles.buttonText}>Sign In</Text>
        </Pressable>
      </View>

      {/*This text navigate the user to the Sign Up screen*/}
      <View style = {ExternalStyles.signUp}>
        <Text>
          Not have account?
          <Pressable onPress = {() => navigation.navigate('SignUp')}>
            <Text style = {ExternalStyles.signupText}> Sign Up</Text>
          </Pressable>
        </Text>
      </View>

      {/*This is the "OR" text on the login screen*/}
      <View style = {ExternalStyles.other}>
        <Text style = {ExternalStyles.or}>OR</Text>
      </View>

      {/*This is the "Sign In with" text on the login screen*/}
      <View style = {ExternalStyles.otherSign}>
        <Text style = {ExternalStyles.otherText}>Sign In with</Text>
      </View>

      {/*This is the container for the Google and Facebook buttons*/}
      <View style = {ExternalStyles.boxes}>

      {/*This is the Google button on the login screen
        - needs to navigate user to sign in option with Google*/}
      <Pressable style = {ExternalStyles.googleBox}>
          <GoogleIcon placeholderImageSource = { GooglePic } />
        </Pressable>

        {/*This is the Facebook button on the login screen
        - needs to navigate user to sign in option with Facebook*/}
        <Pressable style = {ExternalStyles.facebookBox}>
          <FacebookIcon placeholderImageSource = { FacebookPic } />
        </Pressable>
      </View>

      {/*This is the rectangle in the footer on the login screen*/}
      <View style = {ExternalStyles.footerContainer}>
        <View style = {ExternalStyles.rectangle}></View>
      </View>

    </View>
  </ScrollView>
  )
}