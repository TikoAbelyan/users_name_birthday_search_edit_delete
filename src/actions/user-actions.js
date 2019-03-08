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
  payload: {
    filtered: searchFilter(state),
    value: state.value
  } 
});

const searchFilter = state => {
  return state.users.filter( user => {
    return user.name.first.includes(state.value) && user
  })
};