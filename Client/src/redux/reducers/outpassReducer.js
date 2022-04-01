import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  outpasses: [
    {
      firstname: "Vinul",
      lastname: "James",
      registrationNo: 123456789,
      address1: "xyz",
      desc: "home visit",
    },
  ],
};

export const outpassReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_OUTPASS:
      return state;
    case ActionTypes.SET_OUTPASS:
      return state;
    default:
      return state;
  }
};
