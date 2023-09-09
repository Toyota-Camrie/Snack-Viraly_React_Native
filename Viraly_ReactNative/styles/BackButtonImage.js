import { StyleSheet, Image } from 'react-native';

export default function BackButtonImage({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.backButton} />
  );
}

/*This is the stylesheet for the back button image*/
const styles = StyleSheet.create({
  backButton: {
    width: 48,
    height: 48,
    flexShrink: 0
  },
});