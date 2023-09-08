import { StyleSheet, Image } from 'react-native';

export default function ProfileImage({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
    flexShrink: 0
  }
});