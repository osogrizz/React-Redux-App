import { SPACEX_LOAD_START, SPACEX_LOAD_SUCCESS, SPACEX_LOAD_FAIL } from '../actions'

const initialState = {
  isLoading: false,
  error: "",
  launches: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SPACEX_LOAD_START:
      return {
        ...state,
        isLoading: true,
      }
    case SPACEX_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        launches: [...state.launches, ...action.payload],
      }
    case SPACEX_LOAD_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }

  
    default:
      return state;
  }
}

export default reducer