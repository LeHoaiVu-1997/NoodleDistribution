import React from 'react';
import {StyleSheet, View, Dimensions, Image, Text} from 'react-native';
import ScreenCore from '../components/screen_core';
import VideoPlayer from 'react-native-video-player';
import {IMAGE_LOGO, ICON_SCAN} from '../../../resource/images';
import Frame from '../components/frame';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScreenWelcome: React.FC = props => {
  const {navigation} = props;

  const renderChild = () => {
    return (
      <View style={styles.childContainer}>
        <View style={styles.videoSection}>
          <Frame render_content={render_video} />
        </View>
        <View style={styles.instructionSection}>
          <Image
            source={ICON_SCAN}
            resizeMode="contain"
            style={styles.imageScanCard}
          />
          <Text style={styles.textScanInsctruction}>
            {'Follow the arrow to scan card'}
          </Text>
        </View>
        <View style={styles.buttonScanSection}></View>
      </View>
    );
  };

  const render_video = () => {
    return (
      <View style={styles.videoContainer}>
        <VideoPlayer
          video={{
            uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          thumbnail={IMAGE_LOGO}
          endThumbnail={IMAGE_LOGO}
          pauseOnPress={true}
          style={styles.video}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScreenCore title="Welcome" renderChild={renderChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childContainer: {
    flex: 1,
  },
  videoContainer: {
    width: '95%',
    height: '95%',
    justifyContent: 'center',
  },
  video: {
    borderRadius: 10,
  },
  videoSection: {
    flex: 4,
    borderColor: 'white',
    borderWidth: 2,
  },
  instructionSection: {
    flex: 2,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  buttonScanSection: {
    flex: 4,
  },
  textScanInsctruction: {
    fontSize: 21,
    color: 'red',
    fontWeight: 'bold',
  },
  imageScanCard: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.1,
    marginHorizontal: windowWidth * 0.02,
  },
});

export default ScreenWelcome;
