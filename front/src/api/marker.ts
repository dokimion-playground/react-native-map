import axiosInstance from './axios';

const getMarkers = async () => {
  const {data} = await axiosInstance.get('/markers/my');

  return data;
};

export {getMarkers};
