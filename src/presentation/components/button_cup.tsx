import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ImageButtonProps} from './image_button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ButtonCup: React.FC<ImageButtonProps> = props => {
  const {source, disable, imageStyle, buttonStyle, onPress} = props;

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={buttonStyle ? buttonStyle : styles.buttonContainer}
        disabled={disable ? disable : false}>
        <Image
          source={source}
          style={imageStyle ? imageStyle : styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.1,
  },
  image: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.1,
  },
});

export default ButtonCup;
