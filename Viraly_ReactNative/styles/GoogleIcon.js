import { StyleSheet, Image } from 'react-native';

export default function GoogleIcon({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.google_image} />
  );
}

/*This is the stylesheet for the Google button image on the login screen*/
const styles = StyleSheet.create({
  google_image: {
    width: 24,
    height: 24,
    flexShrink: 0
  },
});