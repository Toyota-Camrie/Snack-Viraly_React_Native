import React from 'react';
import { View, ScrollView, Text, TextInput, Pressable } from 'react-native';

{/*This imports the stylesheet for the verify email screen*/}
import ExternalStyles from './styles/VerifyStyles';

{/*This imports the email image for the verify email screen*/}
import EmailImg from './styles/EmailImage';
const emailImage = require('./images/Email_Logo.png');


export default function VerifyEmail({navigation}) {

  {/*These are the text input variables for the verify email screen*/}
  const [num1, firstNumber] = React.useState('');
  const [num2, secondNumber] = React.useState('');
  const [num3, thirdNumber] = React.useState('');
  const [num4, fourthNumber] = React.useState('');

  return (
  <ScrollView>
    <View style = {ExternalStyles.container}>

      {/*This is the email image on the verify email screen*/}
      <View style = {ExternalStyles.imageContainer}>
        <EmailImg placeholderImageSource = { emailImage } />
      </View>

      {/*This is the title on the verify email screen*/}
      <View style = {ExternalStyles.loginTitle}>
        <Text style = {ExternalStyles.loginText}>Verify Email</Text>
      </View>

      {/*This is the text description on the verify email screen*/}
      <View style = {ExternalStyles.descriptionBox}>
        <Text style = {ExternalStyles.descriptionText}>Please check your email for the 4-digit code to continue.</Text>
      </View>

      {/*This is the container for number code input on the verify email screen*/}
      <View style = {ExternalStyles.numberEntries}>

        {/*This is the first number input on the verify email screen*/}
        <TextInput style = {ExternalStyles.numberBox} onChangeText = {(num1) => firstNumber(num1)} 
        value = {num1} placeholder = "2"/>

        {/*This is the second number input on the verify email screen*/}
        <TextInput style = {ExternalStyles.numberBox} onChangeText = {(num2) => secondNumber(num2)} 
        value = {num2} placeholder = "6"/>

        {/*This is the third number input on the verify email screen*/}
        <TextInput style = {ExternalStyles.numberBox} onChangeText = {(num3) => thirdNumber(num3)} 
        value = {num3} placeholder = "8"/>

        {/*This is the fourth number input on the verify email screen*/}
        <TextInput style = {ExternalStyles.numberBox} onChangeText = {(num4) => fourthNumber(num4)} 
        value = {num4} placeholder = "3"/>
      </View>

      {/*This is the Send Code Again link on the verify email screen
        - still needs to link somewhere so code can be sent again*/}
      <Pressable onPress = {() => navigation.navigate('Verify Email')}>
        <Text style = {ExternalStyles.newCode}>Send Code Again</Text>
      </Pressable>

      {/*This is the Confirm button on the verify email screen*/}
      <View style = {ExternalStyles.resetButton}>
        <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('New Password')}>
          <Text style = {ExternalStyles.buttonText}>Confirm</Text>
        </Pressable>
      </View>

      {/*This is the rectangle and footer on the verify email screen*/}
      <View style = {ExternalStyles.footerContainer}>
        <View style = {ExternalStyles.rectangle}></View>
      </View>

    </View>
  </ScrollView>
  )
}