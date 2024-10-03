import axios from 'axios';
import {useEffect, useState} from 'react';
import {LatLng} from 'react-native-maps';

export default function useGetAddress(location: LatLng) {
  const {latitude, longitude} = location;
  const [result, setResult] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&location_type=ROOFTOP&result_type=street_address&key=${MAP_API_KEY}&language=ko`,
        );

        const address = data.results.length
          ? data.results[0].formatted_address
          : `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;

        setResult(address);
      } catch (error) {
        setResult('주소를 알 수 없습니다.');
      }
    })();
  }, [latitude, longitude]);

  return result;
}
