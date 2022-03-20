import React, {useEffect} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {useDispatch, useSelector} from 'react-redux';
import {Information} from '../../domain/entities/entities';
import {getUser} from '../redux/actions';
import {RootState} from '../redux/store';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScanCard: React.FC = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.rootSlice.user);

  useEffect(() => {
    handleGetUserSuccessful(user);
  }, [user]);

  let scanner;

  const handleGetUserSuccessful = (userInformation: Information) => {
    if (
      (userInformation.DOB !== '' &&
        userInformation.avatar_uri !== '' &&
        userInformation.department !== '',
      userInformation.full_name !== '',
      userInformation.gender !== '')
    ) {
      navigation.navigate('Screen information');
    }
  };

  const onSuccess = e => {
    let data = e.data;
    data = data.replace(/\s+/g, '');
    let str = data.split(':');
    let id = str[1];
    dispatch(getUser(id));
  };

  const reactivateCamera = () => {
    scanner.reactivate();
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        ref={node => (scanner = node)}
        onRead={onSuccess}
        cameraStyle={styles.camStyle}
        cameraProps={{ratio: '5:3'}}
        fadeIn={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camStyle: {
    alignSelf: 'center',
    width: '90%',
    marginBottom: windowHeight * 0.08,
  },
});

export default ScanCard;
