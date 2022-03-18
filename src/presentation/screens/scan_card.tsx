import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScanCard: React.FC = (props: any) => {
  const {navigation} = props;

  let scanner;

  const onSuccess = e => {
    console.log(e.data);
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
