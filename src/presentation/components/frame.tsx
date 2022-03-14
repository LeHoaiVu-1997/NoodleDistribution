import React from 'react';
import {StyleSheet, View, Dimensions, StyleProp, ViewStyle} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface FrameProps {
  render_content: any;
  background_1_style?: StyleProp<ViewStyle>;
  background_2_style?: StyleProp<ViewStyle>;
}

const Frame: React.FC<FrameProps> = props => {
  const {render_content, background_1_style, background_2_style} = props;

  return (
    <View style={styles.container}>
      <View
        style={background_1_style ? background_1_style : styles.background_1}>
        <View
          style={background_2_style ? background_2_style : styles.background_2}>
          {render_content()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background_1: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.25,
    borderRadius: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background_2: {
    width: '95%',
    height: '93%',
    backgroundColor: 'orange',
    borderRadius: 15,
    borderColor: 'brown',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Frame;
