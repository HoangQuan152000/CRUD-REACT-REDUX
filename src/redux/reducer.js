import * as types from "./actionType";

const initialState = {
  user: {},
  users: [],
  loading: true,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_USER:
    case types.UPDATE_USER:
    case types.ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case types.GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default usersReducers;
