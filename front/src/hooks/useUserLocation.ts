import {useEffect, useState} from 'react';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import {LatLng} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import useAppState from './useAppState';

export default function useUserLocation() {
  const [userLocation, setUserLocation] = useState<LatLng>({
    latitude: 37.5665,
    longitude: 126.978,
  });

  const {isComeback} = useAppState();

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  useEffect(() => {
    const getLocation = async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        console.log('Location permission denied');
        return;
      }

      const watchId = Geolocation.watchPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setUserLocation({latitude, longitude});
        },
        error => {
          console.error('Location Error:', error);
          Alert.alert('Error', 'Failed to get location');
        },
        {
          enableHighAccuracy: true,
          distanceFilter: 1,
        },
      );
      return () => {
        Geolocation.clearWatch(watchId);
      };
    };

    getLocation();
  }, [isComeback]);

  return {userLocation};
}
