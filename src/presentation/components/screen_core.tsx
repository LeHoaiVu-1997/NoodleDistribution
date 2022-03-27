import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextStyle,
  ImageBackground,
} from 'react-native';
import {IMAGE_LOGO, IMAGE_BACKGROUND} from '../../../resource/images';

export interface ScreenCoreProps {
  renderChild: any;
  title: string;
  titleStyle?: TextStyle;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScreenCore: React.FC<ScreenCoreProps> = props => {
  const {renderChild, title, titleStyle} = props;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGE_BACKGROUND}
        resizeMode="stretch"
        style={styles.imageBackground}>
        <View style={styles.headerContainer}>
          <Image
            source={IMAGE_LOGO}
            resizeMode="contain"
            style={styles.imageLogo}
          />
          <Text style={titleStyle ? titleStyle : styles.textTitle}>
            {title.toUpperCase()}
          </Text>
        </View>
        <View style={styles.contentContainer}>{renderChild()}</View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    flex: 3,
    alignItems: 'center',
  },
  imageLogo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.15,
    marginTop: windowHeight * 0.015,
  },
  contentContainer: {
    flex: 7,
  },
  textTitle: {
    color: 'red',
    fontSize: 40,
    fontWeight: '900',
    marginTop: windowHeight * 0.03,
  },
});

export default ScreenCore;
