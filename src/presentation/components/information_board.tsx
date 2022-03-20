import React from 'react';
import {View, StyleSheet, Dimensions, ImageStyle, Text} from 'react-native';
import {Information} from '../../domain/entities/entities';
import CircleAvatar from './circle_avatar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface InfromationBoardProps {
  information: Information;
  avatar_style?: ImageStyle;
}

const InformationBoard: React.FC<InfromationBoardProps> = props => {
  const {information, avatar_style} = props;

  const render_keys = () => {
    let keys = Object.keys(information);
    return (
      <View style={styles.viewText}>
        {keys.map(item => {
          if (item !== 'avatar_uri')
            return (
              <Text style={styles.textFields}>{formatTextField(item)}</Text>
            );
        })}
      </View>
    );
  };

  const formatTextField = (text: string) => {
    switch (text) {
      case 'full_name':
        return 'Full Name:';
      case 'DOB':
        return 'Birthday:';
      case 'gender':
        return 'Gender:';
      case 'department':
        return 'Department:';
      default:
        return '...';
    }
  };

  const render_values = () => {
    let tempInfor = JSON.parse(JSON.stringify(information));
    delete tempInfor.avatar_uri;
    let values = Object.values(tempInfor);
    return (
      <View style={styles.viewText}>
        {values.map(item => {
          return <Text style={styles.textValues}>{formatTextValue(item)}</Text>;
        })}
      </View>
    );
  };

  const formatTextValue = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <CircleAvatar
          source={{uri: information.avatar_uri}}
          style={avatar_style ? avatar_style : styles.avatar}
        />
      </View>
      <View style={styles.fieldsContainer}>{render_keys()}</View>
      <View style={styles.valuesContainer}>{render_values()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    flex: 4,
    alignItems: 'center',
  },
  fieldsContainer: {
    flex: 3,
    height: '100%',
  },
  valuesContainer: {
    flex: 3,
  },
  avatar: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    borderRadius: windowWidth * 0.25,
  },
  viewText: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  textFields: {
    fontSize: 16,
    color: 'brown',
    fontWeight: 'bold',
  },
  textValues: {
    fontSize: 16,
    color: 'brown',
    fontWeight: 'normal',
  },
});

export default InformationBoard;
