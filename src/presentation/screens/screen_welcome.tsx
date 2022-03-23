import React, {useEffect} from 'react';
import {StyleSheet, View, Dimensions, Image, Text} from 'react-native';
import ScreenCore from '../components/screen_core';
import VideoPlayer from 'react-native-video-player';
import {
  IMAGE_LOGO,
  ICON_SCAN,
  ICON_WHITE_DOUBLE_ARROW_RIGHT,
  IMAGE_CARD_SCAN,
} from '../../../resource/images';
import Frame from '../components/frame';
import ImageButton from '../components/image_button';
import {useDispatch} from 'react-redux';
import {getNoodleMachineStatus} from '../redux/actions';
import {resetIDError} from '../redux/slice';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScreenWelcome: React.FC = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoodleMachineStatus());
  }, []);

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
            style={styles.imageIconScan}
          />
          <Text style={styles.textScanInsctruction}>
            {'Follow the arrow to scan card'}
          </Text>
        </View>
        <View style={styles.buttonScanSection}>
          <View style={styles.viewImageScanCard}>
            <Image
              source={IMAGE_CARD_SCAN}
              resizeMode="contain"
              style={styles.imageScanCard}
            />
          </View>
          <View style={styles.viewArrowButton}>
            <ImageButton
              source={ICON_WHITE_DOUBLE_ARROW_RIGHT}
              onPress={() => {
                dispatch(resetIDError());
                navigation.navigate('Screen scan card');
              }}
              imageStyle={styles.imageArrowButton}
              buttonStyle={{...styles.buttonArrow, ...styles.imageArrowButton}}
            />
          </View>
        </View>
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
          resizeMode="stretch"
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
    height: '90%',
    justifyContent: 'center',
  },
  video: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  videoSection: {
    flex: 4,
  },
  instructionSection: {
    flex: 2,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonScanSection: {
    flex: 4,
    flexDirection: 'row',
  },
  viewArrowButton: {
    flex: 3,
    justifyContent: 'center',
  },
  viewImageScanCard: {
    flex: 7,
    justifyContent: 'center',
  },
  textScanInsctruction: {
    fontSize: 21,
    color: '#7a0c04',
    fontWeight: 'bold',
  },
  imageIconScan: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.1,
    marginHorizontal: windowWidth * 0.02,
  },
  buttonArrow: {
    marginLeft: windowWidth * 0.06,
    marginBottom: windowHeight * 0.05,
  },
  imageArrowButton: {
    width: windowWidth * 0.15,
    height: windowHeight * 0.05,
  },
  imageScanCard: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.3,
    alignSelf: 'flex-end',
    marginRight: windowWidth * 0.06,
    marginBottom: windowHeight * 0.05,
  },
});

export default ScreenWelcome;
