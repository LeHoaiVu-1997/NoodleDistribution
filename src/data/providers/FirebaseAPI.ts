import firestore from '@react-native-firebase/firestore';

export const getUser = async (id: string) => {
  const doc = await firestore()
    .collection('users')
    .doc(id)
    .get()
    .catch(err => console.log('firebase error: ', err));

  let user = doc.data();
  // console.log('api result user: ', user);

  if (user !== undefined) {
    return {
      success: true,
      user: {
        avatar_uri: user.avatar,
        full_name: user.full_name,
        DOB: user.DOB,
        gender: user.gender,
        department: user.department,
      },
    };
  } else {
    return {
      success: false,
      note: 'ID not available in database',
    };
  }
};

export const getNoodleMachineStatus = async () => {
  const doc = await firestore()
    .collection('cups')
    .doc('0')
    .get()
    .catch(err => console.log('firebase error', err));

  return {success: true, data: doc.data()};
};
