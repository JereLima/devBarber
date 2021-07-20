// import React, {useState} from 'react';
// import Geolocation from '@react-native-community/geolocation';
// import {PermissionsAndroid, Platform} from 'react-native';

// const Location = () => {
//   if (Platform.OS === 'ios') {
//     getGeolocation();
//   } else {
//     const requestLocationPermission = async () => {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Localização',
//           message: 'Precisamos acessar o local',
//           buttonNeutral: 'perguntar depois',
//           buttonNegative: 'cancelar',
//           buttonPositive: 'OK',
//         },
//         {enableHighAccuracy: true, timeout: 2000, maximumAge: 10000},
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         getGeolocation();
//       } else {
//         console.log('ruim');
//       }
//     };
//     requestLocationPermission();
//   }
// };

// const getGeolocation = () => {
//   Geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position);
//     },
//     (error) => {
//       // See error code charts below.
//       console.log('error.code,', error.message);
//     },
//     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//   );
// };

// export default Location;
