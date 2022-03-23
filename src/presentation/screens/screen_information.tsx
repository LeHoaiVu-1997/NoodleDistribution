import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ImageSourcePropType,
  Text,
} from 'react-native';
import ScreenCore from '../components/screen_core';
import Frame from '../components/frame';
import InformationBoard from '../components/information_board';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import ButtonCup from '../components/button_cup';
import ButtonCupSelected from '../components/button_cup_selected';
import {
  IMAGE_CUP_1,
  IMAGE_CUP_2,
  IMAGE_CUP_3,
  IMAGE_CUP_UNAVAILABLE,
} from '../../../resource/images';
import PillShapedButton from '../components/button_pill_shaped';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScreenInformation: React.FC = (props: any) => {
  const {navigation} = props;
  const user = useSelector((state: RootState) => state.rootSlice.user);
  const cups_amount = useSelector((state: RootState) => state.rootSlice.amount);
  const cups_status = useSelector(
    (state: RootState) => state.rootSlice.cups_status,
  );
  const [cup1Selected, setCup1Selected] = useState(false);
  const [cup2Selected, setCup2Selected] = useState(false);
  const [cup3Selected, setCup3Selected] = useState(false);

  const render_information_board = () => {
    return (
      <View style={styles.informationBoard}>
        <InformationBoard information={user} />
      </View>
    );
  };

  const handleButtonStatus = (
    isUnavailable: boolean,
    source: ImageSourcePropType,
    state: boolean,
    onPress: () => void,
  ) => {
    if (isUnavailable === false) {
      if (state === true) {
        return (
          <ButtonCupSelected
            source={source}
            onPress={onPress}
            imageStyle={styles.buttonCups}
            buttonStyle={styles.buttonCups}
          />
        );
      } else {
        return (
          <ButtonCup
            source={source}
            onPress={onPress}
            imageStyle={styles.buttonCups}
            buttonStyle={styles.buttonCups}
          />
        );
      }
    } else {
      return (
        <View>
          <ButtonCup
            source={IMAGE_CUP_UNAVAILABLE}
            onPress={onPress}
            imageStyle={styles.buttonCups}
            buttonStyle={styles.buttonCups}
            disable={true}
          />
          <Text style={styles.textCupUnavailable}>{'Unavailable'}</Text>
        </View>
      );
    }
  };

  const render_button_cups = () => {
    return (
      <View style={styles.viewButtonCups}>
        <View>
          {handleButtonStatus(cups_status[0], IMAGE_CUP_1, cup1Selected, () =>
            setCup1Selected(!cup1Selected),
          )}
        </View>
        <View>
          {handleButtonStatus(cups_status[1], IMAGE_CUP_2, cup2Selected, () =>
            setCup2Selected(!cup2Selected),
          )}
        </View>
        <View>
          {handleButtonStatus(cups_status[2], IMAGE_CUP_3, cup3Selected, () =>
            setCup3Selected(!cup3Selected),
          )}
        </View>
      </View>
    );
  };

  const renderPillShapedButton = () => {
    let cups_available = [];
    cups_available = cups_status.filter(item => item === false);

    if (cups_amount <= 0 || cups_available.length <= 0) {
      return (
        <PillShapedButton
          text="Come back next month"
          onPress={() => {}}
          disable={true}
        />
      );
    } else {
      return <PillShapedButton text="Get your noodles" onPress={() => {}} />;
    }
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
        <View style={styles.cupsContainer}>
          <View>{render_button_cups()}</View>
          <View style={styles.viewTextLine}>
            <Text style={styles.textLine}>
              <Text style={styles.textCupsAmountHightlight}>{cups_amount}</Text>
              <Text style={styles.textCupsAmount}>
                {' cups of noodles left this month'}
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonGetNoodle}>{renderPillShapedButton()}</View>
        </View>
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
  },
  cupsContainer: {
    flex: 3.5,
  },
  buttonContainer: {
    flex: 4,
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
  viewButtonCups: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: windowHeight * 0.01,
  },
  buttonCups: {
    width: windowWidth * 0.27,
    height: windowHeight * 0.18,
  },
  viewTextLine: {
    marginTop: windowHeight * 0.01,
  },
  textLine: {
    textAlign: 'center',
  },
  textCupsAmountHightlight: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  textCupsAmount: {
    fontSize: 12,
    color: 'grey',
    fontWeight: 'bold',
  },
  textCupUnavailable: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
    marginTop: windowHeight * -0.02,
  },
  buttonGetNoodle: {
    alignSelf: 'center',
    marginTop: windowHeight * 0.02,
  },
});

export default ScreenInformation;
