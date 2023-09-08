import { StyleSheet, Image } from 'react-native';

export default function NavbarStyles({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    flexShrink: 0
  }
});