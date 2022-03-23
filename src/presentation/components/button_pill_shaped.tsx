import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ViewStyle,
  StyleProp,
  TextStyle,
  Text,
} from 'react-native';
import {IMAGE_BACKGROUND_BUTTON} from '../../../resource/images';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface PillShapedButtonProps {
  text: string;
  textStyle?: TextStyle;
  disable?: boolean;
  onPress: () => void;
  button_style?: StyleProp<ViewStyle>;
}

const PillShapedButton: React.FC<PillShapedButtonProps> = props => {
  const {text, disable, textStyle, onPress, button_style} = props;

  return (
    <View>
      <ImageBackground
        source={IMAGE_BACKGROUND_BUTTON}
        resizeMode="contain"
        style={button_style ? button_style : styles.buttonStyle}>
        <TouchableOpacity
          style={button_style ? button_style : styles.buttonStyle}
          onPress={onPress}
          disabled={disable ? disable : false}>
          <Text style={textStyle ? textStyle : styles.textStyle}>{text}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.1,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'brown',
    fontWeight: '900',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default PillShapedButton;
