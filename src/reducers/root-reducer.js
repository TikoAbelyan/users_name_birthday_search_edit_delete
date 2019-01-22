import * as actionTypes from '../action-types';

export default ( state = {} , action ) => {
  switch(action.type){
    case actionTypes.getUsers:
      return {
          ...state,
          users: [...action.payload.results]
      };
      case actionTypes.deleteUser:
        return {
            ...state,
            users: [
              ...action.payload.users.filter( (user , i) => {
                return i !== action.payload.index ? user : null
              })
            ]
        };
      case actionTypes.editUser:
        return {
          ...state ,
          users: [...action.payload.users.map( (v,i) => {
            i = action.payload.index ? v.name.first = action.payload.value : null
            return v
          })]
        };
      case actionTypes.search:
        return {
          ...state ,
          users: [...action.payload.users.filter( user => {
            if(user.name.first.includes(action.payload.value)) {
              return user
            }
            else {
              return null
            }
          })]
        }
    default: 
      return state;
  }
}