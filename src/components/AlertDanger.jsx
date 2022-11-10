import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionsTodo} from "../redux/actions/actions";

const AlertDanger = ({alertText}) => {
  const dispatch = useDispatch()
  const {alertDanger} = useSelector(state => state.todoReducer)

  const closingAlert = () => {
    dispatch(actionsTodo.alertAction.add_todo_danger(''))
  }
  setTimeout(() => {
    alertDanger.length > 0 &&
    dispatch(actionsTodo.alertAction.add_todo_danger(''))
  }, 8000)


  return (
    <div className='position-absolute top-50 start-50 translate-middle-x'>
      <div className="alert alert-danger " role="alert">
        {alertText}
        <button type="button"
                onClick={closingAlert}
                className="btn-close ms-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    </div>
  );
};

export default AlertDanger;
