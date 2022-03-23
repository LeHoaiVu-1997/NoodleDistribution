import React, {useEffect} from 'react';
import {StyleSheet, View, Dimensions, Image, Text} from 'react-native';
import ScreenCore from '../components/screen_core';
import VideoPlayer from 'react-native-video-player';
import {
  IMAGE_LOGO,
  ICON_SCAN,
  ICON_WHITE_DOUBLE_ARROW_RIGHT,
  IMAGE_CARD_SCAN,
  IMAGE_CARD_ERROR,
} from '../../../resource/images';
import ImageButton from '../components/image_button';
import {useDispatch} from 'react-redux';
import {resetIDError} from '../redux/slice';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScreenCardError: React.FC = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const renderChild = () => {
    return (
      <View style={styles.childContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.textCantRecongnizeID}>
            {'Can not recongnize your ID card.'}
          </Text>
          <View style={styles.viewTextScanAgain}>
            <Text style={styles.textScanAgain}>{'Please scan angain.'}</Text>
          </View>
          <Image
            source={IMAGE_CARD_ERROR}
            resizeMode="contain"
            style={styles.imageCardError}
          />
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
        </View>
        <View style={styles.bottomContainer}>
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
                navigation.replace('Screen scan card');
              }}
              imageStyle={styles.imageArrowButton}
              buttonStyle={{...styles.buttonArrow, ...styles.imageArrowButton}}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScreenCore title="Error" renderChild={renderChild} />
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
  topContainer: {
    flex: 6,
  },
  textCantRecongnizeID: {
    textAlign: 'center',
    fontWeight: '700',
    color: 'brown',
    fontSize: 22,
  },
  viewTextScanAgain: {
    alignSelf: 'center',
    backgroundColor: '#d46f68',
    borderRadius: 5,
    width: windowWidth * 0.4,
    height: windowHeight * 0.05,
    justifyContent: 'center',
    marginTop: windowHeight * 0.03,
  },
  textScanAgain: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
  },
  imageCardError: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.2,
    alignSelf: 'center',
    marginTop: windowHeight * 0.02,
  },
  instructionSection: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: windowHeight * -0.02,
  },
  imageIconScan: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.1,
    marginHorizontal: windowWidth * 0.02,
  },
  textScanInsctruction: {
    fontSize: 21,
    color: '#7a0c04',
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 4,
    flexDirection: 'row',
  },
  viewImageScanCard: {
    flex: 7,
    justifyContent: 'center',
  },
  imageScanCard: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.3,
    alignSelf: 'flex-end',
    marginRight: windowWidth * 0.06,
    marginBottom: windowHeight * 0.05,
  },
  viewArrowButton: {
    flex: 3,
    justifyContent: 'center',
  },
  imageArrowButton: {
    width: windowWidth * 0.15,
    height: windowHeight * 0.05,
  },
  buttonArrow: {
    marginLeft: windowWidth * 0.06,
    marginBottom: windowHeight * 0.05,
  },
});

export default ScreenCardError;
