import * as actionTypes from '../action-types';

export const deleteUser = (state) => ({
  type: actionTypes.deleteUser,
  payload: state
})

export const editUser = (state) => ({
  type: actionTypes.editUser,
  payload: state 
})

export const search = (state) => ({
  type: actionTypes.search,
  payload: state 
})