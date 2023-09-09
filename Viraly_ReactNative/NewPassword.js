import React from 'react';
import { View, ScrollView, Text, TextInput, Pressable } from 'react-native';

{/*This is the stylesheet for the new password screen*/}
import ExternalStyles from './styles/NewStyles';


export default function NewPassword({navigation}) {

  {/*These are the text input variables for the new password screen*/}
  const [password, newPassword] = React.useState('');
  const [confirm, setPassword] = React.useState('');

  return (
  <ScrollView>
    <View style = {ExternalStyles.container}>

      {/*This is the title for the new password screen*/}
      <View style = {ExternalStyles.loginTitle}>
        <Text style = {ExternalStyles.loginText}>New
          <Text style = {ExternalStyles.passText}> Password</Text>
        </Text>
      </View>

      {/*This is the text description for the new password screen*/}
      <View style = {ExternalStyles.descriptionBox}>
        <Text style = {ExternalStyles.descriptionText}>Reset your password & login to your account.</Text>
      </View>

      {/*This is the new password text input for the new password screen*/}
      <TextInput secureTextEntry = {true} style = {ExternalStyles.emailBox} onChangeText = {(password) => newPassword(password)} 
        value = {password} placeholder = "New Password"/>

      {/*This is the confirm password text input for the new password screen*/}
      <TextInput secureTextEntry = {true} style = {ExternalStyles.emailBox} onChangeText = {(confirm) => setPassword(confirm)} 
        value = {confirm} placeholder = "Retype Password"/>

      {/*This is the Reset Password button for the new password screen*/}
      <View style = {ExternalStyles.resetButton}>
        <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('Login')}>
          <Text style = {ExternalStyles.buttonText}>Reset Password</Text>
        </Pressable>
      </View>

      {/*This is the rectangle and footer for the new password screen*/}
      <View style = {ExternalStyles.footerContainer}>
        <View style = {ExternalStyles.rectangle}></View>
      </View>

    </View>
  </ScrollView>
  )
}