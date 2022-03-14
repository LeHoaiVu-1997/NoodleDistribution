import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import ScreenCore from '../components/screen_core';
import Video from 'react-native-video';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScreenWelcome: React.FC = props => {
  const {navigation} = props;

  const renderChild = () => {
    return (
      <View>
        <View style={styles.videoContainer}>
          <Video
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            style={styles.backgroundVideo}
          />
        </View>
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
  videoContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.28,
    borderRadius: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default ScreenWelcome;
