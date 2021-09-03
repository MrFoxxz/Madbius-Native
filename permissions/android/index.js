import {
  check,
  checkMultiple,
  request,
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';

/* 
  Antes de crear permisos, recordar colocar el use permission
  corresponiente en el siguiente archivo:
  android\app\src\main\AndroidManifest.xml
  */

//REQUEST
export const requestCameraPermission = () => {
  request(PERMISSIONS.ANDROID.CAMERA).then(result => {
    console.log(result);
  });
};

export const requestMultiplePermission = () =>
  requestMultiple([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  ]).then(statuses => {
    console.log('Camera', statuses[PERMISSIONS.ANDROID.CAMERA]);
    console.log(
      'ExternalStorage',
      statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
    );
  });

//CHECK

export const checkPermissions = () => {
  check(PERMISSIONS.ANDROID.CAMERA)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const checkMultiplePermissions = () => {
  checkMultiple([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  ]).then(statuses => {
    console.log('Camera', statuses[PERMISSIONS.ANDROID.CAMERA]);
    console.log(
      'ExternalStorage',
      statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
    );
  });
};
