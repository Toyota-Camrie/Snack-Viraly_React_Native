import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

/*This imports all of the pages for navigational purposes*/
import OnboardingScreen from './OnboardingScreen'
import LoginScreen from './LoginScreen'
import ForgotPassword from './ForgotPassword'
import VerifyEmail from './VerifyEmail'
import NewPassword from './NewPassword'
import Homepage from './HomeScreen'
import CampaignLaunch from './LaunchCampaign'
/*import Upload from './UploadCampaign'*/
/*import Calc from './CalculatorScreen'*/
/*import Time from './TimelineScreen'*/
/*import User from './AccountScreen'*/

const Stack = createNativeStackNavigator()

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

        {/*This directs the user to the onboarding screen*/}
        <Stack.Screen name = "Onboarding" component = {OnboardingScreen} />

        {/*This directs the user to the login screen*/}
        <Stack.Screen name = "Login" component = {LoginScreen} /> 

        {/*This directs the user to the forgot password screen*/}
        <Stack.Screen name = "Forgot Password" component = {ForgotPassword} />

        {/*This directs the user to the verify email screen*/}
        <Stack.Screen name = "Verify Email" component = {VerifyEmail} />

        {/*This directs the user to the new password screen*/}
        <Stack.Screen name = "New Password" component = {NewPassword} />

        {/*This directs the user to the home screen*/}
        <Stack.Screen name = "Home" component = {Homepage} />

        {/*This directs the user to the launch campaign screen*/}
        <Stack.Screen name = "Launch Campaign" component = {CampaignLaunch} />

        
        {/*<Stack.Screen name = "UploadCampaign" component = {Upload} />*/}
        {/*<Stack.Screen name = "Calculator" component = {Calc} />*/}
        {/*<Stack.Screen name = "Timeline" component = {Time} />*/}
        {/*<Stack.Screen name = "Account" component = {User} />*/}
        </Stack.Navigator>
      </NavigationContainer>
    );
}