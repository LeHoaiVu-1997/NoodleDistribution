import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Text, Image} from 'react-native';
import ScreenCore from '../components/screen_core';
import PillShapedButton from '../components/button_pill_shaped';
import {
  ICON_PINK_HEART,
  IMAGE_FAVORITE,
  ICON_YELLOW_DOUBLE_ARROW_DOWN,
  IMAGE_CUPS_FRAME,
} from '../../../resource/images';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScreenNoNoodles: React.FC = props => {
  const {navigation} = props;

  const renderChild = () => {
    return (
      <View style={styles.childContainer}>
        <Text style={styles.viewText}>
          <Text style={styles.text}>{'There is '}</Text>
          <Text style={styles.textHightlight}>{'0 '}</Text>
          <Text style={styles.text}>
            {'cup of noodles left in the machine. Please fill in to continue.'}
          </Text>
        </Text>
        <Image
          style={styles.cupsFrame}
          source={IMAGE_CUPS_FRAME}
          resizeMode="contain"
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScreenCore title="Out of noodles" renderChild={renderChild} />
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
  viewText: {
    width: windowWidth * 0.7,
    alignSelf: 'center',
    textAlign: 'center',
  },
  text: {
    color: 'brown',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textHightlight: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cupsFrame: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.2,
    alignSelf: 'center',
    marginTop: windowHeight * 0.04,
  },
});

export default ScreenNoNoodles;
