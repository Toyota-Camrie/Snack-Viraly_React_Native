import { StyleSheet, Image } from 'react-native';

export default function LockImage({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.image} />
  );
}

{/*This is the stylesheet for the lock image on the forgot password screen*/}
const styles = StyleSheet.create({
  image: {
    width: 224,
    height: 168,
    flexShrink: 0
  },
});