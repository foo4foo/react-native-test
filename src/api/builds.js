// @flow
import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const getBuildsData = async (apiKey: string) => {
  return await axios({
    url: `https://circleci.com/api/v1.1/recent-builds?circle-token=2b72a20c0cf7be14a7eef21a8b3879a838453828`,
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
};

export const getBuildsDataByBranch = async (branch: string) => {
  return await axios({
    url: `https://circleci.com/api/v1.1/project/github/stefank-kolosek/react-native-test/tree/${branch}?circle-token=2b72a20c0cf7be14a7eef21a8b3879a838453828`,
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
};
