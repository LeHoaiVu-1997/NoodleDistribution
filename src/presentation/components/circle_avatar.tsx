import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface CircileAvatarProps {
  source: ImageSourcePropType;
  style?: ImageStyle;
}

const CircleAvatar: React.FC<CircileAvatarProps> = props => {
  const {source, style} = props;
  return (
    <View>
      <Image
        source={source}
        style={style ? style : styles.avatar}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    borderRadius: windowWidth * 0.3,
  },
});

export default CircleAvatar;
