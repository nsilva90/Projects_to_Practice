import { DO_REQUEST } from "../actions";

const INITIAL_STATE = {
  food: [],
 }

const productsReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
  case DO_REQUEST:
    return { ...state, food: [ ...state.food, action.food ]}

  default:
    return state;
}
}

export default productsReducer;