import React from 'react';
import {StyleSheet, View, Dimensions, Image, Text} from 'react-native';
import ScreenCore from '../components/screen_core';
import Frame from '../components/frame';
import ImageButton from '../components/image_button';
import {IMAGE_CUP_1, IMAGE_CUP_2, IMAGE_CUP_3} from '../../../resource/images';
import CircleAvatar from '../components/circle_avatar';
import InformationBoard from '../components/information_board';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScreenInformation: React.FC = (props: any) => {
  const {navigation} = props;

  const render_information_board = () => {
    return (
      <View style={styles.informationBoard}>
        <InformationBoard
          information={{
            avatar_uri:
              'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
            DOB: '10/01/1997',
            full_name: 'Alice Mie',
            gender: 'female',
            department: 'design',
          }}
        />
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
