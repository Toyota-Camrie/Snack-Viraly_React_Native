import React from 'react';
import { View, ScrollView, Text, TextInput, Pressable } from 'react-native';

import ExternalStyles from './styles/NewStyles';


export default function VerifyEmail({navigation}) {
  const [password, newPassword] = React.useState('');
  const [confirm, setPassword] = React.useState('');

  return (
  <ScrollView>
    <View style = {ExternalStyles.container}>

      <View style = {ExternalStyles.loginTitle}>
        <Text style = {ExternalStyles.loginText}>New
          <Text style = {ExternalStyles.passText}> Password</Text>
        </Text>
      </View>

      <View style = {ExternalStyles.descriptionBox}>
        <Text style = {ExternalStyles.descriptionText}>Reset your password & login to your account.</Text>
      </View>

      <TextInput secureTextEntry = {true} style = {ExternalStyles.emailBox} onChangeText = {(password) => newPassword(password)} 
        value = {password} placeholder = "New Password"/>

      <TextInput secureTextEntry = {true} style = {ExternalStyles.emailBox} onChangeText = {(confirm) => setPassword(confirm)} 
        value = {confirm} placeholder = "Retype Password"/>

      <View style = {ExternalStyles.resetButton}>
        <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('Login')}>
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