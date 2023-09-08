import { StyleSheet, Image } from 'react-native';

export default function EmailImage({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 168,
    flexShrink: 0
  },
});