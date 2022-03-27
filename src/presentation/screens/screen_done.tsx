import React from 'react';
import {StyleSheet, View, Dimensions, Text, Image} from 'react-native';
import ScreenCore from '../components/screen_core';
import PillShapedButton from '../components/button_pill_shaped';
import {
  ICON_PINK_HEART,
  IMAGE_FAVORITE,
  ICON_YELLOW_DOUBLE_ARROW_DOWN,
} from '../../../resource/images';
import {useDispatch} from 'react-redux';
import {reset} from '../redux/slice';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScreenDone: React.FC = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const renderChild = () => {
    return (
      <View style={styles.childContainer}>
        <View style={styles.topContainer}>
          <Image
            source={IMAGE_FAVORITE}
            resizeMode="contain"
            style={styles.imageEnjoyNoodles}
          />
          <View style={styles.viewEnjoyNoodlesText}>
            <Text style={styles.textEnjoyNoodles}>{'Enjoy your noodles'}</Text>
            <Image
              source={ICON_PINK_HEART}
              resizeMode="contain"
              style={styles.iconHeart}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonGetNoodle}>
            <PillShapedButton text="Back to home" onPress={handleLogout} />
          </View>
          <Text style={styles.textGetNoodles}>{'Get them below'}</Text>
          <Image
            style={styles.iconDoubleArrowDown}
            source={ICON_YELLOW_DOUBLE_ARROW_DOWN}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };

  const handleLogout = () => {
    dispatch(reset());
    navigation.reset({
      index: 0,
      routes: [{name: 'Screen welcome'}],
    });
  };

  return (
    <View style={styles.container}>
      <ScreenCore title="Done" renderChild={renderChild} />
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
  imageEnjoyNoodles: {
    alignSelf: 'center',
    width: windowWidth * 0.6,
    height: windowHeight * 0.3,
  },
  viewEnjoyNoodlesText: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: -windowHeight * 0.02,
  },
  textEnjoyNoodles: {
    color: 'red',
    fontSize: 26,
    fontWeight: '900',
  },
  iconHeart: {
    width: windowWidth * 0.08,
    height: windowHeight * 0.08,
    marginLeft: windowWidth * 0.03,
  },
  bottomContainer: {
    flex: 4,
  },
  buttonGetNoodle: {
    alignSelf: 'center',
    marginTop: windowHeight * 0.02,
  },
  textGetNoodles: {
    color: 'orange',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    marginTop: windowHeight * 0.02,
  },
  iconDoubleArrowDown: {
    width: windowWidth * 0.04,
    height: windowHeight * 0.05,
    alignSelf: 'center',
  },
});

export default ScreenDone;
