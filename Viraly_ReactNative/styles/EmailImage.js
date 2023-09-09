import { StyleSheet, Image } from 'react-native';

export default function EmailImage({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.image} />
  );
}

/*This is the stylesheet for the email image on the verify email screen*/
const styles = StyleSheet.create({
  image: {
    width: 112,
    height: 112,
    flexShrink: 0
  },
});