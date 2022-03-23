import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {ImageButtonProps} from './image_button';
import {IMAGE_BACKGROUND_SELECTED_CUP} from '../../../resource/images';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ButtonCupSelected: React.FC<ImageButtonProps> = props => {
  const {source, disable, imageStyle, buttonStyle, onPress} = props;

  return (
    <View>
      <ImageBackground
        style={buttonStyle ? buttonStyle : styles.buttonContainer}
        source={IMAGE_BACKGROUND_SELECTED_CUP}
        resizeMode="contain">
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
      </ImageBackground>
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

export default ButtonCupSelected;
