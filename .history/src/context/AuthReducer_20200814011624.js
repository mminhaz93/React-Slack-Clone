export const actionTypes = {
  SET_USER: "SET_USER",
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;