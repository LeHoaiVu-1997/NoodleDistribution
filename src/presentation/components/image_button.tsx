import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface ImageButtonProps {
  source: ImageSourcePropType;
  imageStyle?: ImageStyle;
  buttonStyle?: ImageStyle;
  onPress: () => void;
}

const ImageButton: React.FC<ImageButtonProps> = props => {
  const {source, imageStyle, buttonStyle, onPress} = props;

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={buttonStyle ? buttonStyle : styles.buttonContainer}>
        <Image
          source={source}
          resizeMode="contain"
          style={imageStyle ? imageStyle : styles.image}
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

export default ImageButton;
