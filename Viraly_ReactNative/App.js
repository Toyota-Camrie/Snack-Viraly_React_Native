import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
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
        <Stack.Screen name = "Onboarding" component = {OnboardingScreen} />
        <Stack.Screen name = "Login" component = {LoginScreen} /> 
        <Stack.Screen name = "Forgot Password" component = {ForgotPassword} />
        <Stack.Screen name = "Verify Email" component = {VerifyEmail} />
        <Stack.Screen name = "New Password" component = {NewPassword} />
        <Stack.Screen name = "Home" component = {Homepage} />
        <Stack.Screen name = "Launch Campaign" component = {CampaignLaunch} />
        {/*<Stack.Screen name = "UploadCampaign" component = {Upload} />*/}
        {/*<Stack.Screen name = "Calculator" component = {Calc} />*/}
        {/*<Stack.Screen name = "Timeline" component = {Time} />*/}
        {/*<Stack.Screen name = "Account" component = {User} />*/}
        </Stack.Navigator>
      </NavigationContainer>
    );
}