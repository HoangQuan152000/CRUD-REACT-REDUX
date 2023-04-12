import * as types from "./actionType";
import axios from "axios";

const getUsers = () => ({
  type: types.GET_USERS,
});

const userDelete = () => ({
  type: types.DELETE_USER,
});

const userAdd = () => ({
  type: types.ADD_USER,
});

const getUser = (user) => ({
  type: types.GET_USER,
  payload : user
});

const updateUser = () => ({
  type: types.UPDATE_USER,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        dispatch(getUsers(resp.data));
        console.log(resp.data)
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        console.log(resp);
        dispatch(userDelete()); 
        dispatch(loadUsers())
      })
      .catch((error) => console.log(error));
  };
};
export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`,user)
      .then((resp) => {
        console.log(resp);
        dispatch(userAdd())
      })
      .catch((error) => console.log(error));
  };
};
export const loadUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        dispatch(getUser(resp.data));
        console.log(resp.data)
      })
      .catch((error) => console.log(error));
  };
};
export const putUser = (user , id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`,user)
      .then((resp) => {
        dispatch(updateUser());
        console.log(resp.data)
      })
      .catch((error) => console.log(error));
  };
};