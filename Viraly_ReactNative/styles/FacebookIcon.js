import { StyleSheet, Image } from 'react-native';

export default function FacebookIcon({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.facebook} />
  );
}

/*This is the stylesheet for the Facebook button image on the login screen*/
const styles = StyleSheet.create({
  facebook: {
    width: 24,
    height: 24,
    flexShrink: 0
  },
});