import { types } from "../types/types";
// const state ={
//     name: 'Meyling',
//     gmail: 'meyling@gmail.com',
//     logged: true
// }

export const authReducer = (state = {}, action) => {
  console.log("use reducer", action);

  switch (action.type) {
    case types.login:
      console.log("login Reduce");
      return { ...action.payload, logged: true };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
