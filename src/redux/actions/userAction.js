import { server } from '../store.js';
import axios from 'axios';

export const login = (email, password) => async dishpatch => {
  try {
    dishpatch({ type: 'loginRequest' });
    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log(data);
    dishpatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    dishpatch({ type: 'loginFail', payload: error.response.data.message });
  }
};

export const signup = (formdata) => async dishpatch => {
    try {
      dishpatch({ type: 'signupRequest' });
      const { data } = await axios.post(
        `${server}/register`,
       formdata,
        {
          headers: {
            'Content-type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
      console.log(data);
      dishpatch({ type: 'signupSuccess', payload: data });
    } catch (error) {
      dishpatch({ type: 'signupFail', payload: error.response.data.message });
    }
  };

export const getMyProfile = () => async dishpatch => {
  try {
    dishpatch({ type: 'loadUserRequest' });
    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });
    console.log(data);
    dishpatch({ type: 'loadUserSuccess', payload: data.user });
  } catch (error) {
    dishpatch({ type: 'loadUserFail', payload: error.response.data.message });
  }
};

export const logout = () => async dishpatch => {
  try {
    dishpatch({ type: 'logoutRequest' });
    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    console.log(data);
    dishpatch({ type: 'logoutSuccess', payload: data.message });
  } catch (error) {
    dishpatch({ type: 'logoutFail', payload: error.response.data.message });
  }
};
