import {todoConstants} from "../constants/todoConstants";
import {deleteTodo, fetchTodo, postTodo} from "../../api/api";
import {objTransformer} from "../../helpers/objTrasform";

const addTodoAction = (arrTodo) => async (dispatch) => {
  dispatch(loadingAction())
  try {
    const {status, data} = await postTodo(arrTodo)

    if (status === 200) {
      dispatch(loadingAction())
      dispatch({type: todoConstants.ADD_TODO, payload: {...arrTodo, id: data.name}})
      dispatch(alertAction.add_todo_success)
    }

  } catch (e) {
    dispatch(loadingAction())
    dispatch(alertAction.add_todo_danger)
    console.log(e)
  }
}

const deleteTodoAction = (id) => async (dispatch, getState) => {
  try {
    const res = await deleteTodo(id)
    if (res.status === 200) {
      const state = getState()
      dispatch({type: todoConstants.DELETE_TODO, payload: state.todoReducer.todo.filter(el => el.id !== id)})
    }
  } catch (e) {
    console.log(e)
  }
}

const fetchTodoAction = () => async (dispatch) => {
  try {
    dispatch(loadingAction())
    const obj = await fetchTodo()

    if (obj.status === 200) {
      dispatch(loadingAction())
      dispatch({type: todoConstants.GET_TODOS, payload: objTransformer(obj?.data)})
    } else if (obj.status === 304) {
      dispatch(loadingAction())
      dispatch({type: todoConstants.GET_TODOS, payload: objTransformer(obj?.data)})
      return
    }
  } catch (e) {
    dispatch(loadingAction())
    dispatch(alertAction.add_todo_danger(e.message))
  }
}
const checkedAction = (id) => async (dispatch, getState) => {
  const state = getState()

}
const loadingAction = () => ({type: todoConstants.LOADING});

const alertAction = {
  add_todo_success: {type: todoConstants.ALERT_SUCCESS, payload: "Congrats! New todo flu to DB."},
  add_todo_danger: (mess) => ({
    type: todoConstants.ALERT_DANGER,
    payload: (mess === undefined || mess === null) ? "Oops, something wrong!" : mess
  }),

}

export const actionsTodo = {
  addTodoAction,
  fetchTodoAction,
  loadingAction,
  deleteTodoAction,
  alertAction,
  checkedAction,
}

