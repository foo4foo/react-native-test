// @flow
import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const getBuildsData = async (apiKey) => {
  console.log(apiKey);
  return await axios({
    url: `https://circleci.com/api/v1.1/recent-builds?circle-token=2b72a20c0cf7be14a7eef21a8b3879a838453828`,
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
};
