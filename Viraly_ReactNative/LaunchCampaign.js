import React from 'react';
import { View, ScrollView, Text, TextInput, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';

{/*This is the stylesheet for the launch campaign screen*/}
import ExternalStyles from './styles/LaunchStyles';

{/*This imports the back button image for the launch campaign screen*/}
import BackButton from './styles/BackButtonImage';
const goBack = require('./images/Back_Button.png');

{/*These are the imported icons in the footer on the launch campaign screen*/}
import HomeIcon from './styles/NavbarStyles';
const home = require('./images/home_black.png');
import CalcIcon from './styles/NavbarStyles';
const calc = require('./images/Group_1000002479.png');
import TimeIcon from './styles/NavbarStyles';
const time = require('./images/timeline.png');
import UserIcon from './styles/NavbarStyles';
const user = require('./images/004-user3.png');

export default function LaunchCampaign({navigation}) {

  {/*These are the variables for the text inputs on the launch campaign screen*/}
  const [text, setTitle] = React.useState('');
  const [audience, setGroup] = React.useState('');
  const [date, setDate] = React.useState('');
  const [currency, setAmount] = React.useState('');
  const [media, setSocial] = React.useState('');
  const [checked, setChecked] = React.useState('first')

  return (
  <ScrollView>
    <View style = {ExternalStyles.container}>

    {/*This is the top navigation on the launch campaign screen*/}
    <View style = {ExternalStyles.topNav}>

      {/*This is the back button on the launch campaign screen*/}
      <Pressable style = {ExternalStyles.imageContainer} onPress = {() => navigation.navigate('Home')}>
        <BackButton placeholderImageSource = { goBack } />
      </Pressable>

      {/*This is the title on the launch campaign screen*/}
      <Text style = {ExternalStyles.loginText}>Launch Campaign</Text>

    {/*End of top navigation bar*/}  
    </View>

    {/*This is the Campaign Title section on the launch campaign screen*/}
    <Text style = {ExternalStyles.campaignTitle}>Campaign Title</Text>
    <TextInput style = {ExternalStyles.campTitle} onChangeText = {(text) => setTitle(text)} 
        value = {text} placeholder = "Lorem ipsum"/>

    {/*This is the Campaign Category section title on the launch campaign screen*/}
    <Text style = {ExternalStyles.campaignCat}>Campaign Category</Text>

    {/*This is the first Campaign Category radio button*/}
    <View style = {ExternalStyles.firstRadio}>
      <RadioButton color = 'rgba(1, 167, 190, 1)' uncheckedColor = 'rgba(1, 167, 190, 1)' value = "first" status = { checked === 'first' ? 'checked' : 'unchecked' } onPress = {() => setChecked('first')} />
        <Text style = {ExternalStyles.firstText}>Music</Text> 
    </View>

    {/*This is the second Campaign Category radio button*/}
    <View style = {ExternalStyles.secondRadio}>
      <RadioButton color = 'rgba(1, 167, 190, 1)' value = "second" status = { checked === 'second' ? 'checked' : 'unchecked' } uncheckedColor = 'rgba(1, 167, 190, 1)' onPress={() => setChecked('second')} />
        <Text style = {ExternalStyles.secondText}>Influencer</Text>
    </View>

    {/*This is the third Campaign Category radio button*/}
    <View style = {ExternalStyles.thirdRadio}>
      <RadioButton color = 'rgba(1, 167, 190, 1)' value = "third" status = { checked === 'third' ? 'checked' : 'unchecked' } uncheckedColor = 'rgba(1, 167, 190, 1)' onPress={() => setChecked('third')} />
        <Text style = {ExternalStyles.thirdText}>Startup</Text>
    </View>

    {/*This is the fourth Campaign Category radio button*/}
    <View style = {ExternalStyles.fourthRadio}>
      <RadioButton color = 'rgba(1, 167, 190, 1)' value = "fourth" status = { checked === 'fourth' ? 'checked' : 'unchecked' } uncheckedColor = 'rgba(1, 167, 190, 1)' onPress={() => setChecked('fourth')} />
        <Text style = {ExternalStyles.fourthText}>Other</Text>
    </View>

    {/*This is the Audience text on the launch campaign screen*/}
    <View style = {ExternalStyles.audienceTitle}>
      <Text style = {ExternalStyles.boldAudience}>Audience</Text>
      <Text style = {ExternalStyles.restAudience}> (Who should see your campaign?)</Text>
    </View>

    {/*This is the Audience text input box on the launch campaign screen*/}
    <TextInput style = {ExternalStyles.audienceBox} onChangeText = {(audience) => setGroup(audience)} 
        value = {audience} placeholder = "Audience Details"/>

    {/*This is the Campaign Date section on the launch campaign screen*/}
    <Text style = {ExternalStyles.campaignDate}>Choose when this campaign will end</Text>
    <TextInput style = {ExternalStyles.campDate} onChangeText = {(date) => setDate(date)} 
        value = {date} placeholder = "7"/>

    {/*This is the Daily Budget section on the launch campaign screen*/}
    <Text style = {ExternalStyles.budgetTitle}>Daily Budget</Text>
    <Text style = {ExternalStyles.budgetDescription}>Actual amount you may want to spend</Text>
    <TextInput style = {ExternalStyles.campBudget} onChangeText = {(currency) => setAmount(currency)} 
        value = {currency} placeholder = "PKR"/>

    {/*This is the Campaign Placement section on the launch campaign screen*/}
    <Text style = {ExternalStyles.campPlace}>Campaign Placement</Text>
    <TextInput style = {ExternalStyles.campBudget} onChangeText = {(media) => setSocial(media)} 
        value = {media} placeholder = "Facebook, Instagram, Twitter, etc."/>

    {/*This is the Next button on the launch campaign screen
      - Upload Campaign screen needs to be created*/}
    <View style = {ExternalStyles.nextButton}>
      <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('Upload Campaign')}>
        <Text style = {ExternalStyles.buttonText}>Next</Text>
      </Pressable>
    </View>

    {/*This is the footer on the launch campaign screen*/}
    <View style = {ExternalStyles.footerContainer}>

      {/*This is the footer navigation*/}
      <View style = {ExternalStyles.navbarContainer}>

        {/*This is the home icon button on the launch campaign screen*/}
        <Pressable onPress = {() => navigation.navigate('Home')}>
          <View style = {ExternalStyles.homeIcon}>
            <HomeIcon placeholderImageSource = { home } />
          </View>
        </Pressable>

        {/*This is the calculator icon button on the launch campaign screen*/}
        <Pressable onPress = {() => navigation.navigate('Calculator')}>
          <View style = {ExternalStyles.homeIcon}>
            <CalcIcon placeholderImageSource = { calc } />
          </View>
        </Pressable>

        {/*This is the timeline icon button on the launch campaign screen*/}
        <Pressable onPress = {() => navigation.navigate('Timeline')}>
          <View style = {ExternalStyles.homeIcon}>
            <TimeIcon placeholderImageSource = { time } />
          </View>
        </Pressable>
          
        {/*This is the user icon button on the launch campaign screen*/}
        <Pressable onPress = {() => navigation.navigate('Account')}>
          <UserIcon placeholderImageSource = { user } />
        </Pressable>

      {/*End of footer navigation*/}
      </View>

    {/*End of footer*/}
    </View>

    {/*This is the footer navigation text on the launch campaign screen*/}
    <View style = {ExternalStyles.navbarText}>
      <Text style = {ExternalStyles.blackHomeText}>Home</Text>
      <Text style = {ExternalStyles.blackCalcText}>Calculator</Text>
      <Text style = {ExternalStyles.blackTimeText}>Timeline</Text>
      <Text style = {ExternalStyles.blackUserText}>Account</Text>
    </View>
      
    </View>
  </ScrollView>
  )
}