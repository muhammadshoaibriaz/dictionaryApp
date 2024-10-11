import { addItem, removeItem } from "../actionTypes";

export const Reducers = (state = [], action) => {
  switch (action.type) {
    case addItem:
      return [...state, action.payload];
    case removeItem:
      const deleteArray = action.payload.filter((item, index) => {
        return (index = action.payload);
      });
      return deleteArray;
    default:
      return state;
  }
};
