import INITIAL_STATE from './state';
import { 
  CHANGE_INPUT,
  SIMPLE_SEARCH,
  SIMPLE_SEARCH_SUCCESS
} from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return action.payload;

    case SIMPLE_SEARCH:
      return state;

    case SIMPLE_SEARCH_SUCCESS:
      return action.payload;

    default: return state;
  }
}

export default reducer;