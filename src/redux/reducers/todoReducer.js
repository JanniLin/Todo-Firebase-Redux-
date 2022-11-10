import {todoConstants} from "../constants/todoConstants";

export const defaultState = {
  todo: [],
  isLoading: false,
  alertSuccess: '',
  alertDanger: '',
  checked: false,
}


export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case todoConstants.ADD_TODO:
      return {
        ...state, todo: [...state.todo, action.payload]
      }
    case todoConstants.GET_TODOS:
      return {
        ...state, todo: action.payload
      }
    case todoConstants.LOADING:
      return {
        ...state, isLoading: !state.isLoading
      }

    case todoConstants.DELETE_TODO:
      return {
        ...state, todo: action.payload
      }
    case todoConstants.ALERT_SUCCESS:
      return {
        ...state, alertSuccess: action.payload
      }
    case todoConstants.ALERT_DANGER:
      return {
        ...state, alertDanger: action.payload
      }
    case todoConstants.CHECKED:
      return {
        ...state, todo: action.payload
      }

    default:
      return state
  }
}
