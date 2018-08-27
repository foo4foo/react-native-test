// @flow
import axios from 'axios';

export const getUsersData = async () => {
  return await axios({
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
};

export const getUserData = async (userId: number) => {
  return await axios({
    url: `https://jsonplaceholder.typicode.com/users/${userId}`,
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  });
};

export const searchByEmail = async (email: string) => {
  return await axios({
    url: `https://jsonplaceholder.typicode.com/users?email=${email}`,
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  });
};
