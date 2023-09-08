import { StyleSheet, Image } from 'react-native';

export default function BackButtonImage({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.backButton} />
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: 48,
    height: 48,
    flexShrink: 0
  },
});