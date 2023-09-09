import { StyleSheet, Image } from 'react-native';

export default function OnboardingImg({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.image} />
  );
}

{/*This is the stylesheet for the background image on the onboarding screen*/}
const styles = StyleSheet.create({
  image: {
    width: 414,
    height: 487,
    flexShrink: 0
  }
});