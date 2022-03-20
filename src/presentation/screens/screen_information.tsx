import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import ScreenCore from '../components/screen_core';
import Frame from '../components/frame';
import InformationBoard from '../components/information_board';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScreenInformation: React.FC = (props: any) => {
  const {navigation} = props;
  const user = useSelector((state: RootState) => state.rootSlice.user);

  const render_information_board = () => {
    return (
      <View style={styles.informationBoard}>
        <InformationBoard information={user} />
      </View>
    );
  };

  const render_child = () => {
    return (
      <View style={styles.childContainer}>
        <View style={styles.informationContainer}>
          <Frame
            render_content={render_information_board}
            background_1_style={styles.frame_background_1}
            background_2_style={styles.frame_background_2}
          />
        </View>
        <View style={styles.cupsContainer}></View>
        <View style={styles.buttonContainer}></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScreenCore renderChild={render_child} title={'Information'} />
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
  informationContainer: {
    flex: 2.5,
    borderWidth: 1,
    borderColor: 'white',
  },
  cupsContainer: {
    flex: 3.5,
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonContainer: {
    flex: 4,
    borderWidth: 1,
    borderColor: 'white',
  },
  informationBoard: {
    width: '100%',
    height: '100%',
  },
  frame_background_1: {
    width: windowWidth * 0.9,
    height: '90%',
  },
  frame_background_2: {
    width: '95%',
    height: '93%',
  },
});

export default ScreenInformation;
