import { addItem, removeItem } from "../actionTypes";

export const addItemHistory = (data) => ({
  type: addItem,
  payload: data,
});

export const removeItemHistory = (index) => ({
  type: removeItem,
  payload: index,
});
