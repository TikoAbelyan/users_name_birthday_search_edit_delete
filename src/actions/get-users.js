import * as actionTypes from '../action-types';
import Axios from 'axios';

export const getUsers = () => {
  return Axios.get('https://randomuser.me/api/?results=50')
    .then(res => res.data)
    .then(data => ({
      type: actionTypes.getUsers,
      payload: data
    }))
}