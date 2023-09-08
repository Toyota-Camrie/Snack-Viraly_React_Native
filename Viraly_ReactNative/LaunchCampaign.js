import React from 'react';
import { View, ScrollView, Text, TextInput, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';

import ExternalStyles from './styles/LaunchStyles';

import BackButton from './styles/BackButtonImage';
const goBack = require('./images/Back_Button.png');

import HomeIcon from './styles/NavbarStyles';
const home = require('./images/home_black.png');
import CalcIcon from './styles/NavbarStyles';
const calc = require('./images/Group_1000002479.png');
import TimeIcon from './styles/NavbarStyles';
const time = require('./images/timeline.png');
import UserIcon from './styles/NavbarStyles';
const user = require('./images/004-user3.png');

export default function LaunchCampaign({navigation}) {
  const [text, setTitle] = React.useState('');
  const [audience, setGroup] = React.useState('');
  const [date, setDate] = React.useState('');
  const [currency, setAmount] = React.useState('');
  const [media, setSocial] = React.useState('');
  const [checked, setChecked] = React.useState('first')

  return (
  <ScrollView>
    <View style = {ExternalStyles.container}>

    {/* This covers the title and the back button */}
    <View style = {ExternalStyles.topNav}>
      <View style = {ExternalStyles.imageContainer}>
        <BackButton placeholderImageSource = { goBack } />
      </View>
      <Text style = {ExternalStyles.loginText}>Launch Campaign</Text>
    </View>

    {/* This covers the Campaign Title section */}
    <Text style = {ExternalStyles.campaignTitle}>Campaign Title</Text>
    <TextInput style = {ExternalStyles.campTitle} onChangeText = {(text) => setTitle(text)} 
        value = {text} placeholder = "Lorem ipsum"/>

    {/* This covers the Campaign Category title */}
    <Text style = {ExternalStyles.campaignCat}>Campaign Category</Text>

    {/* This covers the Campaign Category first radio button */}
    <View style = {ExternalStyles.firstRadio}>
      <RadioButton color = 'rgba(1, 167, 190, 1)' uncheckedColor = 'rgba(1, 167, 190, 1)' value = "first" status = { checked === 'first' ? 'checked' : 'unchecked' } onPress = {() => setChecked('first')} />
        <Text style = {ExternalStyles.firstText}>Music</Text> 
    </View>

    {/* This covers the Campaign Category second radio button */}
    <View style = {ExternalStyles.secondRadio}>
      <RadioButton color = 'rgba(1, 167, 190, 1)' value = "second" status = { checked === 'second' ? 'checked' : 'unchecked' } uncheckedColor = 'rgba(1, 167, 190, 1)' onPress={() => setChecked('second')} />
        <Text style = {ExternalStyles.secondText}>Influencer</Text>
    </View>

    {/* This covers the Campaign Category third radio button */}
    <View style = {ExternalStyles.thirdRadio}>
      <RadioButton color = 'rgba(1, 167, 190, 1)' value = "third" status = { checked === 'third' ? 'checked' : 'unchecked' } uncheckedColor = 'rgba(1, 167, 190, 1)' onPress={() => setChecked('third')} />
        <Text style = {ExternalStyles.thirdText}>Startup</Text>
    </View>

    {/* This covers the Campaign Category fourth radio button */}
    <View style = {ExternalStyles.fourthRadio}>
      <RadioButton color = 'rgba(1, 167, 190, 1)' value = "fourth" status = { checked === 'fourth' ? 'checked' : 'unchecked' } uncheckedColor = 'rgba(1, 167, 190, 1)' onPress={() => setChecked('fourth')} />
        <Text style = {ExternalStyles.fourthText}>Other</Text>
    </View>

    {/* This covers the Audience text */}
    <View style = {ExternalStyles.audienceTitle}>
      <Text style = {ExternalStyles.boldAudience}>Audience</Text>
      <Text style = {ExternalStyles.restAudience}> (Who should see your campaign?)</Text>
    </View>

    {/* This covers the Audience input box */}
    <TextInput style = {ExternalStyles.audienceBox} onChangeText = {(audience) => setGroup(audience)} 
        value = {audience} placeholder = "Audience Details"/>

    {/* This covers the campaign end date section */}
    <Text style = {ExternalStyles.campaignDate}>Choose when this campaign will end</Text>
    <TextInput style = {ExternalStyles.campDate} onChangeText = {(date) => setDate(date)} 
        value = {date} placeholder = "7"/>

    {/* This covers the Daily Budget section */}
    <Text style = {ExternalStyles.budgetTitle}>Daily Budget</Text>
    <Text style = {ExternalStyles.budgetDescription}>Actual amount you may want to spend</Text>
    <TextInput style = {ExternalStyles.campBudget} onChangeText = {(currency) => setAmount(currency)} 
        value = {currency} placeholder = "PKR"/>

    {/* This covers the Campaign Placement section */}
    <Text style = {ExternalStyles.campPlace}>Campaign Placement</Text>
    <TextInput style = {ExternalStyles.campBudget} onChangeText = {(media) => setSocial(media)} 
        value = {media} placeholder = "Facebook, Instagram, Twitter, etc."/>

    {/* This covers the Next button */}
    <View style = {ExternalStyles.nextButton}>
      <Pressable style = {ExternalStyles.buttonStyle} onPress = {() => navigation.navigate('Upload Campaign')}>
        <Text style = {ExternalStyles.buttonText}>Next</Text>
      </Pressable>
    </View>

    {/* This covers the footer naviagtion icons */}
    <View style = {ExternalStyles.footerContainer}>
      <View style = {ExternalStyles.navbarContainer}>
        <Pressable onPress = {() => navigation.navigate('Home')}>
          <View style = {ExternalStyles.homeIcon}>
            <HomeIcon placeholderImageSource = { home } />
          </View>
        </Pressable>

        <Pressable onPress = {() => navigation.navigate('Calculator')}>
          <View style = {ExternalStyles.homeIcon}>
            <CalcIcon placeholderImageSource = { calc } />
          </View>
        </Pressable>

        <Pressable onPress = {() => navigation.navigate('Timeline')}>
          <View style = {ExternalStyles.homeIcon}>
            <TimeIcon placeholderImageSource = { time } />
          </View>
        </Pressable>
          
        <Pressable onPress = {() => navigation.navigate('Account')}>
          <UserIcon placeholderImageSource = { user } />
        </Pressable>

      </View>
    </View>

    {/* This covers the footer naviagtion text */}
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