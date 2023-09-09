import { StyleSheet, Image } from 'react-native';

export default function HomeBackground({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.image} />
  );
}

/*This is the stylesheet for the home screen background image*/
const styles = StyleSheet.create({
  image: {
    width: 304,
    height: 192,
    flexShrink: 0
  }
});